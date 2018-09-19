import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AppSettings } from '../../../../app.setting';
import { AccountService } from '../../../../services/administration/account.service';
import { UserProfile } from '../../../../models/administration/account';

@Component({
  templateUrl: './nav-page.component.html',
  styleUrls: ['./nav-page.component.css']
})
export class NavPageComponent implements OnInit {

  //using public setting of platform from AppSettings static class, these fields have been used in the template
  public projectName = AppSettings.projectName;


  //public attributes:
  public isLoading: boolean = true; //a flag to show/hide LoadingSpinnerWeb component
  public userProfile: UserProfile = null; //the model for dialogUserProfileWeb component

  //determinging if Breakpoints is Handset or not (mobile view and desktop view)
  public isHandset$: Observable<boolean> = this._breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private _router: Router,
    private _breakpointObserver: BreakpointObserver,
    private _accountService: AccountService, //injecting AccountService
  ) { }

  ngOnInit() {
    this.isLoading = true; //showing LoadingSpinnerWeb component

    //getting userProfile from server by getUserProfile method of _accountService
    this._accountService.getUserProfile().subscribe(
      (result) => {
        if (result.isDone == true && result.errorCode == null) {

          this.isLoading = false; //hiding LoadingSpinnerWeb component
          this.userProfile = result.datum; //setting the model of dialogUserProfileWeb compoent

        }
        else {
          // cannot load user profile from server so logout !!!
          this.isLoading = false; //hiding LoadingSpinnerWeb component
          this._logout();
        }
      },
      (error) => {
        // cannot load user profile from server so logout !!!
        this.isLoading = false; //hiding LoadingSpinnerWeb component
        this._logout();
      }
    );

  }




  // handling Click event of SignOut button in menu
  public onClickSignOut(): void {
    this._logout();
  }


  private _logout() {
    AppSettings.logout(); //calling AppSettings logout method
    this._router.navigate(['']);
  }
}
