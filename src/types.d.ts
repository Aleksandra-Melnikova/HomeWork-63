export interface IPost {
  title: string;
  id: string;
  postMessage: string;
  datetime: string;
}

export interface IGetPost {
  datetime: string;
  post:{
    postMessage: string;
    title: string;
  }
}