import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-biding',
  templateUrl: './event-biding.component.html',
  styleUrls: ['./event-biding.component.css']
})
export class EventBidingComponent implements OnInit {

  oddNumbers :number[]=[];
  evenNumbers :number[]=[];

  constructor() { }

  ngOnInit(): void {
  }

  onIntervalFired(firedNumber: number){
    console.log(firedNumber);
    if(firedNumber% 2 === 0 ){
      this.evenNumbers.push(firedNumber);
    }
    else{
      this.oddNumbers.push(firedNumber);
    }

  }

}
