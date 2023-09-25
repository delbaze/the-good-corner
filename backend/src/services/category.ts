import { Category } from "../entities/category";

export default class CategoryService {
  constructor(){

  }
  static async list() {
    console.log("je suis dans ma méthode list");
    const categories = await Category.find({
      relations: {
        ads: true,
      },
    });

    return categories;
  }

  create() {}

  find() {}
}
