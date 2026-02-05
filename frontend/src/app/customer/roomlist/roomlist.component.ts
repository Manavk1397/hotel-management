import { Component } from '@angular/core';

@Component({
  selector: 'app-roomlist',
  templateUrl: './roomlist.component.html',
  styleUrls: ['./roomlist.component.css']
})
export class RoomlistComponent {
// Using basic variables and arrays
  room1Type = 'Deluxe Room';
  room1Price = 2500;
  room1Count = 5;

  room2Type = 'Executive Suite';
  room2Price = 5000;
  room2Count = 2;

  bookRoom1() {
    this.room1Count = this.room1Count - 1;
    alert('Booking Successful for Deluxe!');
}
}
