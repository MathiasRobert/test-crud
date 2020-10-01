import { Sequelize } from "sequelize-typescript";
import { Product } from "../models/product";

const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];

export let sequelize: Sequelize;
if (process.env.DATABASE_URL) {
  // the application is executed on Heroku ... use the postgres         database
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    protocol: "postgres",
    port: 5432,
    host:
      "postgres://fbuerfllxlgefc:4be68ae7ec2fb4197c12e071804012dae3aa1b0e4eae51ec241de07bab521315@ec2-54-90-68-208.compute-1.amazonaws.com:5432/d5h8bn8r58ebtc",
    logging: true, //false
  });
} else {
  sequelize = new Sequelize({
    database: config.database,
    dialect: config.dialect,
    username: config.username,
    password: config.password,
    models: [Product],
  });
}

export const initDb = () => {
  // Uncomment force: true to reset DB
  sequelize.sync({
    // force: true,
  });
  console.log(`🚀 DB ${config.database} initialised`);
};
