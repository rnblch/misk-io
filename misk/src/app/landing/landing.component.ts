import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 }))
      ]),
      transition(':leave', [animate(500, style({ opacity: 0 }))])
    ]),
    trigger('slideUp', [
      transition(':enter', [
        style({ transform: 'translateY(100%)', opacity: 0 }),
        animate('200ms', style({ transform: 'translateY(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate('200ms', style({ transform: 'translateY(100%)', opacity: 0 }))
      ])
    ])
  ]
})
export class LandingComponent implements OnInit {
  labelClicked: boolean;
  thanksLabel: boolean;
  email: string;
  errorLabel: boolean;

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {}

  toggle() {
    this.labelClicked = !this.labelClicked;
  }

  submit() {
    this.firebaseService.submitEmail(this.email).then(res => {
      if (this.labelClicked && res.id) {
        this.thanksLabel = true;
        this.errorLabel = false;
      } else {
        this.thanksLabel = false;
        this.errorLabel = true;
      }
    });
  }
}
