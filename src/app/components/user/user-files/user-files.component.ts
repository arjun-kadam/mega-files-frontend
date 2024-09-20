import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/auth/storage.service';
import { UserServiceService } from 'src/app/services/user/user-service.service';


@Component({
  selector: 'app-example',
  templateUrl: './user-files.component.html',
  styleUrls: ['./user-files.component.scss'],
})
export class UserFilesComponent implements OnInit {

  files:any[]=[];

  constructor( private storageService: StorageService,private userService:UserServiceService) { }

  ngOnInit(): void {
    this.userService.getAllFiles().subscribe((res)=>{
      this.files=res;
      console.log(this.files)
    },
  (err)=>{
    console.log(err)
  })
  }
}
