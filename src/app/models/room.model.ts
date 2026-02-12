export interface Room {
  id: number;
  type: string;
  price: number;
  count: number;
  description: string;
  image?: string;
  lastBooked?: string; 
} 