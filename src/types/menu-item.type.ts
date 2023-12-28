export type MenuItemList = {
  id: string;
  name: string;
  price: string;
  discount?: string;
  merchart: string;
  currentPrice?: number;
  images: string[];
  cook_method:string;
  time: number;
  distance: number;
  ratings: number;
  kcal: string;
  ingredient: Array<IngredientType>,
}

export type IngredientType = {
  name?: number | string;
} 