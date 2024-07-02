import { Request, Response } from "express";
import { authService } from "../../services";
import { IRegister, ILogin } from "../../types";

export const register = async (req: Request, res: Response) => {
    try {
        const data: IRegister = req.body
        console.log("register",data.name, data.password, data.phone);
        
        if(!data.name || !data.phone || !data.password) {
            return res.status(400).json({
                err: -1,
                msg: "missing input"
            })
        }
        const response = await authService.regiser(data)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "fail register "+ error
        })
    }
}

export const login = async (req: Request, res: Response) => {
    try {
        const data: ILogin = req.body;
        const response = await authService.login(data);
        res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "fail login "+ error
        })
    }
}