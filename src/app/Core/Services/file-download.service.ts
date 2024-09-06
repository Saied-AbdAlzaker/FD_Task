import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileSaverService } from 'ngx-filesaver';

@Injectable({
  providedIn: 'root'
})
export class FileDownloadService {

  constructor(private http: HttpClient, private fileSaver: FileSaverService) { }

  downloadFile(url: string, fileName: string) {
    this.http.get(url, { responseType: 'blob' }).subscribe(blob => {
      this.fileSaver.save(blob, fileName);
    }, error => {
      console.error('Download error!', error);
    });
  }

}
