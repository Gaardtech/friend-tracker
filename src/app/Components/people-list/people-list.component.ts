import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { person } from 'src/types';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  @Input() people: person[] = [];
  @Input() clickPersonFn: (personId: string) => void = () => {};
  @Input() buttonFn: (personId: string) => void = () => {};
  @Input() actionText: string = "";
  @Input() allowAdditions: boolean = false;
  // @Output() clickPerson = new EventEmitter<string>();
  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

  // personClicked(personId: string): void {
  //   this.clickPerson.emit(personId);
  // }

  goToNewFriendPage(): void {
    this.router.navigateByUrl('/new-friend');

  }

}
