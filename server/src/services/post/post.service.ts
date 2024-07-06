import {Attribute, Image, Post, User} from "../../models"

export const getAllPost = () => new Promise(async (resolve, reject) => {
    try {
        const response = await Post.findAll({raw: true, nest: true, include: [{model: Image, attributes: ['image']}, {model: Attribute, attributes: {exclude: ['createdAt', 'updatedAt','id']}}, {model: User, attributes: {exclude: ['createdAt', 'updatedAt', 'password', 'id']}}], attributes: ['id', "title", "star", "labelCode", "address", "categoryCode", "description"]});
        return resolve({
            err: 0,
            msg: "get all post success",
            data: response
        })
    } catch (error) {
        reject(error)
    }
})