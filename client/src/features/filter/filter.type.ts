export interface IFilterPrice {
    id: string;
    minPrice: number;
    maxPrice: number;
    value: string;
}

export interface IFilterAcreage {
    id: string;
    minAcreage: number;
    maxAcreage: number,
    value: string;
}


export interface IFilter {
    listPrice : IFilterPrice[];
    listAcreage : IFilterAcreage[];
}