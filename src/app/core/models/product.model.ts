export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  ecoScore: number;
  category?: string; // ❗ теперь optional
  rating: number;
  image: string; 
}
