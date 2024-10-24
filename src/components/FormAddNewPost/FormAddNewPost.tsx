import React, { useEffect, useState } from 'react';
import { IGetPost, IPostForm } from '../../types';
const initialForm = {
  title: '',
  postMessage:''};

interface IFormAddNewPost {
  title: string,
  formToOnePost?: IPostForm,
  submitForm: (post: IGetPost) => void,
}

const FormAddNewPost:React.FC<IFormAddNewPost> = ({title ,formToOnePost,submitForm}) => {



  const [form, setForm] = useState<IPostForm>({...initialForm});

  useEffect(() => {
    if(formToOnePost){
      setForm(prevState => ({
        ...prevState,
        ...formToOnePost
      }));
    }
  }, [formToOnePost]);


  const onSubmit = async (e:React.FormEvent) => {
    e.preventDefault();


    if(form.title.trim().length>0 && form.postMessage.length>0) {
      const data = {
        post:{...form},
        datetime: new Date().toISOString(),
      };
      submitForm(
        data
      );

      if(!formToOnePost){
        setForm({...initialForm});
      }


      }
    else {
      alert('Fill in all fields');
    }


  };
  const onChangeField = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    const {name, value} = e.target;
    setForm(prevState => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  return (
    <>
    {title === 'Add' || title === 'Edit' ? <h2 className='text-center mt-3'>{title+ ' post'}</h2>: null}
<div className='form-add-new-post p-5 border border-black-200 rounded-3 fs-5 mt-5'>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor='title' className='form-label'> Title</label>
          <input className="mb-3 form-control"
                 id='title'
                 name="title"
                 type="text"
                 placeholder="Title"
                 value={form.title}
                 onChange={onChangeField}
                 required
          />

        </div>
        <div className="mb-3 col">
          <label  htmlFor='postMessage' className='form-label d-block'>Text of post:</label>
          <textarea className='text-area mt-2 border border-black-200 rounded-3'
            id='postMessage'
            name="postMessage"
                    value={form.postMessage}
                    onChange={onChangeField}
                    required
          />
        </div>
        <button className="ps-4 pe-4 btn btn-dark" type="submit">
          {title}
        </button>
        {" "}
      </form>
</div></>

  );
};

export default FormAddNewPost;
