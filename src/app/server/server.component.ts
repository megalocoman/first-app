import { Component } from "@angular/core";

@Component({
  selector:'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {color: white}
  `]


})
export class ServerComponent{

  constructor(){
    this.serverStatus = Math.random() > 0.5 ? 'online': 'Offline';
  }

  serverId = 10;
  serverStatus = 'offline';

  getServerStatus(){
    return this.serverStatus;
  }

  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

}
