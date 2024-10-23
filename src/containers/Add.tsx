
import FormAddNewPost from '../components/FormAddNewPost/FormAddNewPost.tsx';
import React, { useState } from 'react';
import axiosAPI from '../axiosAPI.ts';

const Add = () => {
  const initialPost = {
    title: '',
    postMessage:''};
  const [post, setPost] = useState(initialPost);
  const onSubmit = async (e:React.FormEvent) => {
    e.preventDefault();
    if(post.title.trim().length>0 && post.postMessage.length>0) {  const data = {
      post:{...post},
      datetime: new Date().toISOString(),
    };
      await axiosAPI.post('data.json', data);
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
  return (
    <div>
      <h2 className='mt-4'>Add new post</h2>
      <FormAddNewPost titleBtn='add' onSubmit={(e)=>onSubmit(e)} onChangeField={(e)=>onChangeField(e)} postMessage={post.postMessage} title={post.title} />
    </div>
  );
};

export default Add;