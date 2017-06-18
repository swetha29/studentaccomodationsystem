import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { RouterModule } from '@angular/router';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {HomepageComponent} from './homepage/homepage.component';
import {ViewApplicationComponent} from './view-application/viewapplication.component';
import {StudentArrivalInfoComponent} from './student-arrival-info/student-arrival-info.component';
import { ServicepageComponent } from './servicepage/servicepage.component';
import { StudentCoordinatorProfileComponent } from './student-coordinator-profile/student-coordinator-profile.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';
import { StudentbookaccomodationComponent } from './studentbookaccomodation/studentbookaccomodation.component';


export const firebaseConfig = {
  apiKey: 'AIzaSyCZLIMWW0eo_ETnbx1vaSsO-egZemGq3U8',
  authDomain: 'srhas-b0398.firebaseapp.com',
  databaseURL: 'https://srhas-b0398.firebaseio.com',
  storageBucket: 'srhas-b0398.appspot.com',
  messagingSenderId: '437268620500'
};

@NgModule({
  declarations: [
    AppComponent,
    ViewApplicationComponent,
    StudentArrivalInfoComponent,
    HomepageComponent,
    ServicepageComponent,
    StudentCoordinatorProfileComponent,
    StudentloginComponent,
    StudentregistrationComponent,
    StudentbookaccomodationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      {
        path: 'homePage',
        component: HomepageComponent
      },
      {
        path: 'studentRegistration',
        component: StudentregistrationComponent
      },
      {
        path: 'studentLogin',
        component: StudentloginComponent
      },
      {
        path: 'servicePage',
        component: ServicepageComponent
      },
      {
        path: 'studentArrivalInfo',
        component:  StudentArrivalInfoComponent
      },
      {
        path: 'viewApplication',
        component: ViewApplicationComponent
      },
      {
      path: 'studentCoordinatorProfile',
        component: StudentCoordinatorProfileComponent
      }
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
