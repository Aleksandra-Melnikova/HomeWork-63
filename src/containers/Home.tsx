import { useCallback, useEffect, useState } from 'react';
import { IPost } from '../types';
import axiosAPI from '../axiosAPI.ts';
import BlogItem from '../components/BlogItem/BlogItem.tsx';


const Home = () => {
  const [posts, setPosts] = useState<IPost[]>([
  ]);

  const fetchData = useCallback(async () => {
    const responseRequest: { data: IPost } = await axiosAPI<IPost>('data.json');
    const countryResponse = responseRequest.data;
    const countryResponseNew = Object.entries(countryResponse);
     const array:IPost[] = [];
    for( let i = 0; i<countryResponseNew.length; i++ ) {
      const obj:IPost = {
        id: countryResponseNew[i][0],
        title: countryResponseNew[i][1].post.title,
        postMessage: countryResponseNew[i][1].post.postMessage,
        datetime: countryResponseNew[i][1].datetime,
      };

      array.push(obj);
    }
    console.log(array);

    setPosts(array); // !!!!!не менять напрямую
  }, []);

  useEffect(() => {
    void fetchData();
  }, [fetchData]);



  return (
    <>
      {posts.length > 0 ? <>{posts.map((post: IPost) => (
        <BlogItem key={post.id} datetime={post.datetime} title={post.title} id={''} postMessage={''}/>
      ))}</> : <div className='container text-center fs-3 m-auto'>
        There are no posts yet, add a new one, tell us what new happened to you.
      </div>}


    </>

  )
    ;
};

export default Home;