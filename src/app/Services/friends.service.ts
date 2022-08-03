import { Injectable } from '@angular/core';
import { person, personInfo } from 'src/types';
import { FRIENDS_KEY } from '../storageKeyNames';
import {v4 as uuid } from 'uuid';
import { FavoritesService } from './favorites.service';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor() { }

  get friends(): person[] {
    const existingFriends = JSON.parse(localStorage.getItem(FRIENDS_KEY) || '[]');
    return existingFriends
  }

  set friends(newValue: person []) {
    localStorage.setItem(FRIENDS_KEY,JSON.stringify(newValue)) 
  }

  createFriend(personInfo: personInfo): string {
    const newId = uuid()
    const newFriend = {
      ...personInfo,
      id: newId,
    }
     this.friends = this.friends.concat(newFriend)
    return newId
  }

  getFriend(id: string): person | undefined {
    return this.friends.find(friend => id === friend.id);
  }
  updateFriend(id: string, updatedInfo: personInfo): void{
    const updatedPerson = {
      ...updatedInfo,
      id,
    };
    this.friends = this.friends.map((friend) => {
      if(friend.id === id)
      {
        return updatedPerson  
      }

      return friend
    });

  }

  deleteFriend(id: string): void {
    this.friends = this.friends.filter(friend => friend.id !== id); 
  }



}
