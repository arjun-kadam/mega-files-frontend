import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  popularFiles = [
    { name: 'File 1' },
    { name: 'File 2' },
    { name: 'File 3' },
    { name: 'File 4' },
    { name: 'File 5' },
    { name: 'File 6' },
    { name: 'File 7' },
    { name: 'File 8' },
    { name: 'File 9' },
    { name: 'File 10' }
  ];

  latestFiles = [
    { name: 'File A' },
    { name: 'File B' },
    { name: 'File C' },
    { name: 'File D' },
    { name: 'File E' },
    { name: 'File F' },
    { name: 'File G' },
    { name: 'File H' },
    { name: 'File I' },
    { name: 'File J' }
  ];
}
