import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';


@Component({
  selector : 'app-student-arrival-info',
  templateUrl : './student-arrival-info.component.html',
  styleUrls : ['./student-arrival-info.component.css']
})
export class StudentArrivalInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
