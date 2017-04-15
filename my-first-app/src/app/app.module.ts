import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {ChartModule} from 'primeng/primeng';

@NgModule({
  declarations: [ 
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
