import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../shared/hotel.service';
import { Room } from '../../models/room.model';

@Component({
  selector: 'app-managerooms',
  templateUrl: './managerooms.component.html'
})
export class ManageroomsComponent implements OnInit {
  rooms: Room[] = []; 

  constructor(public hotelService: HotelService) {}

  ngOnInit(): void {
    this.loadRooms(); 
  }

  loadRooms(): void {
    this.hotelService.getRooms().subscribe((data) => {
      this.rooms = data;
    });
  }

  onUpload(type: string, price: string, desc: string, qty: string, img: string): void {
    const priceNum = parseFloat(price);
    const qtyNum = parseInt(qty) || 1;
    
    if (type && priceNum > 0) {

     const newRoom: any = { 
  type: type,
  price: priceNum,
  count: qtyNum,
  description: desc,
  image: img
};
      this.hotelService.addRoom(newRoom).subscribe(() => {
        alert('Inventory Updated Successfully!');
        this.loadRooms(); 
      });
    }
  }

  deleteQty(roomId: number, qty: string): void {
    this.hotelService.deleteRoomQuantity(roomId, parseInt(qty)).subscribe(() => {
      this.loadRooms(); 
    });
  }
}