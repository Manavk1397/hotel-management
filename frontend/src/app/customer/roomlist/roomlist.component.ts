import { Component } from '@angular/core';
import { HotelService } from '../../shared/hotel.service';
import { Room } from '../../models/room.model';

@Component({
  selector: 'app-roomlist',
  templateUrl: './roomlist.component.html'
})
export class RoomlistComponent {
  constructor(public hotelService: HotelService) {}

  onBook(room: Room) {
    if (this.hotelService.bookRoom(room.id)) {
      alert(`Success! Booked ${room.type} at ${room.lastBooked}`); // Timestamp confirmation
    } else {
      alert('Room is currently sold out.');
    }
  }
}