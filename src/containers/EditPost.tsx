import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IGetPost } from '../types';
import axiosAPI from '../axiosAPI.ts';
import FormAddNewPost from '../components/FormAddNewPost/FormAddNewPost.tsx';

const EditPost = () => { const params = useParams();
  const initialPost = {
    title: '',
    postMessage:''};
  const [post, setPost] = useState(initialPost);
  const onSubmitEdit = async (e:React.FormEvent) => {
    e.preventDefault();
    if(post.title.trim().length>0 && post.postMessage.length>0) {  const data = {
      post:{...post},
      datetime: new Date().toISOString(),
    };
      await axiosAPI.put('data/' + params.id + '.json', data);
      console.log(data);
      setPost(initialPost);}
    else {
      alert('Fill in all fields');
    }

  };
  const onChangeField = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    const {name, value} = e.target;
    setPost(prevState => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  const [getData, setGetData] = useState<IGetPost>({
    datetime: '',
    post:{
      postMessage: '',
      title: '',
    }
  });



  useEffect(() => {
    const fetchData = (async () => {
      const responseRequest = await axiosAPI<IGetPost>('data/' + params.id + '.json');
      const newResponse = responseRequest.data;
      console.log(newResponse);
      setGetData(newResponse);
      // setGetData((prevState:IDataApi => [...prevState, newResponse]);
    });
    void fetchData();
  }, [params.id]);
  console.log(getData);

  return (
    <div>
      <div>

        <FormAddNewPost titleBtn='delete' postMessage={getData.post.postMessage} title={getData.post.title}
                        onSubmit={onSubmitEdit} onChangeField={onChangeField}/>

      </div>
    </div>
  );
};

export default EditPost;