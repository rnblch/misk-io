import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { NavComponent } from './components/nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UnderlayComponent } from './components/underlay/underlay.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { ContactComponent } from './components/contact/contact.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { WrongRouteComponent } from './components/wrong-route/wrong-route.component';
import * as firebase from 'firebase/app';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavComponent,
    UnderlayComponent,
    FooterComponent,
    ContactComponent,
    ComingSoonComponent,
    WrongRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
const firebaseConfig = {
  apiKey: 'AIzaSyARXyZP4TO_k5Z-PzrqpVC8Z-dUiuLldkI',
  authDomain: 'misk-web.firebaseapp.com',
  databaseURL: 'https://misk-web.firebaseio.com',
  projectId: 'misk-web',
  storageBucket: 'misk-web.appspot.com',
  messagingSenderId: '26713949450',
  appId: '1:26713949450:web:788f6ccb30f14e53',
  measurementId: 'G-LBVFVVCD16'
};

firebase.initializeApp(firebaseConfig);
export class AppModule {}
