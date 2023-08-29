import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { AccountlistComponent } from './accountlist/accountlist.component';
import { AccounteditComponent } from './accountedit/accountedit.component'
import { FormsModule } from '@angular/forms';
import { ReportsComponent } from './reports/reports.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateaccountComponent,
    AccountlistComponent,
    AccounteditComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
