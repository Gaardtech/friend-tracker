import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { friendsData } from 'src/app/data';
import { FavoritesService } from 'src/app/Services/favorites.service';
import { FriendsService } from 'src/app/Services/friends.service';
import { FAVORITES_IDS_KEY, FRIENDS_KEY } from 'src/app/storageKeyNames';
import { person } from 'src/types'; 



@Component({
  selector: 'app-friend-detail-page',
  templateUrl: './friend-detail-page.component.html',
  styleUrls: ['./friend-detail-page.component.css']
})
export class FriendDetailPageComponent implements OnInit {
  selectedFriend: person | undefined  = undefined;

   get favoritesIds(): string[] {
    return this.favoritesService.favoritesIds
   }
  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private favoritesService: FavoritesService,
    private friendsService: FriendsService) { 
    
  }

  ngOnInit(): void {
    const friendsId =  this.route.snapshot.paramMap.get('friendId');
    if(friendsId){
      this.selectedFriend = this.friendsService.getFriend(friendsId)
    }
    


    if (!this.selectedFriend)
    setTimeout(() => {
      this.router.navigateByUrl("/")
    }, 2500);
  }


removeFavorite = (): void  => {
  this.favoritesService.removeFavorite(this.selectedFriend!.id);
}

addFavorite = (): void => {
  this.favoritesService.addFavorite(this.selectedFriend!.id);
}
deleteFriend(): void {
  this.favoritesService.removeFavorite(this.selectedFriend!.id)
  this.friendsService.deleteFriend(this.selectedFriend!.id)
  this.router.navigateByUrl('/friends')
}

goToEditPage(): void {
  this.router.navigateByUrl(`/edit-friend/${this.selectedFriend!.id}`)
 
}
}
