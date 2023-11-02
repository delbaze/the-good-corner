import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Ad } from "./ad.entity";
import { Directive, Field, ID, InputType, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Category {
  @Field((type) => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Directive('@deprecated(reason: "Le name n\'est plus autorisé")')
  @Field()
  @Column()
  name: string;

  @Field(() => [Ad])
  @OneToMany(() => Ad, (ad) => ad.category)
  ads: Ad[];
}

/**============================================
 *?               Inputs
 *=============================================**/
@InputType()
export class CreateCategoryInput {
  @Field()
  name: string;
}

// @InputType()
// export class InfoInput {
//   @Field()
//   filter: string;

//   @Field()
//   order: string;
// }
// @ArgsType()
// export class Toto {
//   @Field()
//   id: string;

//   @Field({nullable: true})
//   infos?: InfoInput;
// }
