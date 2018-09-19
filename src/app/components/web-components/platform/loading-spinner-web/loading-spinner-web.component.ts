import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loading-spinner-web',
  templateUrl: './loading-spinner-web.component.html',
  styleUrls: ['./loading-spinner-web.component.css']
})
export class LoadingSpinnerWebComponent implements OnInit {

  @Input() public isLoading: boolean = false; //isLoading input to show/hide the spinner

  constructor() { }

  ngOnInit() {
  }

}
