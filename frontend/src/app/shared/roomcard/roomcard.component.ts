import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-roomcard',
  templateUrl: './roomcard.component.html',
  styleUrls: ['./roomcard.component.css']
})
export class RoomcardComponent {
  // Fixes the "Property does not exist" error
  @Input() buttonLabel: string = 'Book Now'; 

  // Allows the parent to pass room details
  @Input() roomData: any; 

  // Allows the card to send data back to the parent when clicked
  @Output() cardAction = new EventEmitter<any>();

  onBtnClick() {
    this.cardAction.emit(this.roomData);
  }
}