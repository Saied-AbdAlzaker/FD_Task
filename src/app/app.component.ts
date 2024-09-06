import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FD_Task';

  constructor(public translate: TranslateService) {
    this.onChangeLanguage('ar');

    if (localStorage.getItem('lang') == null) {
      localStorage.setItem('lang', 'ar')
    }

  }

  onChangeLanguage(lang: string) {
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }


}
