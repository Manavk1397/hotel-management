import { Injectable } from '@angular/core';
import { Room } from '../models/room.model';

@Injectable({ providedIn: 'root' })
export class HotelService {
  // Centralized Room List
  rooms: Room[] = [
    { id: 1, type: 'Deluxe Room', price: 2500, count: 5, description: 'AC, Wifi' },
    { id: 2, type: 'Executive Suite', price: 5000, count: 2, description: 'King Bed' }
  ];

  // Centralized Booking History
  bookingHistory: Room[] = [];

  // Logic to book a room (Customer)
  bookRoom(roomId: number) {
    const room = this.rooms.find(r => r.id === roomId);
    if (room && room.count > 0) {
      room.count--;
      room.lastBooked = new Date().toLocaleString(); // Capture timestamp
      this.bookingHistory.push({ ...room }); // Save copy to history
      return true;
    }
    return false;
  }

  // Logic to manage rooms (Admin)
  addRoom(newRoom: Room) {
    this.rooms.push(newRoom);
  }

  deleteRoom(roomId: number) {
    this.rooms = this.rooms.filter(r => r.id !== roomId);
  }
}