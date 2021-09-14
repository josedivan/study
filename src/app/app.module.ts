import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { PoButtonModule } from '@po-ui/ng-components';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PoFieldModule } from '@po-ui/ng-components';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    PoTemplatesModule,
    PoButtonModule,
    PoFieldModule,
    FormsModule,
    PoFieldModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
