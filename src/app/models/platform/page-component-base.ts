
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { EntityService } from '../../services/platform/entity.service';
import { DialogConfirm } from './dialog-confirm';


export class PageComponentBase<TModel>  {

  public model: TModel = null; // the model for dialogEntityWeb Component

  public title = ''; // title of the page

  public showEntityDialog = false; // a flag to show/hide dialogEntityWeb component

  public isLoading = false;  // a flag to show/hide LoadingSpinnerWeb component

  public webComponentMode: 'edit' | 'new' | 'view';  // webComponentMode for dialogEntityWeb Component

  protected _id: number; // the current selected id;

  public showDeleteConfirm = false; // a flag to show/hide DialogConfirm component

  public DialogConfirm: DialogConfirm = null; // model of DialogConfirm component


  constructor(
    protected _router: Router,
    protected _snackBar: MatSnackBar,
    protected _entityService: EntityService<any, any>,
  ) {


  }



  public closeHandler(): void {
    this.showEntityDialog = false; // hiding LoadingSpinnerWeb component
    this.showDeleteConfirm = false; // hiding DialogConfirm component
  }

  public rowNewHandler(): void {

    this.webComponentMode = 'new'; // setting the webComponentMode for LoadingSpinnerWeb component
    this.model = null; // in "new" mode, the model is null
    this.showEntityDialog = true; // showing LoadingSpinnerWeb component
  }


  public rowViewHandler(id: number): void {

    this.webComponentMode = 'view'; // setting the webComponentMode for LoadingSpinnerWeb component

    // using userService to load user data from server then bining to the model of LoadingSpinnerWeb component
    this._entityService.getEntity(id).subscribe(result => {

      if (result.isDone === true) {
        this.model = result.datum; // binding the model of LoadingSpinnerWeb component
        this.showEntityDialog = true; // showing LoadingSpinnerWeb component
      } else {
        // model data cannot be loaded correctly so come back to login page

        this._router.navigate(['']);
      }

    }, (error) => {
      // model data cannot be loaded correctly so come back to login page

      this._router.navigate(['']);
    });


  }

  public rowEditHandler(id: number): void {

    this.webComponentMode = 'edit'; // setting the webComponentMode for LoadingSpinnerWeb component

    // using userService to load user data from server then bining to the model of LoadingSpinnerWeb component
    this._entityService.getEntity(id).subscribe(result => {

      if (result.isDone === true) {
        this._id = id; // set current selected id
        this.model = result.datum; // binding the model of LoadingSpinnerWeb component
        this.showEntityDialog = true; // showing LoadingSpinnerWeb component
      } else {
        // model data cannot be loaded correctly so come back to login page

        this._router.navigate(['']);
      }

    }, (error) => {
      // model data cannot be loaded correctly so come back to login page

      this._router.navigate(['']);
    });
  }
  public rowDeleteHandler(id: number): void {

    // the model for DialogConfirm component ("id" parameter is also set)
    this.DialogConfirm = new DialogConfirm('Are you sure to delete this ' + this.title + '?', id);

    this.showDeleteConfirm = true; // showing DialogConfirm component

  }

  public saveEntityHandler(entity: TModel): void {


    if (this.webComponentMode === 'new') {
      this.isLoading = true; // showing LoadingSpinnerWeb component

      // inserting entity using insertEntity method of entityService
      this._entityService.insertEntity(entity).subscribe(result => {
        this.isLoading = false; // hiding LoadingSpinnerWeb component

        if (result.isDone === true) {

          this._snackBar.open('The ' + this.title + ' inserted successfully', 'OK', {
            duration: 5000,

          });

          this.showEntityDialog = false; // hiding LoadingSpinnerWeb component

          this._entityService.makeReferesh(); // triggering ManagementWeb component to refresh its Kendo Grid


        } else {
          // server could not save the operation, so display the reason to entity
          this._snackBar.open(result.serverMessage, 'OK', {
            duration: 5000,
          });
        }


      }, (err => {
        // Unhandled exception
        this.isLoading = false; // hiding LoadingSpinnerWeb component
        this.showEntityDialog = false;
        this._router.navigate(['']);
      })
      );


    } else if (this.webComponentMode === 'edit') {
      this.isLoading = true; // showing LoadingSpinnerWeb component

      // updating the entity using updateEntity method of entityService
      this._entityService.updateEntity(this._id, entity).subscribe(result => {
        this.isLoading = false; // hiding LoadingSpinnerWeb component

        if (result.isDone === true) {

          this._snackBar.open('The ' + this.title + ' updated successfully', 'OK', {
            duration: 5000,

          });

          this.showEntityDialog = false; // hiding LoadingSpinnerWeb component
          this._entityService.makeReferesh(); // triggering ManagementWeb component to refresh its Kendo Grid

        } else {
          // server could not save the operation, so display the reason to entity

          this._snackBar.open(result.serverMessage, 'OK', {
            duration: 5000,
          });
        }


      }, (err => {
        // Unhandled exception
        this.isLoading = false; // hiding LoadingSpinnerWeb component
        this.showEntityDialog = false;
        this._router.navigate(['']);
      })
      );

    }

  }




  // handles confirm event of  DialogConfirm component (for deleting)
  public confirmDeleteHandler(id: number): void {

    this.showDeleteConfirm = false; // hiding DialogConfirm component

    this.isLoading = true; // showing LoadingSpinnerWeb component

    // deleteing the entity from server by deleteEntity method of entityService
    this._entityService.deleteEntity(id).subscribe(result => {
      this.isLoading = false; // hiding LoadingSpinnerWeb component

      if (result.isDone === true) {
        this._snackBar.open('The record deleted successfully', 'OK', {
          duration: 5000,

        });

        this._entityService.makeReferesh(); // triggering host component to refresh its Grid


      } else {

        // server could not save the operation, so display the reason to user

        this._snackBar.open(result.serverMessage, 'OK', {
          duration: 5000,
        });
      }

    }, (error) => {
      this.isLoading = false; // hiding LoadingSpinnerWeb component
      this._router.navigate(['']); // navigate to login page

    });


  }



}
