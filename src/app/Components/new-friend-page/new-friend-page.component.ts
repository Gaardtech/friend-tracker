import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { personInfo } from 'src/types';
import { FriendsService } from 'src/app/Services/friends.service';

@Component({
  selector: 'app-new-friend-page',
  templateUrl: './new-friend-page.component.html',
  styleUrls: ['./new-friend-page.component.css']
})
export class NewFriendPageComponent implements OnInit {
  name: string = ''
  age: string = ''
  profilePicUrl: string = ''
  bio: string = ''
  birthday: string = ''
  intrests: string = ''

  constructor(
    private router: Router,
    private friendsService: FriendsService
    ) { }

  ngOnInit(): void {
  }

  nameChanged(event: any): void {
    this.name = event.target.value;
  }

  ageChanged(event: any): void {
    this.age = event.target.value;
  }

  profilePicUrlChanged(event: any): void {
    this.profilePicUrl = event.target.value;
  }

  bioChanged(event: any): void {
    this.bio = event.target.value;
  }

  birthdayChanged(event: any): void {
    this.birthday = event.target.value;
  }

  intrestsChanged(event: any): void {
    this.intrests = event.target.value;
  }


  createFriend(personInfo: personInfo): void {  
     const id =  this.friendsService.createFriend(personInfo);
      this.router.navigateByUrl(`friends/${id}`)
  }
}
