import { Repository } from "typeorm";
import { Category } from "../entities/category.entity";
import { ICreateCategory } from "../types/category";
import datasource from "../db";

export default class CategoryService {
  db: Repository<Category>;
  constructor() {
    this.db = datasource.getRepository(Category);
  }

  async list() {
    const categories = await this.db.find({
      relations: {
        ads: true,
      },
    });

    return categories;
  }

  async create({ name }: ICreateCategory) {
    const newCategory = this.db.create({ name });
    return await this.db.save(newCategory);
  }

  async find(id: number) {
    return await this.db.findOneBy({ id });
  }
}
