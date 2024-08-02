import {Attribute, Image, Label, Overview, Post, User} from "../../models"
import QueryString from "qs";
import { hasValue } from "../../utils/commonUtils";
import { Op } from "sequelize";

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
interface IQuerySearchObj {
    [key: string]: { [key: symbol] : string | string[]}
}
export const getAllPostByLimit = (query: QueryString.ParsedQs) => new Promise(async (resolve, reject) => {
    try {
        const {page = 1, limit = 10} = query
        const offset = (Number(page) - 1) * Number(limit);
        const querySearch: IQuerySearchObj = {};
        const minPrice = query.minPrice as string;
        const maxPrice = query.maxPrice as string;
        const minAcreage = query.minAcreage as string;
        const maxAcreage = query.maxAcreage as string;
        const codeCategory = query.codeCategory as string;

        if(await hasValue(minPrice) && await !hasValue(maxPrice)) {
            querySearch.price = {
                [Op.lte] : minPrice
            }
        }
        if(await hasValue(maxPrice) && await !hasValue(minPrice)) {
            querySearch.price = {
                [Op.gte] : maxPrice
            }
        }
        if(await hasValue(minPrice) && await hasValue(maxPrice)) {
            querySearch.price = {
                [Op.between] : [minPrice, maxPrice]
            }
        }
        if(await hasValue(minAcreage) && await !hasValue(maxAcreage)) {
            querySearch.acreage = {
                [Op.lte] : minAcreage
            }
        }
        if(await hasValue(maxAcreage) && await !hasValue(minAcreage)) {
            querySearch.acreage = {
                [Op.gte] : maxAcreage
            }
        }
        if(await hasValue(minAcreage) && await hasValue(maxAcreage)) {
            querySearch.acreage = {
                [Op.between] : [minAcreage, maxAcreage]
            }
        }
        if(await hasValue(codeCategory)) {
            querySearch.categoryCode = {
                [Op.eq] : codeCategory
            }
        }

        const response = await Post.findAndCountAll({raw: true, nest: true, limit: Number(limit), offset: offset, include: [{model: Image, attributes: ['image']}, {model: Attribute, attributes: {exclude: ['createdAt', 'updatedAt','id']}}, {model: User, attributes: {exclude: ['createdAt', 'updatedAt', 'password', 'id']}}], attributes: ['id', "title", "star", "labelCode", "address", "categoryCode", "description", "acreage", "price"], where: {...querySearch}})
        
        resolve({
            err: 0,
            msg: "get all post success",
            data: response
        })
    } catch (error) {
        reject(error)
    }
})

export const getLatedPost = (query: QueryString.ParsedQs) => new Promise(async (resolve, reject) => {
try {
    const limit = Number(query?.limit) || 10;
    const response = await Post.findAll({raw: true,nest: true, limit:limit, order: [
        ['createdAt', 'DESC']], include: [{model: Image, attributes: ['image']}], attributes: ['id', 'title', 'price', "createdAt"] })
    resolve({
        err: 0,
        msg: "get lated post success",
        data: response
    })
} catch (error) {
    reject(error);
}
})

export const getPost = (idPost: string) => new Promise(async (resolve, reject) => {
    try {
        const response = await Post.findOne({raw: true,nest: true, where: {id: idPost}, include: [
            {model: Image, attributes: ['image']}, 
            {model: Attribute, attributes: {exclude: ['createdAt', 'updatedAt','id']}}, {model: User, attributes: {exclude: ['createdAt', 'updatedAt', 'password', 'id']}},
            {model: Overview, attributes: {exclude: ['createdAt', 'updatedAt']}},
            {model: Label, attributes: ['code', 'value']}
        ]
        })
        resolve({
            err: 0,
            msg: "get post success",
            data: response
        })
    } catch (error) {
        reject(error);
    }
    })