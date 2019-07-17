import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CalcComponent } from './calc/calc.component';
import {CalculateTotalPointerService} from './calculate-total-pointer.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CalcComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CalculateTotalPointerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
