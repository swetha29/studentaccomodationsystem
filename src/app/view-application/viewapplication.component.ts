import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';


@Component({
  selector : 'app-viewapplication',
  templateUrl : './viewapplication.component.html',
  styleUrls : ['./viewapplication.css']
})
export class ViewApplicationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
