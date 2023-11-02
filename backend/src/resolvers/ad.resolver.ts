import { Arg, Mutation, Query, Resolver } from "type-graphql";
import AdsService from "../services/ads.service";
import CategoryService from "../services/category.service";
import { Ad, AdDeleted, CreateAdInput, UpdateAdInput } from "../entities/ad.entity";

@Resolver()
export class AdResolver {
  @Query(() => [Ad])
  async listAds() {
    const ads = await new AdsService().list();
    return ads;
  }

  @Query(() => [Ad])
  async listAdsByCategory(@Arg("id") id: string) {
    const category = await new CategoryService().find(+id);
    if (!category) {
      throw new Error("La catégorie n'existe pas");
    }
    const ads = await new AdsService().listByCategory(+id);
    return ads;
  }

  @Query(() => Ad)
  async findAdById(@Arg("id") id: string) {
    const ad = await new AdsService().find(+id);
    if (!ad) {
      throw new Error("L'annonce n'existe pas");
    }
    return ad;
  }

  @Mutation(() => Ad)
  async createAd(@Arg("data") data: CreateAdInput) {
    const newAd = await new AdsService().create(data);
      return newAd;
  }

  @Mutation(() => AdDeleted)
  async deleteAd(@Arg("id") id: string) {
    const {id: idAd, ...ad} = await new AdsService().delete(+id);
    return ad
  }

  @Mutation(() => Ad)
  async updateAd(@Arg("data") data: UpdateAdInput) {
    const { id, ...otherData } = data;
    const adToUpdate = await new AdsService().update(+id, otherData);
    return adToUpdate;
  }
}
