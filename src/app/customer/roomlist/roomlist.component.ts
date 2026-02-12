import { Component } from '@angular/core';
import { HotelService } from '../../shared/hotel.service';

@Component({
  selector: 'app-roomlist',
  templateUrl: './roomlist.component.html'
})
export class RoomlistComponent {
  constructor(public hotelService: HotelService) {}

  onBook(roomId: number) {
    if (this.hotelService.bookRoom(roomId)) {
      alert('Room booked successfully!');
    }
  }
}