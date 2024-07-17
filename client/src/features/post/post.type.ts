export interface Post {
  id: string;
  title: string;
  star: string;
  labelCode: string;
  address: string;
  categoryCode: string;
  description: string;
  price: string,
  acreage: string,
  Image: { image: string };
  Attribute:  {
    published: string,
    hashtag: string};
  User: {
    name: string,
    phone: string,
    zalo: string,
    avatar: string,
    fbUrl: string
  }
}

export interface IPostState {
  dataPosts: {
    count: number,
    listPost: Post[];
    totalPage: number;
  }
}

export interface IPostQuery {
  limit: string
}
