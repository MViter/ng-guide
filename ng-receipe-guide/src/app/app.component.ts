import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit () {
    console.log('before');
    firebase.initializeApp({
      apiKey: "AIzaSyCQ2WI-ox8DRfs2z0zYcw0CpiRJFa91Hxg",
      authDomain: "ng-recipe-book-3c7b3.firebaseapp.com"
    });
    console.log('after');
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
