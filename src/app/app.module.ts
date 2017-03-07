import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CommuneService } from './commune/commune.service';
import { CommuneComponent } from './commune/commune.component';

import { DepartementService } from './departement/departement.service';
import { DepartementComponent } from './departement/departement.component';


@NgModule({
  declarations: [
    AppComponent,
    CommuneComponent,
    DepartementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CommuneService,
              DepartementService],
  bootstrap: [AppComponent]
})
export class AppModule { }