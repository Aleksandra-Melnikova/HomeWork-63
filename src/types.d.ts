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

export interface IPostMutation {
  title: string;
  id: string;
  datetime: string;
}
 export interface IDataApi {
  [id: string]: IPost;
 }
 export interface IPostForm {
   title: string,
   postMessage:string
 }