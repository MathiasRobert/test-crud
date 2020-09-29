import { Sequelize } from "sequelize-typescript";

const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];

export const sequelize = new Sequelize({
  database: config.database,
  dialect: config.dialect,
  username: config.username,
  password: config.password,
  models: [__dirname + "/models"],
});

export const initDb = () => {
  // Uncomment force: true to reset DB
  sequelize.sync({
    // force: true,
  });
  console.log(`🚀 DB ${config.database} initialised`);
};
