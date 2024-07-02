import { Request, Response } from "express";
import { categoryService } from "../../services";

export const getCategory = async (req: Request, res: Response) => {
  try {
    const response = await categoryService.getCategory();
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).json({
        err: -1,
        msg: "fail get category " + error
    })
  }
}