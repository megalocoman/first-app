import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stringinterpolation',
  templateUrl: './stringinterpolation.component.html',
  styleUrls: ['./stringinterpolation.component.css']
})
export class StringinterpolationComponent implements OnInit {
  username='';
  isEmptyUsername = true;

  constructor() { }

  ngOnInit(): void {
  }

  setIsEmptyString(event: Event){
    this.isEmptyUsername= (<HTMLInputElement>event.target).value.length == 0 ? true : false;

  }

  resetUsername(){
    this.username = '';
  }

}
