import { Component } from '@angular/core';
import { PublicAccessService } from 'src/app/services/public/public-access.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  latestFiles: any[] = [];
  popularFiles: any[] = [];
  constructor(private publicService: PublicAccessService) {}

  ngOnInit(): void {
    this.getLatestFiles();
    this.getPopularFiles();
  }

  getLatestFiles(): void {
    this.publicService.getLatestFiles().subscribe(
      (data) => {
        this.latestFiles = data;
        console.log('Latest files:', this.latestFiles);
      },
      (error) => {
        console.error('Error fetching latest files:', error);
      }
    );
  }

  getPopularFiles(): void {
    this.publicService.getPopularFiles().subscribe(
      (data) => {
        this.popularFiles = data;
        console.log('Popular Files: ', this.popularFiles);
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
