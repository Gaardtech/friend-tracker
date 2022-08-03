import { Component, OnInit } from '@angular/core';
import { myProfile } from 'src/app/data';
import { person, personInfo } from 'src/types';
import { ProfileInfoService } from 'src/app/Services/profile-info.service';

@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.css']
})
export class UserProfilePageComponent implements OnInit {
  
  get myProfile() {
     return this.profileInfoService.profileInfo;
   }
    
  isEditing: Boolean = false;

  constructor(private profileInfoService: ProfileInfoService) { }

  ngOnInit(): void {
  }

  startEditing(): void {
    this.isEditing = true;
  }

  saveChanges(updatedInfo: personInfo): void {
    this.profileInfoService.updateprofileInfo(updatedInfo);
    this.isEditing = false;
  }

}
