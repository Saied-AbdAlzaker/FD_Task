import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { User } from '../../Model/user';
import { HelperService } from '../../Services/helper.service';
import { FileDownloadService } from '../../Services/file-download.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  checked: boolean = true;
  users: User[] = [];
  searchItem: string = '';

  constructor(private userService: UserService, public _helperService:HelperService,
    private fileDownloadService: FileDownloadService){}
 
  ngOnInit() {
    this.users = this.userService.myUsers
  }

  download() {
    // const fileUrl = 'https://example.com/file.pdf'; // Replace with the actual file URL
    const fileUrl = 'https://drive.google.com/file/d/1FW0RfwwVtPuUSLW726aSwNcd3etfnqGe/view?usp=drive_link'; // Replace with the actual file URL
    const fileName = 'downloadedFile.pdf';
    this.fileDownloadService.downloadFile(fileUrl, fileName);
  }

}
