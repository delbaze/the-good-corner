import CategoryService from "../services/category.service";
import { CreateCategoryInput, QueryFindCategoryArgs } from "../types/resolvers-types";

export default {
  Query: {
    listCategories: async () => {
      //toute ma logique de récupération de categories
      const categories = await new CategoryService().list();
      return categories;
    },
    findCategory: async (_: any, { id }: QueryFindCategoryArgs) => {
      const category = await new CategoryService().find(+id);
      return category;
    },
  },
  Mutation: {
    createCategory: async (_: any, { data }: { data: CreateCategoryInput }) => {
      const newCategory = await new CategoryService().create({ ...data });
      return newCategory;
    },
  },
};
