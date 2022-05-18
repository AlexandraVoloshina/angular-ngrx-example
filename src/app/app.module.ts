import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import * as fromReducer from './store/example.reducer';
import { EffectsModule } from '@ngrx/effects';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

import { FormsModule } from '@angular/forms';
import { ExampleEffects } from './store/example.effects';
import { HttpClientModule }   from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({example: fromReducer.reducer}),
    EffectsModule.forRoot([ExampleEffects]),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
