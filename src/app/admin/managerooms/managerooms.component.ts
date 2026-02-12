import { Component } from '@angular/core';
import { HotelService } from '../../shared/hotel.service';
import { Room } from '../../models/room.model';

@Component({
  selector: 'app-managerooms',
  templateUrl: './managerooms.component.html'
})
export class ManageroomsComponent {
  // Local variables for basic template binding if needed
  rType = '';
  rPrice = 0;

  constructor(public hotelService: HotelService) {}

  onUpload(type: string, price: string, desc: string, imgUrl: string): void {
    const priceNum = parseFloat(price); 
    
    if (type && priceNum > 0) {
      const newRoom: Room = {
        id: Date.now(),
        type: type,
        price: priceNum,
        count: 1, 
        description: desc, 
        image: imgUrl 
      };
      
      this.hotelService.addRoom(newRoom); 
      alert('Room added successfully!');
    }

    
    this.rType = '';
    this.rPrice = 0;
  }

  
  deleteRoom(roomId: number): void {
    this.hotelService.deleteRoom(roomId);
  }
}