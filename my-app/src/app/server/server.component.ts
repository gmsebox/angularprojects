import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent implements OnInit {
 serverId='10';
 serverStatus='offline';

 constructor(id:string,status:string) { 
     this.serverId = id;
     this.serverStatus = status;
  }

  ngOnInit() {

  }
  
 getServerStatus(){
     return this.serverStatus;
 }
}