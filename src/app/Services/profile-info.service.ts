import { Injectable } from '@angular/core';
import { person, personInfo } from 'src/types';
import { PROFILE_KEY } from '../storageKeyNames';

@Injectable({
  providedIn: 'root'
})
export class ProfileInfoService {

  constructor() { }


  get profileInfo() {
    return JSON.parse(localStorage.getItem(PROFILE_KEY) || '[]');
  }

  set profileInfo(newValue: person) {
    localStorage.setItem(PROFILE_KEY,JSON.stringify(newValue)) 
  }

  updateprofileInfo(updatedInfo: personInfo): void{
    this.profileInfo = {
      ...updatedInfo,
      id: this.profileInfo.id,
    };
  }
}
