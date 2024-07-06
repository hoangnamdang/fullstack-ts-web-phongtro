import { Request, Response } from "express";
import { postService } from "../../services";

export const getAllPost = async(req: Request, res: Response) => {
    try {
        const response = await postService.getAllPost();
        res.status(200).json(response)        
    } catch (error) {
        res.status(200).json({
            err: -1,
            msg: "fail to get post" + error
        })
    }
}