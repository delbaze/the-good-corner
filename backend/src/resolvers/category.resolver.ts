import { Arg, Mutation, Query, Resolver } from "type-graphql";
import CategoryService from "../services/category.service";

import { Category, CreateCategoryInput } from "../entities/category.entity";

@Resolver(() => Category)
export default class CategoryResolver {
  @Query(() => [Category])
  async listCategories(@Arg("limit", { nullable: true }) limit: number) {
    console.log("LIMIT", limit);
    const categories = await new CategoryService().list(limit);
    return categories;
  }

  @Query(() => Category)
  // async findCategory(@Args() { id, infos }: Toto) {
  // console.log("INFOS => ", infos);
  async findCategory(@Arg("id") id: string) {
    const category = await new CategoryService().find(+id);
    return category;
  }

  @Mutation(() => Category)
  async createCategory(@Arg("data") data: CreateCategoryInput) {
    const newCategory = await new CategoryService().create({ ...data });
    return newCategory;
  }
}
