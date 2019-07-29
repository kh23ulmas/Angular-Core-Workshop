import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@workshop/material'
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { ProjectsModule } from './projects/projects.module';
import { CustomersModule } from './customers/customers.module';
import { AppRoutingModule } from './app-routing.module';
import { UiLoginModule } from 'libs/ui-login/src/lib/ui-login.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, 
    BrowserAnimationsModule, 
    HomeModule, MaterialModule, 
    ProjectsModule, 
    CustomersModule,
    AppRoutingModule,
    UiLoginModule
  ],
  exports:[ CustomersModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
