import React from "react";
interface IPost {
  title: string;
  id: string;
  description: string;
  datetime: string;
}


const BlogItem: React.FC<IPost> = ({
  id,
  title,
  datetime,
}) => {
  return (
    <div id={id} className="border bg-light rounded mb-3 p-3 ">
      <div className="mb-2 pb-1 border-bottom">
        <span>
          <span className="text-primary">{title}</span>
        </span>
        <div>
          <strong> Created on: </strong>
          <span>{datetime}</span>
        </div>
      </div>
      <div className="pb-1">
    <button type='button' className='btn btn-outline-light'> Read more</button>
      </div>
    </div>
  );
};

export default BlogItem;
