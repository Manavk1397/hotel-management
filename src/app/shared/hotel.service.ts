import { Injectable } from '@angular/core';
import { Room } from '../models/room.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HotelService {
  private readonly API_URL = 'https://pyrenocarpous-emilio-artistically.ngrok-free.dev/api';

  constructor(private http: HttpClient) { }
  getRooms(): Observable<Room[]> {
    const headers = new HttpHeaders({ 'ngrok-skip-browser-warning': 'true' });
    return this.http.get<Room[]>(`${this.API_URL}/rooms`, { headers });
  }
  addRoom(newRoom: Room): Observable<Room> {
    const headers = new HttpHeaders({
      'role': localStorage.getItem('role') || '',
      'ngrok-skip-browser-warning': 'true'
    });
    return this.http.post<Room>(
      `${this.API_URL}/rooms`,
      newRoom,
      { headers }
    );
  }

  deleteRoomQuantity(roomId: number, quantity: number): Observable<any> {
    const headers = new HttpHeaders({
      'role': localStorage.getItem('role') || '',
      'ngrok-skip-browser-warning': 'true'
    });
    return this.http.patch(
      `${this.API_URL}/rooms/${roomId}/reduce`,
      { quantity },
      { headers }
    );
  }

  deleteRoom(roomId: number): Observable<any> {
    const headers = new HttpHeaders({
      'role': localStorage.getItem('role') || '',
      'ngrok-skip-browser-warning': 'true'
    });
    return this.http.delete(
      `${this.API_URL}/rooms/${roomId}`,
      { headers }
    );
  }

  bookRoom(roomId: number, checkIn: string, checkOut: string): Observable<any> {
    const headers = new HttpHeaders({ 'ngrok-skip-browser-warning': 'true' });
    const userId = localStorage.getItem('userId');
    const bookingPayload = {
      roomId,
      userId: userId ? parseInt(userId) : null,
      checkIn,
      checkOut
    };
    return this.http.post(`${this.API_URL}/bookings`, bookingPayload, { headers });
  }

  getBookingHistory(): Observable<any[]> {
    const headers = new HttpHeaders({ 'ngrok-skip-browser-warning': 'true' });
    const userId = localStorage.getItem('userId');
    return this.http.get<any[]>(`${this.API_URL}/bookings/history/${userId}`, { headers });
  }

  login(credentials: any): Observable<any> {
    const headers = new HttpHeaders({ 'ngrok-skip-browser-warning': 'true' });
    return this.http.post(`${this.API_URL}/auth/login`, credentials, { headers });
  }

  register(userData: any): Observable<any> {
    const headers = new HttpHeaders({ 'ngrok-skip-browser-warning': 'true' });
    return this.http.post(`${this.API_URL}/auth/register`, userData, { headers });
  }
}