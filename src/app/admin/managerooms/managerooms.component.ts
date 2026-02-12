import { Component } from '@angular/core';
import { HotelService } from '../../shared/hotel.service';
import { Room } from '../../models/room.model';

@Component({
  selector: 'app-managerooms',
  templateUrl: './managerooms.component.html'
})
export class ManageroomsComponent {
  rType = '';
  rPrice = 0;

  constructor(public hotelService: HotelService) {}

  onUpload() {
    if (this.rType && this.rPrice > 0) {
      const newRoom: Room = {
        id: Date.now(),
        type: this.rType,
        price: this.rPrice,
        count: 1,
        description: 'Added by Admin'
      };
      this.hotelService.addRoom(newRoom);
      this.rType = '';
      this.rPrice = 0;
    }
  }
}