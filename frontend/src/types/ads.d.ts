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
    category: Category
    tags: Tag[]
}