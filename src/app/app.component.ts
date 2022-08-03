import { Component, OnInit } from '@angular/core';
import { person } from 'src/types';
import { friendsData as starterFriends } from './data';
import { myProfile } from './data';
import { FRIENDS_KEY, PROFILE_KEY } from './storageKeyNames';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {



  ngOnInit(): void {
    if(!localStorage.getItem(FRIENDS_KEY)){
      localStorage.setItem(FRIENDS_KEY,JSON.stringify(starterFriends));
    }
    if(!localStorage.getItem(PROFILE_KEY)){
      localStorage.setItem(PROFILE_KEY,JSON.stringify(myProfile));
    }
  }
  
}

