export interface CartType {
  id: number;
  img: string;
  productName: string;
  quantity: number;
  price: number;
}

export interface ProductType {
  id: number;
  img: string;
  category: string;
  name: string;
  desc: string;
  rating: number;
  price: number;
  sale: boolean;
  bestSelling: boolean;
  trending: boolean;
}
