import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Dev Tools NgRx
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

//Store NgRx
import { StoreModule } from '@ngrx/store';
import {userReducer, usersReducer} from "./store/reducers";

import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import {SharedModule} from "./shared/shared.module";
import {UsersModule} from "./users/users.module";

import { AppComponent } from './app.component';
import {EffectsModule} from "@ngrx/effects";
import {EffectsArray} from "./store/effects";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    UsersModule,
    HttpClientModule,
    StoreModule.forRoot({ users: usersReducer, user: userReducer}),
    EffectsModule.forRoot(EffectsArray),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
