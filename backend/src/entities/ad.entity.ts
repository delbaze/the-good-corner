import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column,
  ManyToOne,
  JoinTable,
  ManyToMany,
  UpdateDateColumn,
} from "typeorm";
import { Length, Min } from "class-validator";
import { Category } from "./category.entity";
import { Tag } from "./tag.entity";
import { Field, Float, ID, InputType, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Ad {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ length: 50 })
  @Length(5, 50, { message: "Le titre doit contenir entre 5 et 50 caractères" })
  title: string;

  @Field({ nullable: true })
  @Column({ nullable: true, type: "text" })
  description: string;

  @Field()
  @Column()
  owner: string;

  @Field()
  @Column({ type: "float" })
  @Min(0, { message: "le prix doit etre positif" })
  price: number;

  @Field()
  @Column()
  location: string;

  @Field()
  @Column()
  picture: string;

  @Field()
  @CreateDateColumn()
  createdAt: string;

  @Field()
  @UpdateDateColumn()
  updatedAt: string;

  @Field(() => Category)
  @ManyToOne(() => Category, (c) => c.ads, {
    cascade: true,
    onDelete: "CASCADE",
  })
  category: Category;

  // @Field(() => [Tag])
  @JoinTable()
  @ManyToMany(() => Tag, (t) => t.ads, {
    cascade: true,
  })
  tags: Tag[];
}

@ObjectType()
export class AdDeleted {
  @Field()
  title: string;

  @Field({ nullable: true })
  description: string;

  @Field()
  owner: string;

  @Field()
  price: number;

  @Field()
  location: string;

  @Field()
  picture: string;

  @Field()
  createdAt: string;

  @Field()
  updatedAt: string;

  @Field(() => Category)
  category: Category;

  // @Field(() => [Tag])
  // tags: Tag[];
}

//INPUTS

@InputType()
export class PartialCategoryInput {
  @Field(() => ID)
  id: string;
}
@InputType()
export class CreateAdInput {
  @Field()
  title: string;
  @Field()
  description: string;
  @Field()
  owner: string;
  @Field(() => Float)
  price: number;
  @Field()
  location: string;
  @Field()
  picture: string;
  @Field()
  category: PartialCategoryInput;
}

@InputType()
export class UpdateAdInput {
  @Field(() => ID)
  id: string
  @Field({nullable: true})
  title: string
  @Field({nullable: true})
  description: string
  @Field({nullable: true})
  owner: string
  @Field({nullable: true})
  price: number
  @Field({nullable: true})
  location: string
  @Field({nullable: true})
  picture: string
  @Field({nullable: true})
  category: PartialCategoryInput
}