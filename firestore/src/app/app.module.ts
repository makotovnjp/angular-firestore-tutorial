import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';

const firebaseConfig = {
  apiKey: 'AIzaSyBPf-JgW1hPPrW14ywIS1W4D5AfcJhwkns',
  authDomain: 'firestore-40942.firebaseapp.com7',
  databaseURL: 'https://firestore-40942.firebaseio.com',
  projectId: 'firestore-40942',
  storageBucket: '',
  messagingSenderId: '779037563534'
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
