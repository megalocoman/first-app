import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-directives',
  templateUrl: './ng-directives.component.html',
  styleUrls: ['./ng-directives.component.css']
})
export class NgDirectivesComponent implements OnInit {

  isHide = true;

  list = [];


  constructor() { }

  ngOnInit(): void {
  }

  showParagraph(){
    this.isHide= !this.isHide;
    let current = new Date();
    this.list.push(current.toTimeString());

  }
}
