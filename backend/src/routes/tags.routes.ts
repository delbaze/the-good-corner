import { Router, Request, Response } from "express";
import { validate } from "class-validator";
import TagService from "../services/tags.service";
import { ICreateTag, IListTag } from "../types/tag";
const router = Router();

router.get("/list", async (req: Request, res: Response) => {
  try {
    const { name } = req.query as unknown as IListTag;
    const tags = await new TagService().list(name);
    res.send(tags);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.post("/create", async (req: Request, res: Response) => {
  try {
    // const data = req.body as ICreateTag;
    const data: ICreateTag = req.body;
    const newTag = new TagService().create({ ...data });
    const errors = await validate(newTag);
    if (errors.length !== 0) return res.status(422).send({ errors });
    res.send(newTag);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.delete("/delete/:id", async (req: Request, res: Response) => {
  try {
    const tagToDelete = await new TagService().delete(+req.params.id);
    res.sendStatus(204).json(tagToDelete);
  } catch (err: any) {
    console.log(err);
    res.sendStatus(500).json({ message: err.message });
  }
});

export default router;
