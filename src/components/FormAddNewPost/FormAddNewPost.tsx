import React, {useState } from 'react';
import axiosAPI from '../../axiosAPI.ts';

const FormAddNewPost = () => {

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
<div className='form-add-new-post p-5 border border-black-200 rounded-3 fs-5'>


      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor='title' className='form-label'> Title</label>
          <input className="mb-3 form-control"
                 id='title'
                 name="title"
                 type="text"
                 placeholder="Title"
                 value={post.title}
                 onChange={onChangeField}
                 required
          />

        </div>
        <div className="mb-3 col">
          <label  htmlFor='postMessage' className='form-label d-block'>Text of post:</label>
          <textarea className='text-area mt-2 border border-black-200 rounded-3'
            id='postMessage'
            name="postMessage"
                    value={post.postMessage}
                    onChange={onChangeField}
                    required
          />
        </div>
        <button className="ps-4 pe-4 btn btn-dark" type="submit">
          Save
        </button>
        {" "}
      </form>
</div>

  );
};

export default FormAddNewPost;
