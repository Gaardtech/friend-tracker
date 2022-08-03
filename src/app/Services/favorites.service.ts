import { Injectable } from '@angular/core';
import { person } from 'src/types';
import { FAVORITES_IDS_KEY, FRIENDS_KEY } from '../storageKeyNames';
import { FriendsService } from './friends.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  set favoritesIds(newFavoritesIds: string []) {
    localStorage.setItem(FAVORITES_IDS_KEY,JSON.stringify(newFavoritesIds));
  }

  get favoritesIds(): string [] {
    return JSON.parse(localStorage.getItem(FAVORITES_IDS_KEY) || '[]')
  }

  constructor(private friendsService: FriendsService) { }


  get favorites(): person[] {
    return this.favoritesIds.map(id =>
      this.friendsService.friends.find(friend => id === friend.id)!);
  }
  get nonFavorites(): person[] {
    return this.friendsService.friends.filter(friend =>
      !this.favoritesIds.includes(friend.id));
  }


  addFavorite(personId: string): void {
    this.favoritesIds = this.favoritesIds.concat(personId);
  }


  removeFavorite(personId: string): void {
    this.favoritesIds = this.favoritesIds.filter(id => id !== personId)
  }
}
