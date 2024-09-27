import { Injectable } from '@angular/core';
import { TOKEN,USER,ProfileURL} from 'src/app/constant/constants';



interface User {
  id: string;
  roles: string;
  status: string; 
  profileUrl:string; // 'active' or 'blocked'
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

    private setItem(key: string, value: string): void {
      window.localStorage.setItem(key, value);
    }

    private getItem(key: string): string | null {
      return window.localStorage.getItem(key);
    }

    saveToken(token: string): void {
      this.setItem(TOKEN, token);
    }
  

    saveUser(user: any): void {
        window.localStorage.setItem(USER, JSON.stringify(user));
    }

    saveProfileUrl(url: string): void {
      if (url.startsWith('"') && url.endsWith('"')) {
        url = url.slice(1, -1);
      }
      window.localStorage.setItem(ProfileURL, url);
    }
  

    getToken(): string | null {
      return this.getItem(TOKEN);
    }
  
   
    getUser(): any | null {
      const userJson = window.localStorage.getItem(USER);
      return userJson ? JSON.parse(userJson) : null;
     
    }
    
    getUserRole(): string {
      const user = this.getUser();
      return user ? user.roles : '';
    }
    
    getUserStatus(): string {
      const user = this.getUser();
      return user ? user.status : '';
    }

    getProfileUrl(): string | null {
      let url = this.getItem(ProfileURL);
      if (url && url.startsWith('"') && url.endsWith('"')) {
        url = url.slice(1, -1);
      }
      return url;
    }
    
    
  
    
    isLoggedIn(roles: 'ADMIN' | 'USER'): boolean {
      const token = this.getToken();
      const userRole = this.getUserRole();
      return !!token && userRole === roles;
    }
  
    isUserInStatus(status: 'ACTIVE' | 'BLOCKED'): boolean {
      const userStatus = this.getUserStatus();
      return userStatus === status;
    }
  
  
    getUserId(): string {
      const user = this.getUser();
      return user?.id || '';
    }
  
    logout(): void {
      window.localStorage.removeItem(TOKEN);
      window.localStorage.removeItem(USER);
      window.localStorage.removeItem(ProfileURL);
    }
}
