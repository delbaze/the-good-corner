import { Router, Response } from "express";
import { Category } from "../entities/category";
import CategoryService from "../services/category";
const router = Router();

router.get("/list", async (_, res: Response) => {
  console.log("je suis dans categories");
  try {
    // const categories = await Category.find({
    //   relations: {
    //     ads: true,
    //   },
    // });
    // const categories = await new CategoryService().list()
    const categories = await CategoryService.list()
    res.send(categories);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.get("/find/:id", async (_, res: Response) => {

});

export default router;
