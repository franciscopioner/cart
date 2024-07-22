// types.ts
export interface Product {
    id: number;
    title: string;
    price: number;
    quantity?: number;
    images: string[];
    description?: string;
  }
  
  export interface Cart {
    id: number;
    products: Product[];
    total: number;
    discountedTotal: number;
    userId: number;
    totalProducts: number;
    totalQuantity: number;
  }
  