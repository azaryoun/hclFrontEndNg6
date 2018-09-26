import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { WebComponentBase } from '../../../../models/platform/web-component-base';
import { DialogConfirm } from '../../../../models/platform/dialog-confirm';

@Component({
  selector: 'app-dialog-confirm-web',
  templateUrl: './dialog-confirm-web.component.html',
  styleUrls: ['./dialog-confirm-web.component.css'],
})
export class DialogConfirmWebComponent extends WebComponentBase<DialogConfirm> implements OnInit {

  @Output() public confirm: EventEmitter<number> = new EventEmitter();

  constructor() { super(); }

  ngOnInit() {
    if (this.title == null) {
      this.title = 'Confirm process'; // setting default title
    }
  }


  public onClickConfirm(): void {
    // emiting confirm event to notify holder component to do needful actions
    this.confirm.emit(this.model.id); // pssing id to the holder component
  }
}
