import { Injectable } from '@angular/core';
import { LangChangeEvent,TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  textDir:string='rtl';

  constructor(public translate: TranslateService) {
    this.onChangeLanguage('ar');

    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      console.log(event);
      if(event.lang === 'ar'){
        this.textDir = 'rtl'
      }else{
        this.textDir = 'ltr'
      }

    });

  }

  onChangeLanguage(lang: string) {
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    
  }

}
