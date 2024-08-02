import Post from "./post";
import Image from "./image";
import Attribute from "./attribute"
import User from "./user"
import Category from "./category"
import Label from "./label"
import Overview from "./overview"
import Price from "./price"
import Acreage from "./acreage"

Post.belongsTo(Image, {foreignKey: "imagesId", targetKey: "id"})
Image.hasOne(Post, {foreignKey: "imagesId"})

Post.belongsTo(Attribute, {foreignKey: "attributesId", targetKey: "id"})
Attribute.hasOne(Post, {foreignKey: "attributesId"})

Post.belongsTo(User, {foreignKey: "userId", targetKey: "id"})
User.hasMany(Post, {foreignKey: "userId"})

Post.belongsTo(Overview, {foreignKey: "overviewId", targetKey: "id"})
Overview.hasOne(Post, {foreignKey: "overviewId"})

Post.belongsTo(Label, {foreignKey: "labelCode", targetKey: "code"})
Label.hasOne(Post, {foreignKey: "labelCode"})

export {Post, Image, Attribute, User, Category, Label, Overview, Price, Acreage}