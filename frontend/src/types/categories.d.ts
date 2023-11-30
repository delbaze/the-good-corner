import { ListAdsByCategoryQuery } from "./graphql";
export interface Category {
  id: string;
  name: string;
}

export interface IPagination {
  count: ListAdsByCategoryQuery["listAdsByCategory"]["count"];
}
