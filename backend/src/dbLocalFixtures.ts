import { DataSource } from "typeorm";

export default new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5433,
  username: "postgres",//process.env.POSTGRES_USER
  password: "postgres",
  database: "thegoodcorner",
  synchronize: true,//en dev, en prod on préfera utiliser les migrations
  logging: true,
  entities: ["src/entities/*.ts"],
});
