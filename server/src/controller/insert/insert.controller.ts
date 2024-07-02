import { Request, Response } from "express";
import { insertService } from "../../services";

export const insertData = async (req: Request, res: Response) => {
   try {
    const response = await insertService.insertData();
    return res.status(200).json(response)
   } catch(error) {
    return res.status(500).json({
        error: -1,
        message: "fail insert "+ error 
    })
   }
}