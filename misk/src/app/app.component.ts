import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'misk';
  _selectedLang: string;
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.currentLang = 'en';
  }
}
