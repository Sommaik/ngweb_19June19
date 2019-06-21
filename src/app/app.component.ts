import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lang = 'EN';
  title = 'ngweb';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  onGotoClick(value1: string) {
    alert(value1);
  }

  switchLang() {
    if (this.lang === 'EN') {
      this.translate.use('th');
      this.lang = 'TH';
    } else {
      this.translate.use('en');
      this.lang = 'EN';
    }
  }
}
