import { DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model, Optional } from "sequelize";
import { sequelizeConnection } from "../config/connection";
export interface PostAttributes {
   id: string;
   title: string;
   star: string;
   labelCode: string;
   address: string;
   attributesId: string;
   categoryCode: string;
   description: string;
   userId: string;
   overviewId: string;
   imagesId: string;
}

export interface PostInput extends Optional<PostAttributes, "id"> {}

interface PostModel extends Model<InferAttributes<PostModel>, InferCreationAttributes<PostModel>> {
   // Some fields are optional when calling UserModel.create() or UserModel.build()
   id: string;
   title: string;
   star: string;
   labelCode: string;
   address: string;
   attributesId: string;
   categoryCode: string;
   description: string;
   userId: string;
   overviewId: string;
   imagesId: string;
 }
 
 const PostModel = sequelizeConnection.define<PostModel>('Post', {
   id: {
     primaryKey: true,
     type: DataTypes.STRING,
   },
   title: DataTypes.STRING,
   star: DataTypes.STRING,
   labelCode: DataTypes.STRING,
   address: DataTypes.STRING,
   attributesId: DataTypes.STRING,
   categoryCode: DataTypes.STRING,
   description: DataTypes.TEXT,
   userId: DataTypes.STRING,
   overviewId: DataTypes.STRING,
   imagesId: DataTypes.STRING,
 });

export default PostModel;