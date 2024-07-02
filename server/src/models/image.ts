import { DataTypes, Model, Optional } from "sequelize";
import { sequelizeConnection } from "../config/connection";
//defines all the possible attributes of our model
interface ImageAttributes {
   id: string;
   image: string;
   createdAt?: Date;
   updatedAt?: Date;
}
//defines the type of the object passed to Sequelize’s model.create
export interface ImageInput extends Optional<ImageAttributes, "id" | "image"> {}

// defines the returned object from model.create, model.update, and model.findOne
export interface ImageOutput extends Required<ImageAttributes> {}

class Image
   extends Model<ImageAttributes, ImageInput>
{
   public id!: string;
   public image!: string;
   public readonly createdAt!: Date;
   public readonly updatedAt!: Date;
}

Image.init(
   {
      id: {
         type: DataTypes.STRING,
         primaryKey: true
      },
      image: DataTypes.STRING,
   },
   {
      sequelize: sequelizeConnection,
      modelName: "Image",
   },
);
export default Image;
