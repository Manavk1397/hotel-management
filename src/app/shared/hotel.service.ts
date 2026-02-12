import { Injectable } from '@angular/core';
import { Room } from '../models/room.model';

@Injectable({ providedIn: 'root' })
export class HotelService {
  rooms: Room[] = [
    { 
      id: 1, 
      type: 'Deluxe Room', 
      price: 2500, 
      count: 5, 
      description: 'Spacious room with AC and high-speed Wifi.', 
      image: 'https://hotelroyalhoian.vn/wp-content/uploads/2025/05/what-is-a-deluxe-room-2-1024x675.jpg' 
    },
    { 
      id: 2, 
      type: 'Executive Suite', 
      price: 5000, 
      count: 2, 
      description: 'Luxury suite featuring a King Bed and city view.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmlBgAj63K0XlyLVNaJeaXkIic2uDh_ABTOA&s'
    }
  ];
  bookingHistory: Room[] = [];
  addRoom(newRoom: Room) {
    this.rooms.push(newRoom);
  }

  deleteRoom(roomId: number) {
    this.rooms = this.rooms.filter(r => r.id !== roomId); 
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