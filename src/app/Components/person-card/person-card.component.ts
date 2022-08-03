import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { person } from 'src/types';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.css']
})
export class PersonCardComponent implements OnInit {
  @Input() person!: person;
  // @Output() select = new EventEmitter<string>();
  @Input() selectFn: (personId: string) => void = () => {};
  @Input() buttonFn: (personId: string) => void = () => {};
  @Input() actionText: string = "";

  constructor() { }

  ngOnInit(): void {
    
  }

  cardClicked(): void {
    // this.select.emit(this.person.id);
    this.selectFn(this.person.id)
  }

  buttonCicked(): void {
    this.buttonFn(this.person.id)
  }
}
