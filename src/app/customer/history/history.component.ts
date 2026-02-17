import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../shared/hotel.service';
import { Room } from '../../models/room.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  bookingHistory: any[] = [];
  isLoading: boolean = true;

  constructor(private hotelService: HotelService) {}

  ngOnInit(): void {
    this.fetchHistory();
  }

  fetchHistory(): void {
    this.hotelService.getBookingHistory().subscribe({
      next: (data) => {
        this.bookingHistory = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Could not load history', err);
        this.isLoading = false;
      }
    });
  }
}