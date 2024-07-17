import { CreateOptions, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { sequelizeConnection } from "../config/connection";
interface AcreageModel extends Model<InferAttributes<AcreageModel>, InferCreationAttributes<AcreageModel, {omit: "id"}>> {
  // Some fields are optional when calling UserModel.create() or UserModel.build()
  id: CreateOptions<number>;
  minAcreage: number;
  maxAcreage: number;
  value: string;
}

const AcreageModel = sequelizeConnection.define<AcreageModel>('Acreage', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    minAcreage: {
        type: DataTypes.INTEGER
    },
    maxAcreage: {
        type: DataTypes.INTEGER
    },
    value: {
        type: DataTypes.STRING
    },
});

export default AcreageModel;