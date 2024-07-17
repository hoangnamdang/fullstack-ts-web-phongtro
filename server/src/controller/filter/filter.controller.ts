import { Request, Response } from "express";
import { filterService } from "../../services"

export const getFilterPrice = async (req: Request, res: Response) => {
    try {
        const response = await filterService.getFilterPrice();
        res.status(200).json(response)
    } catch (error) {
        res.status(200).json({
            err: -1,
            msg: "fail to get filter price " + error
        })
    }
}

export const getFilterAcreage = async (req: Request, res: Response) => {
    try {
        const response = await filterService.getFilterAcreage();
        res.status(200).json(response)
    } catch (error) {
        res.status(200).json({
            err: -1,
            msg: "fail to get filter acreage " + error
        })
    }
}