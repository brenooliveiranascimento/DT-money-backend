import "reflect-metadata";
import { DataSource } from "typeorm";
import path = require("path");

export const DtMoneyDataSource = new DataSource({
  type: "sqlite",
  database: path.resolve(__dirname, "./database.sqlite"),
  synchronize: false,
  logging: false,
  entities: [path.resolve(__dirname, "entity", "*{js,.ts}")],
  migrations: [path.resolve(__dirname, "migrations", "*{js,.ts}")],
  subscribers: [],
});
