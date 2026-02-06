import { Component } from '@angular/core';

interface Room {
  type: string;
  price: number;
  count: number;
}

@Component({
  selector: 'app-roomlist',
  templateUrl: './roomlist.component.html',
  styleUrls: ['./roomlist.component.css']
})
export class RoomlistComponent {
    rooms: Room[] = [
    { type: 'Deluxe Room', price: 2500, count: 5 },
    { type: 'Executive Suite', price: 5000, count: 2 }
  ];

  bookRoom(index: number) {
    if (this.rooms[index].count > 0) {
      this.rooms[index].count--;
      alert(`Booking Successful for ${this.rooms[index].type}!`);
    } else {
      alert(`Sorry, ${this.rooms[index].type} is not available.`);
    }
  }
}
