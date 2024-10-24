import FormAddNewPost from "../components/FormAddNewPost/FormAddNewPost.tsx";
import { IGetPost } from "../types";
import axiosAPI from "../axiosAPI.ts";
import { useState } from "react";
import Spinner from "../components/UI/Spinner/Spinner.tsx";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const submitForm = async (post: IGetPost) => {
    try {
      setLoading(true);
      await axiosAPI.post("data.json", { ...post });
      navigate("/");
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <FormAddNewPost submitForm={submitForm} title="Add" />
      )}
    </>
  );
};

export default Add;
