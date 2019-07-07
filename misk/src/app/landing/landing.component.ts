import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  labelClicked: boolean;
  thanksLabel: boolean;
  constructor() {}

  ngOnInit() {}

  animateLabel() {
    this.labelClicked = !this.labelClicked;
  }

  submit() {
    this.thanksLabel = true;
  }
}
