import { sequelizeConnection } from "./../config/connection";
("use strict");
//https://github.com/sequelize/sequelize/issues/9760
//https://sequelize.org/docs/v6/other-topics/typescript/#usage
import {
   Model,
   DataTypes,
   Optional,
} from "sequelize";

export interface UserAttributes {
   id: string,
   name: string,
   password: string,
   phone: string,
   zalo: string,
   avatar: Blob,
   fbUrl: string,
   readonly createdAt: Date,
   readonly updatedAt: Date
}
// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
export interface UserInput extends Optional<UserAttributes, "id" | "avatar" | "createdAt" | "updatedAt" | "zalo" | "fbUrl"> {}

export interface UserOutput extends Required<UserAttributes> {}

class User extends Model<UserAttributes, UserInput> {
   id!: string;
   name!: string;
   password!: string;
   phone!: string;
   zalo!: string;
   avatar!: Blob;
   fbUrl!: string;
   readonly createdAt!: Date;
   readonly updatedAt!: Date;
}

User.init(
   {
      id: {
         type: DataTypes.STRING,
         primaryKey: true
      },
      name: DataTypes.STRING,
      password: DataTypes.STRING,
      phone: DataTypes.STRING,
      zalo: DataTypes.STRING,
      avatar: DataTypes.BLOB("long"),
      fbUrl: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
   },
   { sequelize: sequelizeConnection, modelName: "User" },
);

export default User;
