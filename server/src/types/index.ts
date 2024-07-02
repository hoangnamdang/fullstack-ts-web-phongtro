export interface ILogin {
    phone: string,
    password: string,
}

export interface IRegister {
    name: string,
    password: string,
    phone: string
}


export interface IResponse {
    err: number,
    msg: string,
   
}

export interface IAuthData extends IResponse { 
    token: string | null
}

