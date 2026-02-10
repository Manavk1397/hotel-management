import { Component } from '@angular/core';
import { Room } from '../../models/room.model'; // Import global model

@Component({
  selector: 'app-managerooms',
  templateUrl: './managerooms.component.html',
  styleUrls: ['./managerooms.component.css']
})
export class ManageroomsComponent {
  // Local array of rooms for the admin to manage
  rooms: Room[] = [
    { id: 1, type: 'Deluxe Room', price: 2500, count: 5, description: 'AC, Wifi' },
    { id: 2, type: 'Executive Suite', price: 5000, count: 2, description: 'King Bed' }
  ];

  // Variables for two-way binding with [(ngModel)]
  rType: string = '';
  rPrice: number = 0;

  // Method to add a new room
  onUpload() {
    if (this.rType && this.rPrice > 0) {
      const newRoom: Room = {
        id: Date.now(), // Unique ID based on time
        type: this.rType,
        price: this.rPrice,
        count: 1,
        description: 'Newly added by Admin'
      };
      this.rooms.push(newRoom);
      alert('Room added successfully!');
      
      // Clear inputs after upload
      this.rType = '';
      this.rPrice = 0;
    } else {
      alert('Please enter valid room details.');
    }
  }

  // Method to delete a room using its index
  deleteRoom(index: number) {
    const confirmed = confirm(`Are you sure you want to delete ${this.rooms[index].type}?`);
    if (confirmed) {
      this.rooms.splice(index, 1);
    }
  }
}