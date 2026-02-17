import { Injectable } from '@angular/core';
import { Room } from '../models/room.model';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs'; 

@Injectable({ providedIn: 'root' })
export class HotelService {
  private readonly API_URL = 'https://pyrenocarpous-emilio-artistically.ngrok-free.dev/api'; 

  constructor(private http: HttpClient) {}
  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.API_URL}/rooms`);
  }

  addRoom(newRoom: Room): Observable<Room> {
    return this.http.post<Room>(`${this.API_URL}/rooms`, newRoom);
  }

  deleteRoomQuantity(roomId: number, quantity: number): Observable<any> {
    return this.http.patch(`${this.API_URL}/rooms/${roomId}/reduce`, { quantity });
  }

  deleteRoom(roomId: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/rooms/${roomId}`);
  }

  bookRoom(roomId: number, checkIn: string, checkOut: string): Observable<any> {
    const bookingData = { roomId, checkIn, checkOut };
    return this.http.post(`${this.API_URL}/bookings`, bookingData);
  }

  getBookingHistory(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/bookings/history`);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.API_URL}/auth/login`, credentials);
  }

  register(userData: any): Observable<any> {
    return this.http.post(`${this.API_URL}/auth/register`, userData);
  }
}