import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component implements OnInit {

  userName: string = "";
  isValueEmpty: boolean = true;


  onKeyStroke(event: Event) {

    let val: string = (<HTMLInputElement>event.target).value;

    this.isValueEmpty = val == "";
  }

  constructor() { }

  ngOnInit() {
  }

}
