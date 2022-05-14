import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AngularMaterialModule } from './angular-material/angular-material.module';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AngularMaterialModule],
  declarations: [AppComponent,ListComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
