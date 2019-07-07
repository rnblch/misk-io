import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private db: AngularFirestore) {}

  submitEmail(email) {
    return this.db.collection('emails').add({
      email
    });
  }
}
