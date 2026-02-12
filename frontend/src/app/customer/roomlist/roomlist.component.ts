import { Component } from '@angular/core';
import { HotelService } from '../../shared/hotel.service';
import { Room } from '../../models/room.model';

@Component({
  selector: 'app-roomlist',
  templateUrl: './roomlist.component.html'
})
export class RoomlistComponent {
  // Inject the service to access rooms and history
  constructor(public hotelService: HotelService) {}

  onBook(room: Room) {
    if (this.hotelService.bookRoom(room.id)) {
      alert(`Success! Booked ${room.type} at ${room.lastBooked}`);
    }
  }
}