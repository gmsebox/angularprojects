import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-assg1',
  templateUrl: './assg1.component.html',
  styleUrls: ['./assg1.component.css']
})
export class Assg1Component implements OnInit {
  currentstate:string;
  newLoad:string = 'finished';

  constructor() {
    this.currentstate ='loading...';
   }

  ngOnInit() {
  }
  updateLoad(newVal:string){
    this.currentstate= newVal;
  }
}
