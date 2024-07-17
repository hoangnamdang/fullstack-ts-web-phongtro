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

export const insertPrice = async (req: Request, res: Response) => {
    try {
      const response = await insertService.insertPrice();
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({
        status: -1,
        msg: "fail insert price " + error,
      });
    }
  };
  
  export const insertAcreage = async (req: Request, res: Response) => {
    try {
      const response = await insertService.insertAcreage();
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({
        status: -1,
        msg: "fail insert acreage " + error,
      });
    }
  };