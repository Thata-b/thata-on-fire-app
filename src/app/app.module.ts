import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AuthService } from './auth.service';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { FirelistComponent } from './firelist/firelist.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: IndexComponent},
      {path: 'firelist', component: FirelistComponent}
    ]),
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyCtYO9OfA_jnFTvZxgYFzdL3fGYpYWpWqA",
        authDomain: "thata-2c8af.firebaseapp.com",
        projectId: "thata-2c8af",
        storageBucket: "thata-2c8af.appspot.com",
        messagingSenderId: "217644049312",
        appId: "1:217644049312:web:ce26330af38687cc79fac5"
      }
    ),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  declarations: [ AppComponent, HelloComponent, IndexComponent, FirelistComponent],
  bootstrap:    [ AppComponent ],
  providers: [ AuthService ]
})
export class AppModule { }