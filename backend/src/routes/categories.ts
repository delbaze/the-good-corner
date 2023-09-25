import { Router, Response } from "express";
import { Category } from "../entities/category";
const router = Router();

router.get("/", async (_, res: Response) => {
    console.log("je suis dans categories");
  try {
    const categories = await Category.find({
      relations: {
        ads: true,
      },
    });
    res.send(categories);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

/**========================================================================
 *                           liste des routes ...
 *========================================================================**/



router.get("/find/:id", async (_, res: Response) => {
    
})

export default router;
