import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {
  currentYear = new Date().getFullYear();
  title = 'who we are';
  constructor() {}

  ngOnInit() {}
}
