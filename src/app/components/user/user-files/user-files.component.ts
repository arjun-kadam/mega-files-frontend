import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { StorageService } from 'src/app/services/auth/storage.service';
import { UserServiceService } from 'src/app/services/user/user-service.service';


@Component({
  selector: 'app-example',
  templateUrl: './user-files.component.html',
  styleUrls: ['./user-files.component.scss'],
  providers: [MessageService],
})
export class UserFilesComponent implements OnInit {

  files:any[]=[];

  constructor( private storageService: StorageService,private userService:UserServiceService, private message:MessageService) { }

  ngOnInit(): void {
    this.userService.getAllFiles().subscribe((res)=>{
      this.files=res;
      console.log(this.files)
    },
  (err)=>{
    console.log(err)
  })
  }

  isCopied: boolean = false;

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
      this.isCopied = true;
      this.message.add({
        key: 'copied',
        severity: 'success',
        summary: 'Link Copied',
        detail: 'Link Copied To Your Clipboard',})
      setTimeout(() => {
        this.isCopied = false;
      }, 6000);
      
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  }
}
