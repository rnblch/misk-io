import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mission-details',
  templateUrl: './mission-details.component.html',
  styleUrls: ['./mission-details.component.css']
})
export class MissionDetailsComponent implements OnInit {
  currentYear = new Date().getFullYear();
  title = `how we're doing it`;
  constructor() {}

  ngOnInit() {}
}
