export interface IPost {
  title: string;
  id: string;
  postMessage: string;
  datetime: string;
}

export interface IGetPost {
  datetime: string;
  post: {
    postMessage: string;
    title: string;
  };
}

export interface IPostMutation {
  title: string;
  id: string;
  datetime: string;
}

export interface IPostForm {
  title: string;
  postMessage: string;
}
export interface IFullPost {
  title: string;
  postMessage: string;
  datetime: string;
}
