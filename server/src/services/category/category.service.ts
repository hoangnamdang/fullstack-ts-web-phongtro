import { Category } from "../../models";

export const getCategory = () => new Promise(async (resolve, reject) => {
    try {
        const response = await Category.findAll({raw: true});
        return resolve({
            err: 0,
            msg: "get category success",
            data: response
        })
    } catch (error) {
        reject(error);
    }
})