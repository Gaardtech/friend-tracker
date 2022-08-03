import { Component, OnInit } from '@angular/core';
import { person } from 'src/types';
import { myProfile } from 'src/app/data';
import { FavoritesService } from 'src/app/Services/favorites.service';
import { ActivatedRoute, Router } from '@angular/router';
import { WELCOME_MESSAGE_HIDDEN_KEY } from 'src/app/storageKeyNames';

@Component({
  selector: 'app-friends-page',
  templateUrl: './friends-page.component.html',
  styleUrls: ['./friends-page.component.css']
})
export class FriendsPageComponent implements OnInit {
  myProfile: person = myProfile;
  _showMessage: boolean = true;


  get showMessage(): boolean {
    return this._showMessage
  }

  set showMessage(newShowMessage: boolean) {
    localStorage.setItem( WELCOME_MESSAGE_HIDDEN_KEY, JSON.stringify(!newShowMessage));
    this._showMessage = newShowMessage;
  }
 

constructor (
   private router: Router,
   private favoritesService: FavoritesService) {}

  
  ngOnInit(): void {
    const welcomeMessageid = localStorage.getItem(WELCOME_MESSAGE_HIDDEN_KEY)
    this.showMessage = !welcomeMessageid;
  }

  get favorites(): person[] {
    return this.favoritesService.favorites
  }

  get nonFavorites(): person[] {
    return this.favoritesService.nonFavorites
  }

  onPersonClicked(person: person): void {
     //alert (`${person.name} likes ${person.intrests.join(',')}`)
  }

  hideMessage(): void {

    this.showMessage = false;
  }


removeFavorite = (personId: string): void  => {
  this.favoritesService.removeFavorite(personId);
  
}

addFavorite = (personId: string): void => {
  this.favoritesService.addFavorite(personId);
}

goToFriendsDetailsPage = (personId: string): void =>
{
  this.router.navigateByUrl(`/friends/${personId}`);
}

}
