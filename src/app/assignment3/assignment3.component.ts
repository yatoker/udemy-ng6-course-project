import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {

  showParagraph = true;
  Logs = [];
  clickCount: number = 0;

  getDisplayState() {
    return this.showParagraph ? 'block' : 'none';
  }

  onButtonClicked() {
    this.showParagraph = !this.showParagraph;
    this.Logs.push(++this.clickCount + '. click');
  }

  getBGColor() {
    return this.Logs.length >= 5 ? 'blue' : '';
  }

  constructor() { }

  ngOnInit() {
  }

}
