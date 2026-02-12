import { Injectable } from '@angular/core';
import { Room } from '../models/room.model';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  rooms: Room[] = [
    { id: 1, type: 'Deluxe Room', price: 2500, count: 5, description: 'AC, Wifi' },
    { id: 2, type: 'Executive Suite', price: 5000, count: 2, description: 'King Bed' }
  ];
  bookingHistory: Room[] = [];
  addRoom(newRoom: Room) {
    this.rooms.push(newRoom);
  }

  deleteRoom(index: number) {
    this.rooms.splice(index, 1);
  }
  bookRoom(roomId: number) {
    const room = this.rooms.find(r => r.id === roomId);
    if (room && room.count > 0) {
      room.count--;
      room.lastBooked = new Date().toLocaleString();
      this.bookingHistory.push({ ...room });
      return true;
    }
    return false;
  }
}