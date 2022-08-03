import { Component, OnInit,Input, Output, EventEmitter, ɵcoerceToBoolean } from '@angular/core';
import { person } from 'src/types';
@Component({
  selector: 'app-welcome-message',
  templateUrl: './welcome-message.component.html',
  styleUrls: ['./welcome-message.component.css']
})
export class WelcomeMessageComponent implements OnInit {
  @Input() person!: person
  @Input() showMessage: boolean = true;

  @Output() hide = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
    
  }

  hideMessage(): void { 
    this.hide.emit();
  } 

}
