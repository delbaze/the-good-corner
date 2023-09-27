import { Category } from "./categories";

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
