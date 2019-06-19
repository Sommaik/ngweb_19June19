import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Home title';
  url = 'http://www.google.com';
  @Input() name;
  @Output()
  gotoClick: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onButtonClick() {
    alert(this.url);
    this.gotoClick.emit(this.url);
  }
}
