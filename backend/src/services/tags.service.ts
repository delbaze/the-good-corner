import { Like, Repository } from "typeorm";
import { Tag } from "../entities/tag.entity";
import datasource from "../db";
import { ICreateTag } from "../types/tag";
import { validate } from "class-validator";
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
    const errors = await validate(newTag);
    if (errors.length !== 0) {
      console.log("errors", errors);
      // return res.status(422).send({ errors });
      throw new Error("Une erreur s'est produite");
    }

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
