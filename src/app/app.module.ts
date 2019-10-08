import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';

import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EmployeeComponent} from './employee/employee.component';
import { HttpModule } from '@angular/http';
import { EmployeeService } from './employee/employee.service';
@NgModule({
  declarations: [
    AppComponent,EmployeeComponent
  ],
  imports: [
    BrowserModule,HttpModule,
    AppRoutingModule,CommonModule,FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
