import { Injectable } from '@angular/core';
import { Room } from '../models/room.model';

@Injectable({ providedIn: 'root' })
export class HotelService {
  rooms: Room[] = [
    { id: 1, type: 'Deluxe Room', price: 2500, count: 5, description: 'AC, Wifi' },
    { id: 2, type: 'Executive Suite', price: 5000, count: 2, description: 'King Bed' }
  ];

  bookingHistory: Room[] = [];

  bookRoom(roomId: number): boolean {
    const room = this.rooms.find(r => r.id === roomId);
    if (room && room.count > 0) {
      room.count--; // Maintain available room count
      room.lastBooked = new Date().toLocaleString(); // Capture timestamp
      this.bookingHistory.push({ ...room }); // Show booking history
      return true;
    }
    return false;
  }

  addRoom(newRoom: Room) {
    this.rooms.push(newRoom); // Admin uploads room details
  }

  deleteRoom(roomId: number) {
    this.rooms = this.rooms.filter(r => r.id !== roomId);
  }
}