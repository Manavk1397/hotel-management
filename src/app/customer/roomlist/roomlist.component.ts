// src/app/customer/roomlist/roomlist.component.ts
import { Component, OnInit } from '@angular/core'; // Added OnInit
import { HotelService } from '../../shared/hotel.service';
import { Room } from '../../models/room.model';

@Component({
  selector: 'app-roomlist',
  templateUrl: './roomlist.component.html'
})
export class RoomlistComponent implements OnInit {
  rooms: Room[] = []; // Local array for API data

  constructor(public hotelService: HotelService) {}

  ngOnInit(): void {
    this.loadRooms();
  }

  loadRooms(): void {
    this.hotelService.getRooms().subscribe((data) => {
      this.rooms = data;
    });
  }

  onConfirmBooking(room: Room, checkIn: string, checkOut: string): void {
    if (!checkIn || !checkOut) {
      alert("Please select both Check-In and Check-Out dates.");
      return;
    }

    this.hotelService.bookRoom(room.id, checkIn, checkOut).subscribe({
      next: (success) => {
        alert(`Booking Confirmed!\nRoom: ${room.type}\nCheck-in: ${checkIn}\nCheck-out: ${checkOut}`);
        this.loadRooms(); // Refresh to show updated room counts
      },
      error: () => alert("Error: Room is no longer available.")
    });
  }
}