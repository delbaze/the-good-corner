import AdsService from "../services/ads.service";
import CategoryService from "../services/category.service";
import { CreateAdInput, MutationDeleteAdArgs, QueryFindAdByIdArgs, QueryListAdsByCategoryArgs, UpdateAdInput } from "../types/resolvers-types";

export default {
  Query: {
    listAds: async () => {
      const ads = new AdsService().list();
      return ads;
    },
    listAdsByCategory: async (_: any, { id }: QueryListAdsByCategoryArgs) => {
      const category = await new CategoryService().find(+id);
      if (!category) {
        throw new Error("La catégorie n'existe pas");
      }
      const ads = await new AdsService().listByCategory(+id);
      return ads;
    },
    findAdById: async (_: any, { id }: QueryFindAdByIdArgs) => {
      console.log(id);
      const ad = await new AdsService().find(+id);
      if (!ad) {
        throw new Error("L'annonce n'existe pas");
      }
      return ad;
    },
  },
  Mutation: {
    createAd: async (_: any, { data }: { data: CreateAdInput }) => {
      const newAd = await new AdsService().create(data);
      return newAd;
    },
    deleteAd: async (_: any, { id }: MutationDeleteAdArgs) => {
      return await new AdsService().delete(+id);
    },
    updateAd: async (_: any, { data }: { data: UpdateAdInput }) => {
      const { id, ...otherData } = data;
      const adToUpdate = await new AdsService().update(+id, otherData);
      return adToUpdate;
    },
  },
};
