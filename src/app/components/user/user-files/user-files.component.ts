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

  deleteFile(fileId:number){
    this.userService.deleteFile(fileId).subscribe((res)=>{
      this.message.add({
        key: 'delete',
        severity: 'success',
        summary: 'File Delete',
        detail: 'Your File Has Been Deleted Successfully',
      })
      this.ngOnInit();
    },(err)=>{
      this.message.add({
        key: 'delete',
        severity: 'error',
        summary: 'Error',
        detail: 'Something Went Wrong !!!',
      })
      this.ngOnInit();
    })
  }


  
  changeFileAccess(status:string,fileId:number){

    if(status==='PRIVATE'){
      status='PUBLIC'
    }else if(status==='PUBLIC'){
      status='PRIVATE'
    }
    
    this.userService.changeFileAccess(status,fileId).subscribe((res)=>{
      this.message.add({
        key: 'delete',
        severity: 'success',
        summary: 'Access Changed',
        detail: 'Your File Access Changed Successfully',
      })
      this.ngOnInit();
    },(err)=>{
      this.message.add({
        key: 'delete',
        severity: 'error',
        summary: 'Error',
        detail: 'Something Went Wrong !!!',
      })
      this.ngOnInit();
    })
  }
}
