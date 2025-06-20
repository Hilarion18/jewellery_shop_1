export type Product = {
  id: number;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  imageUrl: string;
  category: string;
  type: string;
};

export interface ProductCardProps {
  product: Product;
}