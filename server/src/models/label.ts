import { DataTypes, Model, Optional } from "sequelize";
import { sequelizeConnection } from "../config/connection";
interface LabelAttributes {
   code: string;
   value: string;
}
export interface LabelInput extends Optional<LabelAttributes, "code"> {}
class Label extends Model<LabelAttributes, LabelInput> {}
Label.init(
   {
      code: DataTypes.STRING,
      value: DataTypes.STRING,
   },
   {
      sequelize: sequelizeConnection,
      modelName: "Label",
   },
);

export default Label;
