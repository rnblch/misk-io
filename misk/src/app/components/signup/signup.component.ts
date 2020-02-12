import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [
    trigger('slideUp', [
      transition(':enter', [
        style({ transform: 'translateY(100%)', opacity: 0 }),
        animate('1s', style({ transform: 'translateY(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate('1s', style({ transform: 'translateY(100%)', opacity: 0 }))
      ])
    ])
  ]
})
export class SignupComponent implements OnInit {
  currentYear = new Date().getFullYear();
  labelClicked: boolean;
  thanksLabel: boolean;
  email: string;
  errorLabel: boolean;
  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {}

  submit() {
    this.firebaseService.submitEmail(this.email).then(res => {
      if (res.id) {
        this.thanksLabel = true;
        this.errorLabel = false;
      } else {
        this.thanksLabel = false;
        this.errorLabel = true;
      }
    });
  }
}
