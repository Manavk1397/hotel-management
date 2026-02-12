import { Component } from '@angular/core';
import { HotelService } from '../../shared/hotel.service';
import { Room } from '../../models/room.model';

@Component({
  selector: 'app-managerooms',
  templateUrl: './managerooms.component.html' // Ensure this path is correct
})
export class ManageroomsComponent {
  // Inject the service as public to use 'hotelService.rooms' in the template
  constructor(public hotelService: HotelService) {}

  onUpload(type: string, price: string) {
    const newRoom: Room = {
      id: Date.now(),
      type: type,
      price: parseFloat(price),
      count: 1,
      description: 'Added by Admin'
    };
    this.hotelService.addRoom(newRoom);
  }

  // Template was looking for deleteRoom; we map it to the service method
  deleteRoom(roomId: number) {
    this.hotelService.deleteRoom(roomId);
  }
}