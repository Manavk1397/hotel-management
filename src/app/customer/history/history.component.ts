import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../shared/hotel.service'; // Import the service
import { Room } from '../../models/room.model'; // Import the global model

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  // Local array to hold the history for the template
  myBookings: Room[] = [];

  // Inject the HotelService to access centralized data
  constructor(private hotelService: HotelService) {}

  ngOnInit(): void {
    // Sync the local array with the service's history
    this.myBookings = this.hotelService.bookingHistory;
  }
}