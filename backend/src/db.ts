import { DataSource } from "typeorm";

export default new DataSource({
  type: "postgres",
  host: "db",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "thegoodcorner",
  synchronize: true,
  logging: true,
  entities: ["src/entities/*.ts"],
});
