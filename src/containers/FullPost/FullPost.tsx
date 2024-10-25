import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import axiosAPI from "../../axiosAPI.ts";
import { IFullPost, IGetPost } from "../../types";

const FullPost = () => {
  const params = useParams();

  const [post, setPost] = useState<IFullPost>();
  const fetchOnePost = useCallback(async (id: string) => {
    const response: { data: IGetPost } = await axiosAPI<IGetPost>(
      "data/" + id + ".json",
    );

    if (response.data) {
      const obj: IFullPost = {
        title: response.data.post.title,
        postMessage: response.data.post.postMessage,
        datetime: response.data.datetime,
      };
      setPost(obj);
    }
  }, []);

  useEffect(() => {
    if (params.id) {
      void fetchOnePost(params.id);
    }
  }, [params.id, fetchOnePost]);
  const navigateHome = useNavigate();

  const deletePost = async () => {
    if (params.id) {
      await axiosAPI.delete("data/" + params.id + ".json");
      navigateHome("/");
    }
  };

  return (
    <div>
      <div className="container mx-auto mt-5 p-4 border border-1 border-secondary rounded-2">
        <h3 className="fs-2 text-dark-emphasis">Title: {post?.title}</h3>
        <span className="d-block mt-2 fs-4 text-dark-emphasis">
          <strong className="me-2 text-dark-emphasis">Created on:</strong>{" "}
          {post?.datetime}
        </span>
        <p className="d-block mt-2 fs-4 text-dark-emphasis">
          <strong className="me-2">Text of post:</strong>
          {post?.postMessage}
        </p>
        <button
          className="btn btn-secondary d-block mx-auto mt-4"
          type="button"
          onClick={deletePost}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default FullPost;
