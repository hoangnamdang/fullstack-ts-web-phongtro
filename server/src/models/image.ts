import { DataTypes, InferAttributes, InferCreationAttributes, Model, Optional } from "sequelize";
import { sequelizeConnection } from "../config/connection";
interface ImageModel extends Model<InferAttributes<ImageModel>, InferCreationAttributes<ImageModel>> {
  // Some fields are optional when calling UserModel.create() or UserModel.build()
  id: string;
  image: string;
}

const ImageModel = sequelizeConnection.define<ImageModel>('Image', {
  id: {
    primaryKey: true,
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.STRING,
  },
});

export default ImageModel;