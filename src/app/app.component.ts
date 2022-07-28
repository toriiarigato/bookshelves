import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookshelves';

  constructor() {
    // Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyArRYYQRsMbmiCJMwMDViQizrlrm0yQ9xY",
      authDomain: "bookshelves-79c93.firebaseapp.com",
      projectId: "bookshelves-79c93",
      storageBucket: "bookshelves-79c93.appspot.com",
      messagingSenderId: "580263183794",
      appId: "1:580263183794:web:d429f6c204a7be4c1b90ab"
    };

// Initialize Firebase
    const app = initializeApp(firebaseConfig);
  }
}
