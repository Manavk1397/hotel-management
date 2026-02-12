import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-roomcard',
  templateUrl: './roomcard.component.html',
  styleUrls: ['./roomcard.component.css']
})
export class RoomcardComponent {
  @Input() buttonLabel: string = 'Book Now'; 
  @Input() roomData: any; 
  @Output() cardAction = new EventEmitter<any>();

  onBtnClick() {
    this.cardAction.emit(this.roomData);
  }
}