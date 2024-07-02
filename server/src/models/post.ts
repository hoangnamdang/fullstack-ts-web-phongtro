import { DataTypes, Model, Optional } from "sequelize";
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

export class Post extends Model<PostAttributes, PostInput> {}
Post.init(
   {
      id: {
         type: DataTypes.STRING,
         primaryKey: true
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
   },
   { sequelize: sequelizeConnection, modelName: "Post" },
);
