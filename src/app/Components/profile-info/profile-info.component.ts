import { Component, Input, OnInit } from '@angular/core';
import { person } from 'src/types';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {
  @Input() person: person = {
    id: '',
    name:'',
    profilePicURL:'',
    age:0,
    bio:'',
    birthday:'',
    intrests: [],
  }
  
  constructor() { }

  ngOnInit(): void {
  }

  displayDetails() {
    alert (`${this.person.name} is ${this.person.age} years old`)

  }

}
