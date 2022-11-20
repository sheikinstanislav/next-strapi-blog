export interface IPost {
  id: number;
  attributes: IPostAttributes;
}

export interface IPostAttributes {
  author: string;
  createdAt: string;
  full_text: string;
  slug: string;
  title: string;
  image: IPostImage;
}

export interface IPostImage {
  data: {
    attributes: {
      url: string;
    };
  };
}

export interface IPostCardInfo {
  date: string;
  text: string;
  slug: string;
  title: string;
  imgUrl: string;
}
