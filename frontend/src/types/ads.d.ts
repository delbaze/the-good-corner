import { Category } from "./categories";

export interface Ad {
  id: string;
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

export interface IAdCard
  extends Omit<
    Ad,
    | "tags"
    | "category"
    | "updatedAt"
    | "description"
    | "owner"
    | "location"
    | "createdAt"
  > {}
// export interface IAdCard {
//   id: number;
//   title: string;
//   price: number;
//   location: string;
//   picture: string;
//   createdAt: string;
// }

export interface IAdForm extends Omit<Ad, "createdAt" | "updatedAt" | "tags"> {
  id?: string | undefined; // on prévoir l'édition => surcharge de "id", lors de la création l'id n'est pas défini
  category: Omit<Category, "name">;
}
export interface IUpdateForm extends Omit<Ad, "createdAt" | "updatedAt" | "tags"> {
  id: string
  category: Omit<Category, "name">;
}

export interface FormEditOrCreate {
  initialData?: Ad;
}
