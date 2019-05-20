import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule,  MatFormFieldModule,  MatCardModule,  MatTooltipModule, MatInputModule } from '@angular/material';
import { CommonModule } from '@angular/common';

import { FormComponent } from './form/form.component';
import { DetailInfoComponent } from './detail-info/detail-info.component';

import {RoundProgressModule} from 'angular-svg-round-progressbar';
// import { SortableModule } from 'ngx-bootstrap/sortable';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DetailInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatCardModule,
    MatTooltipModule,
    MatInputModule,
    CommonModule,
    RoundProgressModule,
    //SortableModule.forRoot(),
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
