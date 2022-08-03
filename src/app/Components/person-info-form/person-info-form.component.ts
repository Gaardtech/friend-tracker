import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { person, personInfo } from 'src/types';
import {v4 as uuid } from 'uuid';


@Component({
  selector: 'app-person-info-form',
  templateUrl: './person-info-form.component.html',
  styleUrls: ['./person-info-form.component.css']
})
export class PersonInfoFormComponent implements OnInit {
  @Input() person: person | undefined;
  name: string = ''
  age: string = ''
  profilePicUrl: string = ''
  bio: string = ''
  birthday: string = ''
  intrests: string = ''

  @Output() submit = new EventEmitter<personInfo>();

  constructor() { }

  ngOnInit(): void {
    if (this.person){
      this.name = this.person.name;
      this.age = `${this.person.age}`;
      this.profilePicUrl = this.person.profilePicURL;
      this.bio = this.person.bio;
      this.birthday = this.person.birthday;
      this.intrests = this.person.intrests.join(', ');

    }
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


  formSubmitted(): void {
    const personInfo: personInfo = {
      name: this.name,
      age: Number(this.age),
      profilePicURL:  this.profilePicUrl,
      bio:  this.bio,
      birthday:  this.birthday,
      intrests:  this.intrests.split(',').map(s => s.trim()),
    }

    this.submit.emit(personInfo)
    
  }
}
