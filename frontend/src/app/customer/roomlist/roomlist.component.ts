import { Component } from '@angular/core';
import { Room } from '../../models/room.model'; // Use the global model

@Component({
  selector: 'app-roomlist',
  templateUrl: './roomlist.component.html',
  styleUrls: ['./roomlist.component.css']
})
export class RoomlistComponent {
  rooms: Room[] = [
    { id: 1, type: 'Deluxe Room', price: 2500, count: 5, description: 'AC, Wifi' },
    { id: 2, type: 'Executive Suite', price: 5000, count: 2, description: 'King Bed' }
  ];

  // This array will store our booking history records
  static historyData: Room[] = []; 

  bookRoom(index: number) {
    if (this.rooms[index].count > 0) {
      this.rooms[index].count--;
      
      // Capturing the timestamp as requested
      const timestamp = new Date().toLocaleString();
      this.rooms[index].lastBooked = timestamp;
      
      // Save a copy of the booked room into the history list
      RoomlistComponent.historyData.push({ ...this.rooms[index] });
      
      alert(`Booking Successful for ${this.rooms[index].type} at ${timestamp}!`);
    }
  }
}