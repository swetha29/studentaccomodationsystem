import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { FirebaseApp } from 'angularfire2';

@Component({
  selector : 'app-homepage',
  templateUrl : './homepage.component.html',
  styleUrls : ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

}
