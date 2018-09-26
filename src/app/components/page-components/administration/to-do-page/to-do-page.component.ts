import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../../../../services/administration/to-do.service';
import { LookUp } from '../../../../models/platform/look-up';
import { MatSnackBar } from '@angular/material';
import { AssigneeService } from '../../../../services/look-up/assignee.service';
import { ToDoStatusTypeService } from '../../../../services/look-up/to-do-status-type.service';
import { Router } from '@angular/router';
import { ToDo, ToDoManagement } from '../../../../models/administration/to-do';
import { PageComponentBase } from '../../../../models/platform/page-component-base';


@Component({
  templateUrl: './to-do-page.component.html',
  styleUrls: ['./to-do-page.component.css']
})
export class ToDoPageComponent extends PageComponentBase<ToDo> implements OnInit {


  public assignees: LookUp[] = []; // lookUp data for dialogToDoWeb Component
  public toDoStatusTypes: LookUp[] = []; // lookUp data for dialogToDoWeb Component
  public todoes: ToDoManagement[] = [];


  constructor(
    protected _router: Router,
    protected _snackBar: MatSnackBar,
    protected _entityService: ToDoService,
    assigneeService: AssigneeService, // injecting UserTypeService as local into constructor
    toDoStatusTypeService: ToDoStatusTypeService, // injecting UserTypeService as local into constructor
  ) {
    super(_router, _snackBar, _entityService);

    this.title = 'To Do';
    this.isLoading = true; // showing LoadingSpinnerWeb component

    assigneeService.getLookUps().subscribe(result => {
      this.isLoading = false; // hiding LoadingSpinnerWeb component

      if (result.isDone === true) {
        this.assignees = result.datum;

        toDoStatusTypeService.getLookUps().subscribe(resultLookUp => {
          this.isLoading = false; // hiding LoadingSpinnerWeb component

          if (resultLookUp.isDone === true) {
            this.toDoStatusTypes = resultLookUp.datum;

          } else {
            // l ookUp data cannot be loaded correctly so come back to login page
            this._router.navigate(['']);

          }

        }, (error) => {
          this.isLoading = false; // hiding LoadingSpinnerWeb component

          // lookUp data cannot be loaded correctly so come back to login page
          this._router.navigate(['']);
        });




      } else {
        // l ookUp data cannot be loaded correctly so come back to login page
        this._router.navigate(['']);

      }

    }, (error) => {
      this.isLoading = false; // hiding LoadingSpinnerWeb component

      // lookUp data cannot be loaded correctly so come back to login page
      this._router.navigate(['']);
    });


    this._entityService.refresh.subscribe(r => {
      this._loadGridData(); // reload data from server when a record is deleted, edited or inserted
    });

    this._loadGridData();

  }


  ngOnInit() { }


  // loading data from server
  private _loadGridData(): void {


    this.isLoading = true; // showing LoadingSpinnerWeb component

    // loading the required data from server by calling getManagementEntities method of entityService object
    this._entityService.getManagementEntities().subscribe(result => {
      this.isLoading = false; // hiding LoadingSpinnerWeb component

      if (result.isDone === true) {
        this.todoes = result.datum;
      }

    },
      (err => {
        // Unhandled exception
        this.isLoading = false; // hiding LoadingSpinnerWeb component
        this._router.navigate(['']); // navigate to login page

      })
    ); // end of subscription


  }




}
