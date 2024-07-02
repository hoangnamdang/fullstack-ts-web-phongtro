export interface Category {
    id: number,
    code: string,
    value: string,
    header: string,
    subheader: string,
    createdAt: Date,
    updatedAt: Date,
}
export interface Categories {
    categories: Category[]
}