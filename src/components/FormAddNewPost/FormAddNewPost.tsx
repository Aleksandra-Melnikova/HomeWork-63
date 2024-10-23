import React from 'react';
interface IFormAddNewPost {
  title: string,
  postMessage: string,
  onChangeField?:(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>void,
  onSubmit: (e:React.FormEvent)=> void,
  titleBtn:string
}

const FormAddNewPost:React.FC<IFormAddNewPost> = ({title, postMessage, onChangeField, onSubmit, titleBtn}) => {



  return (
<div className='form-add-new-post p-5 border border-black-200 rounded-3 fs-5 mt-5'>


      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor='title' className='form-label'> Title</label>
          <input className="mb-3 form-control"
                 id='title'
                 name="title"
                 type="text"
                 placeholder="Title"
                 value={title}
                 onChange={onChangeField}
                 required
          />

        </div>
        <div className="mb-3 col">
          <label  htmlFor='postMessage' className='form-label d-block'>Text of post:</label>
          <textarea className='text-area mt-2 border border-black-200 rounded-3'
            id='postMessage'
            name="postMessage"
                    value={postMessage}
                    onChange={onChangeField}
                    required
          />
        </div>
        <button className="ps-4 pe-4 btn btn-dark" type="submit">
          {titleBtn}
        </button>
        {" "}
      </form>
</div>

  );
};

export default FormAddNewPost;
