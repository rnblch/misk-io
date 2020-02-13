import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.css']
})
export class SectionTitleComponent implements OnInit, DoCheck {
  @Input() title: string;
  constructor(private translate: TranslateService) {}

  ngOnInit() {}

  ngDoCheck() {
    switch (this.title) {
      case 'who we are':
        this.title = this.translate.currentLang === 'ar' ? (this.title = 'من نحن؟') : this.title;
        break;
      case `how we're doing it`:
        this.title = this.translate.currentLang === 'ar' ? (this.title = 'كيف؟') : this.title;
        break;
    }
  }
}
