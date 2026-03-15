export interface Product {
  id: number;
  category: string;
  itemId: string;
  name: string;
  fullPrice: number;
  price: number;
  country: string;
  warranty: string;
  color: string;
  power: string;
  year: number;
  image: string;
}

export interface ProductDescription {
  title: string;
  text: string[];
}

export interface ProductDetail {
  id: string;
  namespaceId: string;
  name: string;
  sizeAvailable: string[];
  size: string;
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable: string[];
  color: string;
  images: string[];
  description: ProductDescription[];
  country: string;
  dimensions: string;
  warranty: string;
  power: string;
  weight: string;
  noiseLevel: string;
  features: string[];
}
