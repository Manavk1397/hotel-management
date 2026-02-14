import { Component } from '@angular/core';
import { HotelService } from '../../shared/hotel.service';
import { Room } from '../../models/room.model';

@Component({
  selector: 'app-roomlist',
  templateUrl: './roomlist.component.html'
})
export class RoomlistComponent {
  constructor(public hotelService: HotelService) {}

  onConfirmBooking(room: Room, checkIn: string, checkOut: string): void {
    if (!checkIn || !checkOut) {
      alert("Please select both Check-In and Check-Out dates.");
      return;
    }

    const success = this.hotelService.bookRoom(room.id, checkIn, checkOut);

    if (success) {
      // Alert showing booking details upon clicking confirm
      alert(`Booking Confirmed!\nRoom: ${room.type}\nCheck-in: ${checkIn}\nCheck-out: ${checkOut}`);
    } else {
      alert("Error: Room is no longer available.");
    }
  }
}