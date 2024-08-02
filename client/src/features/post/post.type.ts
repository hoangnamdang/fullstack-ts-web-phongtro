export interface Post {
  id: string;
  title: string;
  star: string;
  labelCode: string;
  address: string;
  categoryCode: string;
  description: string;
  price: string;
  acreage: string;
  Image: { image: string };
  Attribute: {
    published: string;
    hashtag: string;
  };
  User: {
    name: string;
    phone: string;
    zalo: string;
    avatar: string;
    fbUrl: string;
  };
}

export interface IDetailPost extends Post {
  Overview: {
    area: string;
    bonus: string;
    code: string;
    created: string;
    expired: string;
    id: string;
    target: string;
    type: string;
  };
  Label: {
    code: string;
    value: string;
  };
}

export interface ILatedPost {
  id: string;
  title: string;
  price: number;
  createdAt: string;
  Image: { image: string };
}

export interface IPostState {
  dataPosts: {
    count: number;
    listPost: Post[];
    totalPage: number;
  };
  latedPost: ILatedPost[];
}

export interface IPostQuery {
  limit: string;
}
