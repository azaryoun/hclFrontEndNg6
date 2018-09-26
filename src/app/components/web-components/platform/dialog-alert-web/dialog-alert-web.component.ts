import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { WebComponentBase } from '../../../../models/platform/web-component-base';
import { inherits } from 'util';
import { DialogAlert } from '../../../../models/platform/dialog-alert';


@Component({
  selector: 'app-dialog-alert-web',
  templateUrl: './dialog-alert-web.component.html',
  styleUrls: ['./dialog-alert-web.component.css'],
})

export class DialogAlertWebComponent extends WebComponentBase<DialogAlert> implements OnInit {

  constructor() { super(); }

  ngOnInit() {
    if (this.title == null) {
      this.title = 'Attention !'; // setting default title
    }

  }


}
