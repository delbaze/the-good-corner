import { Ad } from "./ads";
export interface Tag {
  id: number;
  name: string;
  ads: Ad[];
}
