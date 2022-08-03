import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FRIENDS_KEY } from 'src/app/storageKeyNames';
import { person, personInfo } from 'src/types';
import { FavoritesService } from 'src/app/Services/favorites.service';
import { FriendsService } from 'src/app/Services/friends.service';

@Component({
  selector: 'app-edit-friend-page',
  templateUrl: './edit-friend-page.component.html',
  styleUrls: ['./edit-friend-page.component.css']
})
export class EditFriendPageComponent implements OnInit {
  selectedFriend: person | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private favoritesService: FavoritesService,
    private friendsService: FriendsService) { }

  ngOnInit(): void {
    const friendsId = this.route.snapshot.paramMap.get('friendId');
    
    if(friendsId){
      this.selectedFriend = this.friendsService.getFriend(friendsId)
    }

    if(!this.selectedFriend){
        setTimeout(() => {
          this.router.navigateByUrl('/friends');
        },2500);
    }
  } 
    updateFriend(updatedInfo: personInfo){
    this.friendsService.updateFriend(this.selectedFriend!.id,updatedInfo)
    this.router.navigateByUrl(`/friends/${this.selectedFriend!.id}`)
  }

}
