import { Sequelize } from "sequelize";
import dotevn from "dotenv";
dotevn.config();
const dbName = process.env.DB_DATABASENAME as string;
const dbUser =   process.env.DB_USERNAME as string;
 const dbPassword = process.env.DB_PASSWORD;
 const dbPort = Number(process.env.DB_PORT);
export const sequelizeConnection = new Sequelize(
   dbName, dbUser, dbPassword,
   {
      host: "localhost",
      port: dbPort,
      dialect: "mysql",
   },
);

const checkConnection = async () => {
   try {
      await sequelizeConnection.authenticate();
      console.log("Connection has been established successfully.");
   } catch (error) {
      console.error("Unable to connect to the database:", error);
   }
};
export default checkConnection;
