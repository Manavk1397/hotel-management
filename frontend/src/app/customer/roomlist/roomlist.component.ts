import { Component } from '@angular/core';
import { Room } from '../../models/room.model';

@Component({
  selector: 'app-roomlist',
  templateUrl: './roomlist.component.html',
  styleUrls: ['./roomlist.component.css']
})
export class RoomlistComponent {
  // Static array ensures data is shared across all instances and components
  static sharedRooms: Room[] = [
    { id: 1, type: 'Deluxe Room', price: 2500, count: 5, description: 'AC, Wifi' },
    { id: 2, type: 'Executive Suite', price: 5000, count: 2, description: 'King Bed' }
  ];

  static historyData: Room[] = []; 

  get rooms() {
    return RoomlistComponent.sharedRooms;
  }

  bookRoom(index: number) {
    const targetRoom = RoomlistComponent.sharedRooms[index];
    if (targetRoom.count > 0) {
      targetRoom.count--;
      targetRoom.lastBooked = new Date().toLocaleString();
      RoomlistComponent.historyData.push({ ...targetRoom });
      alert(`Booking Successful for ${targetRoom.type}!`);
    }
  }
}