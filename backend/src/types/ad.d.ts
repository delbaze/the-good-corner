export interface Ad {
  id: number;
  title: string;
  description: string;
  owner: string;
  price: number;
  location: string;
  picture: string;
  createdAt: Date;
  updatedAt: Date;
  category: Category;
  tags: Tag[];
}

export interface IAdForm extends Omit<Ad, "createdAt" | "updatedAt" | "tags"> {
  category: Omit<Category, "name">;
}

export interface IUpdateForm extends Partial<IAdForm> {
  id: string;
}
