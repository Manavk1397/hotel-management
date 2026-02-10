import { Component, OnInit } from '@angular/core';
import { RoomlistComponent } from '../roomlist/roomlist.component'; // Reference static data
import { Room } from '../../models/room.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html'
})
export class HistoryComponent implements OnInit {
  myBookings: Room[] = [];

  ngOnInit() {
    // Access the shared static history array
    this.myBookings = RoomlistComponent.historyData;
  }
}