import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email: string;

  constructor(
    private firebaseService: FirebaseService,
    private snackbar: MatSnackBar,
    private translate: TranslateService
  ) {}

  ngOnInit() {}

  submit() {
    this.firebaseService.submitEmail(this.email).then(res => {
      if (res.id) {
        this.snackbar.open(`Thanks, we'll be in touch soon.`, 'Ok', {
          duration: 5000,
          verticalPosition: 'top',
          horizontalPosition: 'end',
          politeness: 'polite',
          panelClass: 'snackbar'
        });
      } else {
        this.snackbar.open(`Uh oh. Something went wrong. Please try again later.`, 'Ok', {
          duration: 5000,
          verticalPosition: 'top',
          horizontalPosition: 'end',
          politeness: 'polite',
          panelClass: 'snackbar'
        });
      }
    });
  }
}
