import AdsService from "../services/ads.service";
import CategoryService from "../services/category.service";
import { IAdForm } from "../types/ad";

export default {
  Query: {
    listAds: async () => {
      const ads = new AdsService().list();
      return ads;
    },
    listAdsByCategory: async (_: any, { id }: { id: string }) => {
      const category = await new CategoryService().find(+id);
      if (!category) {
        throw new Error("La catégorie n'existe pas");
      }
      const ads = await new AdsService().listByCategory(+id);
      return ads;
    },
    findAdById: async (_: any, {id}:  {id: string}) => {
      console.log(id);
      const ad = await new AdsService().find(+id);
      if (!ad) {
        throw new Error("L'annonce n'existe pas");
      }
      return ad;

    

    }
  },
  Mutation: {
    createAd: async (_: any, { data }: { data: IAdForm }) => {
        const newAd = await new AdsService().create(data);
        return newAd;
    },
    deleteAd: async (_: any, { id }: { id: string }) => {
      return await new AdsService().delete(+id);
    }
  },
};
