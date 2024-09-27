import { Component, HostListener } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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
    if (window.scrollY > 50) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  }

  items: any[];
  userItems: any[];


  constructor( public storageService:StorageService,private sanitizer: DomSanitizer) {
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


    this.userItems = [
      {
        label: 'Dashboard',
        icon: 'pi pi-home',
        routerLink: '/user/home'
      },
      {
        label: 'My Files',
        icon: 'pi pi-file',
        routerLink: ['user/my-files']
      },
      {
        label: 'Global Files',
        icon: 'pi pi-globe',
        routerLink: '/user/global-files'
      },
      {
        label: 'Upload File',
        icon: 'pi pi-upload',
        routerLink: 'user/upload-new'
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

  ngOnInit(){
    this.getUserProfileUrl()
  }

  profileUrl!:any;

  getUserProfileUrl() {
    const unsafeUrl = this.storageService.getProfileUrl() ||'assets/avatar.png';
    console.log("Retrieved URL from localStorage:", unsafeUrl); 
    this.profileUrl = this.sanitizer.bypassSecurityTrustUrl(unsafeUrl);
    console.log(this.profileUrl);
  }
}
