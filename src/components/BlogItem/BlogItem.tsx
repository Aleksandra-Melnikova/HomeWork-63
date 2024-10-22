import React from "react";
import { IPost } from '../../types';



const BlogItem: React.FC<IPost> = ({
  id,
  title,
  datetime,
}) => {
  return (
    <div id={id} className="border bg-light rounded mb-3 p-3 ">
      <div className="mb-3 pb-1">
          <span className="text-dark fs-2 text-start mb-3 d-block">{title}</span>
        <div>
          <strong className='fs-5 text-body fw-light me-2'> Created on: </strong>
          <span className='fs-5 text-body fw-light'>{datetime}</span>
        </div>
      </div>
      <div>
        <button type="button" className="btn btn-secondary d-block btn-read-more text-start px-4 py-2"> Read more</button>
      </div>
    </div>
  );
};

export default BlogItem;
