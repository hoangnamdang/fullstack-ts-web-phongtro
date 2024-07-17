import { CreateOptions, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { sequelizeConnection } from "../config/connection";
interface ImageModel extends Model<InferAttributes<ImageModel>, InferCreationAttributes<ImageModel, {omit: "id"}>> {
  // Some fields are optional when calling UserModel.create() or UserModel.build()
  id: CreateOptions<number>;
  minPrice: number;
  maxPrice: number;
  value: string;
}

const PriceModel = sequelizeConnection.define<ImageModel>('Price', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    minPrice: {
        type: DataTypes.DECIMAL(10, 2)
    },
    maxPrice: {
        type: DataTypes.DECIMAL(10, 2)
    },
    value: {
        type: DataTypes.STRING
    },
});

export default PriceModel;