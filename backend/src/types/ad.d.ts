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
    id?: number | undefined; // on prévoir l'édition => surcharge de "id", lors de la création l'id n'est pas défini
    category: Omit<Category, "name">;
  }
  