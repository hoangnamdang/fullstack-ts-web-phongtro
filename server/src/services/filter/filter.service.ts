import { Acreage, Price } from "../../models"

export const getFilterPrice = () => new Promise(async (resolve, reject) => {
    try {
        const response = await Price.findAll({raw: true, attributes: {exclude: ['createdAt', 'updatedAt']}});
        resolve({
            err: 0,
            msg: "get filter price success",
            data: response
        })
        
    } catch (error) {
        reject(error)
    }
});

export const getFilterAcreage = () => new Promise(async (resolve, reject) => {
    try {
        const response = await Acreage.findAll({raw: true, attributes: {exclude: ['createdAt', 'updatedAt']}});
        resolve({
            err: 0,
            msg: "get filter acreage success",
            data: response
        })
    } catch (error) {
        reject(error)
    }
})