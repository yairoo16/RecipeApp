import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loadedFeature = 'recipe';

  ngOnInit() {

    firebase.initializeApp({
      apiKey: 'AIzaSyC0RjoXXfeN4FzmhA54JGwx3NVETczE8e8',
      authDomain: 'recipe-app-e9d5e.firebaseapp.com'
    });

  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
