import { Component, HostListener } from '@angular/core';
import { StorageService } from 'src/app/services/auth/storage.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {


  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = document.querySelector('.custom-menubar');
    if (window.scrollY > 50) { // When scrolled down 50px
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  }

  items: any[];


  constructor( public storageService:StorageService) {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/'
      },
      {
        label: 'Files',
        icon: 'pi pi-file',
        routerLink: ['/'],
        fragment:"home-files"
      },
      {
        label: 'About',
        icon: 'pi pi-info-circle',
        routerLink: '/about'
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
        routerLink: '/contact'
      }
    ];
  }
}
