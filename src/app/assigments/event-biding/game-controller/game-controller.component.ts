import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-controller',
  templateUrl: './game-controller.component.html',
  styleUrls: ['./game-controller.component.css']
})
export class GameControllerComponent implements OnInit {

  count = 0;
  @Output() intervalFired= new EventEmitter<number>() ;
  interval;
  // started=false;
  constructor() { }

  ngOnInit(): void {
  }

  onStartGame(){

    this.interval = setInterval(()=> {

      this.intervalFired.emit(this.count++);
      this.count;
      }, 1000);

  }

  onPauseGame(){
    clearInterval(this.interval);
  }


}
