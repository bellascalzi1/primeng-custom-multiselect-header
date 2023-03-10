import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MultiSelectModule } from 'primeng/multiselect';

import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MultiSelectModule,
    CheckboxModule,
    FormsModule,
    HttpClientModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
