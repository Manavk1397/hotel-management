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

  // Logic to add or merge rooms
  addRoom(newRoom: Room) {
    const existing = this.rooms.find(r => r.type.toLowerCase() === newRoom.type.toLowerCase());
    if (existing) {
      existing.count += newRoom.count; // Increase count if name exists
    } else {
      this.rooms.push(newRoom);
    }
  }

  // Selective deletion
  deleteRoomQuantity(roomId: number, quantity: number) {
    const room = this.rooms.find(r => r.id === roomId);
    if (room) {
      room.count -= quantity;
      if (room.count <= 0) {
        this.rooms = this.rooms.filter(r => r.id !== roomId);
      }
    }
  }

  // Booking with check-in/out
bookRoom(roomId: number, checkIn: string, checkOut: string): boolean {
  const room = this.rooms.find(r => r.id === roomId);
  if (room && room.count > 0) {
    room.count--;
    // Store booking details with dates in history
    const bookingEntry = { 
      ...room, 
      checkIn, 
      checkOut, 
      lastBooked: new Date().toLocaleString() 
    };
    this.bookingHistory.push(bookingEntry);
    return true;
  }
  return false;
}
}