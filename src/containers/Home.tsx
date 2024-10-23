
import { IPost, IPostMutation } from '../types';
import BlogItems from '../components/BlogItems/BlogItems.tsx';
import { useCallback, useEffect, useState } from 'react';
import axiosAPI from '../axiosAPI.ts';
interface HomeProps {
  onClick: (post:IPostMutation) => void;
  onEdit: (post:IPostMutation) => void;
}


const Home:React.FC<HomeProps> = ({onClick, onEdit}) => {

  const [posts, setPosts] = useState<IPost[]>([
  ]);
  // const params = useParams();
// console.log(params);





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
      {posts.length > 0 ?
        <BlogItems onEdit={onEdit} posts={posts} onClick={onClick} />
       : <div className='container text-center fs-3 m-auto'>
        There are no posts yet, add a new one, tell us what new happened to you.
      </div>}


    </>

  )
    ;
};

export default Home;