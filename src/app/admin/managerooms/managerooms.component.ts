import { Component } from '@angular/core';
import { HotelService } from '../../shared/hotel.service';
import { Room } from '../../models/room.model';

@Component({
  selector: 'app-managerooms',
  templateUrl: './managerooms.component.html'
})
export class ManageroomsComponent {
  constructor(public hotelService: HotelService) {}

  onUpload(type: string, price: string, desc: string, qty: string, img: string): void {
    const priceNum = parseFloat(price);
    const qtyNum = parseInt(qty) || 1;
    
    if (type && priceNum > 0) {
      const newRoom: Room = {
        id: Date.now(),
        type: type,
        price: priceNum,
        count: qtyNum,
        description: desc,
        image: img
      };
      
      this.hotelService.addRoom(newRoom); 
      alert('Inventory Updated Successfully!');
    }
  }

  deleteQty(roomId: number, qty: string): void {
    this.hotelService.deleteRoomQuantity(roomId, parseInt(qty));
  }
}