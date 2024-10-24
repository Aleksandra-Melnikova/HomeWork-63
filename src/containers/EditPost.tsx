import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IGetPost, IPostForm } from '../types';
import axiosAPI from '../axiosAPI.ts';
import FormAddNewPost from '../components/FormAddNewPost/FormAddNewPost.tsx';

function Spinner() {
  return null;
}

const EditPost = () => {
  const [post, setPost] = useState<IPostForm>();
  const params = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const fetchOnePost= useCallback(async (id:string) => {
    try{
      setLoading(true);
      const response: { data: IGetPost } = await axiosAPI<IGetPost>('data/' + id + '.json');
      console.log(response.data);

      if (response.data){
        const obj:IPostForm = {
          title: response.data.post.title,
          postMessage: response.data.post.postMessage,
        };
        setPost(obj);
      }

    }
    catch (e) {
      console.error(e);
    }
    finally {
      setLoading(false);
    }
  },[]);


  useEffect(() => {
    if (params.id){
      void fetchOnePost(params.id);
    }
    console.log(params.id);
  }, [params.id,fetchOnePost]);
  console.log(post);


  const submitForm = async (post:IGetPost)=>{
    try{
      if(params.id){
        setLoading(true);
        await axiosAPI.put('data/' + params.id + '.json', {...post});
        navigate('/');
      }
    }
    catch (e){
console.error(e);
    }
    finally {
      setLoading(false);
    }


  };


  return (
    <>
      {loading ? <Spinner/>:
        <>
      {post? <><FormAddNewPost submitForm={submitForm} formToOnePost={post} title='Edit'/></>:null}
        </>
      }
        </>
  );
};

export default EditPost;