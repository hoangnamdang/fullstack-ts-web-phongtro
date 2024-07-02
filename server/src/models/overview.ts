import { DataTypes, Model, Optional, CreateOptions } from "sequelize";
import { sequelizeConnection } from "../config/connection";
export interface OverviewAttributes {
   id: string,
   code: string;
   area: string;
   type: string;
   target: string;
   bonus: string;
   created: Date;
   expired: Date;
}
interface OverviewInput extends Optional<OverviewAttributes, "id"> {}
export class Overview extends Model<OverviewAttributes, OverviewInput> {
   declare id: string;
   declare code : string;
   declare area: string;
   declare type: string;
   declare target: string;
   declare bonus: string;
   declare created: Date;
   declare expired: Date;
}
Overview.init(
   {
      id: {
         type: DataTypes.STRING,
         primaryKey: true
      },
      code: DataTypes.STRING,
      area: DataTypes.STRING,
      type: DataTypes.STRING,
      target: DataTypes.STRING,
      bonus: DataTypes.STRING,
      created: DataTypes.DATE,
      expired: DataTypes.DATE,
   },
   {
      sequelize: sequelizeConnection,
      modelName: "Overview",
   },
);
