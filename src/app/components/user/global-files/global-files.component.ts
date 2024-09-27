import { Component } from '@angular/core';
import { PublicAccessService } from 'src/app/services/public/public-access.service';
import { UserServiceService } from 'src/app/services/user/user-service.service';

@Component({
  selector: 'app-global-files',
  templateUrl: './global-files.component.html',
  styleUrls: ['./global-files.component.scss']
})
export class GlobalFilesComponent {
  globalFiles: any[] = [];

  constructor(private userService:UserServiceService ,private publicService:PublicAccessService){}

  ngOnInit(){
    this.getGlobalFiles();
  }

  getGlobalFiles(): void {
    this.userService.getGlobalFiles().subscribe(
      (data) => {
        this.globalFiles = data;
        console.log('Popular Files: ', this.globalFiles);
      },
      (error) => {
        console.error('Error ', error);
      }
    );
  }

  downloadFile(fileUrl: string, filename: string, fileId: number): void {
    this.publicService.incrementDownloadCount(fileId).subscribe(() => {
    },(error)=>{
      console.log("Something Went Wrong",error)
    });
    const link = document.createElement('a');
      link.href = fileUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  }
}
