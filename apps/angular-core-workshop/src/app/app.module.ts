import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@workshop/material'
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomersModule } from './customers/customers.module';
import { AppRoutingModule } from './app-routing.module';
// tslint:disable-next-line: nx-enforce-module-boundaries
import { UiLoginModule } from 'libs/ui-login/src/lib/ui-login.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, 
    BrowserAnimationsModule, 
    MaterialModule, 
    UiLoginModule,
    HttpClientModule,
    AppRoutingModule
  ],
  exports:[ CustomersModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
