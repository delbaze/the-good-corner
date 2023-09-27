import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Ad } from "./ad.entity";

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Ad, (ad) => ad.category)
  ads: Ad[];
}
