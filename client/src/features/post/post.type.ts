export interface Post {
  id: string;
  title: string;
  star: string;
  labelCode: string;
  address: string;
  categoryCode: string;
  description: string;
  Image: { image: string };
  Attribute:  {
    price: string,
    acreage: string,
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
  listPost: Post[];
}
