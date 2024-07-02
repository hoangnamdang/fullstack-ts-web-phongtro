import { v4 } from "uuid";
import { User } from "../../models/user";
import { IAuthData, ILogin, IRegister } from "../../types";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const salt = bcrypt.genSaltSync(12);
const hashPassword = (password: string): string => {
   return bcrypt.hashSync(password, salt);
};
export const regiser = (params: IRegister): Promise<IAuthData> =>
   new Promise(async (resolve, reject) => {
      try {

         const response = await User.findOrCreate({
            where: { phone: params.phone },
            defaults: {
               name: params.name,
               password: hashPassword(params.password),
               phone: params.phone,
               id: v4(),
            }
         });
         console.log(response);
         
         const token =
            response[1] &&
            jwt.sign(
               { phone: params.phone, name: params.name },
               process.env.PRIVATE_KEY as string,
               { expiresIn: "2 days" },
            );
         resolve({
            err: token ? 0 : -1,
            msg: token ? "register success" : "phone is used",
            token: token ? token : null,
         });
      } catch (error) {
         reject(error);
      }
   });

export const login = (params: ILogin) =>
   new Promise(async (resolve, reject) => {
      try {
         const response = await User.findOne({
            where: { phone: params.phone },
            raw: true,
         });
         
         if (response === null) {
            return resolve({
               err: -1,
               msg: "not found user",
            });
         } else {
            const comparePassword = bcrypt.compareSync(
               params.password,
               response.password,
            );
            if (comparePassword) {
               const token = jwt.sign(
                  { phone: params.phone },
                  process.env.PRIVATE_KEY as string,
                  { expiresIn: "2 days" },
               );
               resolve({
                  err: 0,
                  msg: "login success",
                  token: token,
               });
            } else {
               return resolve({
                  err: -1,
                  msg: "password is wrong",
               });
            }
         }
      } catch (error) {
         reject(error);
      }
   });
