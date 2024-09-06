import { Component } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { HelperService } from 'src/app/Core/services/helper.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  value: string = 'www.tazkty.com/473847'
  myAngularxQrCode: any;
  url: SafeUrl = '';

  constructor(private _Toastr: ToastrService, public _helperService:HelperService) {
    this.myAngularxQrCode = 'Your QR code data string';
  }

  copyCode() {
    this._Toastr.success('Code copied to your clipboard');
  }

}
