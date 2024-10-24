import React from "react";
import { IPostMutation } from "../../types";
import dayjs from "dayjs";
interface IBlogItemProps {
  onClick: (post: IPostMutation) => void;
  posts: IPostMutation[];
  onEdit: (post: IPostMutation) => void;
}

const BlogItems: React.FC<IBlogItemProps> = ({ posts, onClick, onEdit }) => {
  return (
    <>
      <div>
        {posts.map((post: IPostMutation) => (
          <div
            key={post.id}
            id={post.id}
            className="border bg-light rounded mb-3 p-3 blog-item"
          >
            <div className="mb-3 pb-1">
              <span className="text-dark fs-2 text-start mb-3 d-block">
                {post.title}
              </span>
              <div>
                <strong className="fs-5 text-body fw-light me-2">
                  {" "}
                  Created on:{" "}
                </strong>
                <span className="fs-5 text-body fw-light">
                  {dayjs(post.datetime).format("DD/MM/YYYY hh:mm")}
                </span>
              </div>
            </div>
            <div>
              <button
                type="button"
                onClick={() => onClick(post)}
                className="btn btn-secondary d-block btn-read-more text-start px-4 py-2"
              >
                {" "}
                Read more
              </button>
              <button
                className="btn btn-outline-secondary d-block btn-edit"
                type="button"
                onClick={() => onEdit(post)}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogItems;
