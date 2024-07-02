export interface InputAuth {
    name: string,
    phone: string,
    password: string,
}

export interface IResponse {
    err: number | null,
    msg: string
}

export interface DataAuth extends IResponse {
    token: string | null,
    isLoggedIn: boolean
}