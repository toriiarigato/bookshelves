import { Component } from '@angular/core';
import 'firebase/database';
import '@firebase/database';
import firebase from "firebase/compat/app";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyArRYYQRsMbmiCJMwMDViQizrlrm0yQ9xY",
      authDomain: "bookshelves-79c93.firebaseapp.com",
      projectId: "bookshelves-79c93",
      storageBucket: "bookshelves-79c93.appspot.com",
      messagingSenderId: "580263183794",
      appId: "1:580263183794:web:d429f6c204a7be4c1b90ab"
    };
    firebase.initializeApp(firebaseConfig);
  }
}
