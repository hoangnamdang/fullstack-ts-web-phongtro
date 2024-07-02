import { DataTypes, Model, Optional } from "sequelize";
import { sequelizeConnection } from "../config/connection";
export interface AttributeAtrributes {
   price:string,
         acreage:string
         published:string
         hashtag: string
}
export interface AttributeInput extends Optional<AttributeAtrributes, "acreage">{}
export   class Attribute extends Model {

   }
   Attribute.init(
      {
         price: DataTypes.STRING,
         acreage: DataTypes.STRING,
         published: DataTypes.STRING,
         hashtag: DataTypes.STRING,
      },
      {
         sequelize: sequelizeConnection,
         modelName: "Attribute",
      },
   );
