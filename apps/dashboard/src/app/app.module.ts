import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@workshop/material';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }), MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
