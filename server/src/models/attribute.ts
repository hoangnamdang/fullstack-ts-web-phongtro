import { DataTypes, Model, Optional } from "sequelize";
import { sequelizeConnection } from "../config/connection";
export interface AttributeAttributes {
   published: string;
   hashtag: string;
}
export interface AttributeInput
   extends Optional<AttributeAttributes, "published"> {}
class Attribute extends Model {}
Attribute.init(
   {
      published: DataTypes.STRING,
      hashtag: DataTypes.STRING,
   },
   {
      sequelize: sequelizeConnection,
      modelName: "Attribute",
   },
);
export default Attribute;
