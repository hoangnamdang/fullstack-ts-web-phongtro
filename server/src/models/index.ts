import Post from "./post";
import Image from "./image";
import Attribute from "./attribute"
import User from "./user"
import Category from "./category"
import Label from "./label"
import Overview from "./overview"

Post.belongsTo(Image, {foreignKey: "imagesId", targetKey: "id"})
Image.hasOne(Post, {foreignKey: "imagesId"})

Post.belongsTo(Attribute, {foreignKey: "attributesId", targetKey: "id"})
Attribute.hasOne(Post, {foreignKey: "attributesId"})

Post.belongsTo(User, {foreignKey: "userId", targetKey: "id"})
User.hasMany(Post, {foreignKey: "userId"})

export {Post, Image, Attribute, User, Category, Label, Overview}