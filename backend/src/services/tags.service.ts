import { Like, Repository } from "typeorm";
import { Tag } from "../entities/tag.entity";
import datasource from "../db";
import { ICreateTag } from "../types/tag";
export default class TagService {
  db: Repository<Tag>;

  constructor() {
    this.db = datasource.getRepository(Tag);
  }

  async list(name: string) {
    const tags = await this.db.find({
      where: { name: name ? Like(`%${name}%`) : undefined },
    });
    return tags;
  }

  async create(data: ICreateTag) {
    const newTag = this.db.create(data);

    return await this.db.save(newTag);
  }
  async delete(id: number) {
    const tagToDelete = await this.db.findOneBy({
      id,
    });
    if (!tagToDelete) {
      throw new Error("Ce tag n'existe pas");
    }
    await this.db.remove(tagToDelete);

    return tagToDelete;
  }
}
