import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { WebComponentBase } from '../../../../models/platform/web-component-base';

import { ToDo } from '../../../../models/administration/to-do';
import { LookUp } from '../../../../models/platform/look-up';


@Component({
    selector: 'app-dialog-to-do-web',
    templateUrl: './dialog-to-do-web.component.html',
    styleUrls: ['./dialog-to-do-web.component.css'],
})
export class DialogToDoWebComponent extends WebComponentBase<ToDo> implements OnInit {

    // lookUp inputs
    @Input() public assignees: LookUp[] = [];
    @Input() public toDoStatusTypes: LookUp[] = [];

    // outputs events:
    @Output() saveEntity: EventEmitter<ToDo> = new EventEmitter();


    public formGroupEntity: FormGroup = this._formBuilder.group({

        task: ['', Validators.required],
        statusId: ['', Validators.required],
        priority: ['', Validators.required],
        dueDate: ['', Validators.required],
        assigneeId: ['', Validators.required],
        notes: ['', null],

    });

    constructor(
        private _formBuilder: FormBuilder,
    ) { super(); }



    ngOnInit() {

        // if model is provided and the webComponentMode is not in "new" mode then bind model to formGroupEntity

        if (this.model != null && this.webComponentMode !== 'new') {
            this.formGroupEntity.patchValue(this.model);
        }

        if (this.webComponentMode === 'view') {
            this.formGroupEntity.disable(); // make controls of formGroupEntity disabled in "view" mode
        }

    }


    public onSaveEntity(): void {

        const oToDo: ToDo = this.formGroupEntity.value;

        // emiting saveEntity event to notify holder component to do needful actions
        this.saveEntity.emit(oToDo);
    }


}



