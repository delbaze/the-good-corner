import "reflect-metadata";
import express from "express";
import db from "./db";

import categoryRouter from "./routes/categories.routes";
import tagRouter from "./routes/tags.routes";
import adRouter from "./routes/ads.routes";

const app = express();
const port = 4000;

app.use(express.json());
/**========================================================================
 *                           Routes
 *========================================================================**/
app.use("/categories", categoryRouter);
app.use("/tags", tagRouter);
app.use("/ads", adRouter);


/**========================================================================
 *                           Lancement du serveur
 *========================================================================**/
app.listen(port, async () => {
  await db.initialize();
  console.log(`Server running on http://localhost:${port}`);
});
