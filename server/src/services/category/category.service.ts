import { Category } from "../../models/category";

export const getCategory = () => new Promise(async (resolve, reject) => {
    try {
        const response = await Category.findAll();
        console.log(response);
        
        return resolve({
            err: 0,
            msg: "get category success",
            data: response
        })
    } catch (error) {
        reject(error);
    }
})