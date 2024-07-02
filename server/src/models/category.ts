import { DataTypes, Model, Optional, Sequelize } from "sequelize";
import { sequelizeConnection } from "../config/connection";
export interface CategoryAttributes {
   code: string,
         value: string,
         header: string,
         subheader: string,
}
export interface CategoryInput extends Optional<CategoryAttributes, "code"> {}
export   class Category extends Model<CategoryAttributes, CategoryInput> {
   
   }
   Category.init(
      {
         code: DataTypes.STRING,
         value: DataTypes.STRING,
         header: DataTypes.STRING,
         subheader: DataTypes.STRING,
      },
      {
         sequelize:  sequelizeConnection,
         modelName: "Category",
      },
   );
