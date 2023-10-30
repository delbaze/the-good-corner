import CategoryService from "../services/category.service";
import { ICreateCategory } from "../types/category";

export default {
  Query: {
    listCategories: async () => {
      //toute ma logique de récupération de categories
      const categories = await new CategoryService().list();
      return categories;
    },
    findCategory: async (_: any, { id }: { id: string }) => {
      console.log(id);
      const category = await new CategoryService().find(+id);
      return category;
    },
  },
  Mutation: {
    createCategory: async (_: any, { data }: { data: ICreateCategory }) => {
      const newCategory = await new CategoryService().create({ ...data });
      return newCategory;
    },
  },
};
