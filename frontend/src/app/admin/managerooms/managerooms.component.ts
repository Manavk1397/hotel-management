import { Component } from '@angular/core';
import { RoomlistComponent } from '../../customer/roomlist/roomlist.component';
import { Room } from '../../models/room.model';

@Component({
  selector: 'app-managerooms',
  templateUrl: './managerooms.component.html',
  styleUrls: ['./managerooms.component.css']
})
export class ManageroomsComponent {
  
  get rooms() {
    return RoomlistComponent.sharedRooms;
  }

  // Using Template Reference Variables instead of ngModel
  onUpload(type: string, price: string) {
    const priceNum = parseFloat(price);
    if (type && priceNum > 0) {
      const newRoom: Room = {
        id: Date.now(),
        type: type,
        price: priceNum,
        count: 1,
        description: 'Newly added by Admin'
      };
      // Push directly to the shared static array
      RoomlistComponent.sharedRooms.push(newRoom);
    }
  }

  deleteRoom(roomToDelete: Room) {
    // Filter the shared static array to remove the item
    RoomlistComponent.sharedRooms = RoomlistComponent.sharedRooms.filter(
      r => r.id !== roomToDelete.id
    );
  }
}