import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserServiceService } from 'src/app/services/user/user-service.service';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.scss'],
  providers:[MessageService]
})
export class UploadFilesComponent {

  uploadedFiles: any[] = [];
  stateOptions: any[] = [{ label: 'PUBLIC', value: 'PUBLIC' }, { label: 'PRIVATE', value: 'PRIVATE' }];
  value: string = 'PUBLIC'; 

  constructor(private messageService: MessageService, private userService:UserServiceService, private router:Router) { }


  onSelect(event: any) {
    this.uploadedFiles = [];
    for (const file of event.files) {
      this.uploadedFiles.push(file);
    }
  }

 
  onUpload() {
    if (this.uploadedFiles.length > 0) {
      const fileToUpload = this.uploadedFiles[0]; 
      this.userService.uploadFile(fileToUpload, this.value).subscribe(
        (response: any) => {
          this.messageService.add({ key: 'fu', severity: 'info', summary: 'Success', detail: 'File Uploaded Successfully' });
          setTimeout(() => {
            this.router.navigateByUrl('user/my-files');
          }, 3000);
        },
        (error: any) => {
          this.messageService.add({ key: 'fu', severity: 'error', summary: 'Error', detail: 'File Upload Failed' });
        }
      );
    } else {
      this.messageService.add({ key: 'fu', severity: 'warn', summary: 'No File', detail: 'Please select a file to upload.' });
    }
  }
}