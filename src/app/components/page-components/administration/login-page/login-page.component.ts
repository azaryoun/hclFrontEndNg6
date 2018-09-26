
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppSettings } from '../../../../app.setting';
import { AccountService } from '../../../../services/administration/account.service';
import { Login } from '../../../../models/administration/account';
import { JasonWebToken } from '../../../../models/platform/jason-web-token';
import { DialogAlert } from '../../../../models/platform/dialog-alert';


@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {




  // using public setting of platform from AppSettings static class, these fields have been used in the template
  public projectName = AppSettings.projectName;
  public ownerName = AppSettings.ownerName;
  public appVersion: number = AppSettings.BACK_END_VERSION;
  public currentYear = AppSettings.currentYear;

  // public attributes:
  public showAlert: Boolean = false; // a flag to show/hide DialogAlert component
  public DialogAlert: DialogAlert = null; // model of DialogAlert component
  public isLoading = false; // a flag to show/hide LoadingSpinnerWeb component

  public formGroupEntity: FormGroup = this._formBuilder.group({
    mobileNo: ['', Validators.compose([Validators.required])],
    password: ['', Validators.compose([Validators.required])],
    backEndVersion: [this.appVersion, null], // it is sent to server later
  });

  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _accountService: AccountService // injecting AccountService
  ) { }

  ngOnInit() {

  }



  public signInClickHandler(): void {

    let oLogin: Login;

    oLogin = this.formGroupEntity.value; // bining formGroup to our model/object

    this.isLoading = true; // showing LoadingSpinnerWeb component


    // using _accountService to make login operation
    this._accountService.login(oLogin).subscribe(
      (result) => {

        if (result.isDone === true) { // check if login is ok or not

          const oJasonWebToken: JasonWebToken = result.datum;
          AppSettings.setAuth(oJasonWebToken);

          this.isLoading = false;  // hiding LoadingSpinnerWeb component

          this._router.navigate(['nav/user']); // login is ok, so goto the first page (here is UserPageComponent)
        } else {

          // loging failed

          this.isLoading = false;  // hiding LoadingSpinnerWeb component

          // reset the formGroupEntity controls and validators
          this.formGroupEntity.controls.password.setValue('');
          this.formGroupEntity.controls.password.markAsUntouched();
          this.formGroupEntity.controls.password.updateValueAndValidity();

          // show server message to user
          this.DialogAlert = new DialogAlert(result.serverMessage);

          this.showAlert = true; // showing DialogAlert component

          return;

        }

      },
      (error) => {
        // unhandled exception, so may be server is not ready at all
        this.isLoading = false; // hiding LoadingSpinnerWeb component
        this.DialogAlert = new DialogAlert('The server is not available.');
        this.showAlert = true; // showing DialogAlert component

      }
    );

  }

  public closeHandler(): void {
    this.showAlert = false;  // hding DialogAlert component
  }


}
