import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserServiceService } from 'src/app/services/user/user-service.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {

  popularFiles: any[] = [];
  latestFiles: any[] = [];
  userFiles: any[] = [];
  storage: number = 0;
  downloads: number = 0; 
  reports: number = 0;

  chartData: any;
  chartOptions: any;

  constructor(private userService: UserServiceService) {}

  ngOnInit() {
    this.getUserFiles();
    this.initChart()
  }

  getUserFiles() {
    this.userService.getAllFiles().subscribe((data) => {
      this.userFiles = data; 
      this.calculateTotalStorage();
      this.calculateTotalDownloads();
      this.calculateTotalReports();
      this.getMostPopularFiles();
      this.getMostLatestFiles();
    },
    (err) => {
      console.log(err); 
    });
  }

 
  calculateTotalStorage() {
    this.storage = this.userFiles.reduce((total, file) => {
      return total + file.fileSize / (1024 * 1024);
    }, 0);
  }


  calculateTotalDownloads() {
    this.downloads = this.userFiles.reduce((total, file) => {
      return total + file.downloadCount;
    }, 0);
  }

  calculateTotalReports() {
    this.reports = this.userFiles.reduce((total, file) => {
      return total + file.reportCount;
    }, 0);
  }


  getMostPopularFiles() {
    this.popularFiles = this.userFiles
      .sort((a, b) => b.downloadCount - a.downloadCount)
      .slice(0, 5);
  }

  getMostLatestFiles() {
    this.latestFiles = this.userFiles
    .sort((a, b) => new Date(b.uploadTime).getTime() - new Date(a.uploadTime).getTime())
    .slice(0, 5);
  }


  initChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    this.chartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Downloads',
                data: [28, 48, 40, 19, 86, 27, 90],
                fill: false,
                backgroundColor: documentStyle.getPropertyValue('--green-600'),
                borderColor: documentStyle.getPropertyValue('--green-600'),
                tension: .4
            }
        ]
    };

    this.chartOptions = {
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            }
        }
    };
}

}
