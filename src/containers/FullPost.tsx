import FormAddNewPost from "../components/FormAddNewPost/FormAddNewPost.tsx";
import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import axiosAPI from "../axiosAPI.ts";
import { IGetPost, IPostForm } from "../types";

const FullPost = () => {
  const params = useParams();

  const [post, setPost] = useState<IPostForm>();
  const fetchOnePost = useCallback(async (id: string) => {
    const response: { data: IGetPost } = await axiosAPI<IGetPost>(
      "data/" + id + ".json",
    );

    if (response.data) {
      const obj: IPostForm = {
        title: response.data.post.title,
        postMessage: response.data.post.postMessage,
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

  const submitForm = async () => {
    if (params.id) {
      await axiosAPI.delete("data/" + params.id + ".json");
      navigateHome("/");
    }
  };

  return (
    <div>
      <div>
        <FormAddNewPost
          title="delete"
          formToOnePost={post}
          submitForm={submitForm}
        />
      </div>
    </div>
  );
};

export default FullPost;
