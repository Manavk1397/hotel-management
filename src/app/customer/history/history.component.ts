import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../shared/hotel.service';
import { Room } from '../../models/room.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html'
})
export class HistoryComponent implements OnInit {
  history: Room[] = [];

  constructor(private hotelService: HotelService) {}

  ngOnInit() {
    this.history = this.hotelService.bookingHistory;
  }
}