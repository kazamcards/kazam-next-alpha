export interface Product {
  id: number;
  product_name: string;
  inventory: number;
  price: number;
  description: string;
  image_url: string;
  category: string;
  set: string;
  era: string;
}

export type CategoryType = {
  id: number;
  category_name: string;
};

export type EraType = {
  id: number;
  era_name: string;
};

export type SetType = {
  id: number;
  set_name: string;
};
