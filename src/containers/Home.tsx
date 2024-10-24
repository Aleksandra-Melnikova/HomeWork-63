import { IPost, IPostMutation } from "../types";
import BlogItems from "../components/BlogItems/BlogItems.tsx";
import { useCallback, useEffect, useState } from "react";
import axiosAPI from "../axiosAPI.ts";
import Spinner from "../components/UI/Spinner/Spinner.tsx";
interface HomeProps {
  onClick: (post: IPostMutation) => void;
  onEdit: (post: IPostMutation) => void;
}

const Home: React.FC<HomeProps> = ({ onClick, onEdit }) => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response: { data: IPost } = await axiosAPI<IPost>("data.json");
      if (response) {
        const postResponse = response.data;
        const postResponseNew = Object.entries(postResponse);
        const array: IPost[] = [];
        for (let i = 0; i < postResponseNew.length; i++) {
          const obj: IPost = {
            id: postResponseNew[i][0],
            title: postResponseNew[i][1].post.title,
            postMessage: postResponseNew[i][1].post.postMessage,
            datetime: postResponseNew[i][1].datetime,
          };

          array.push(obj);
        }

        setPosts([...array]);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchData();
  }, [fetchData]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {posts.length > 0 ? (
            <BlogItems onEdit={onEdit} posts={posts} onClick={onClick} />
          ) : (
            <div className="container text-center fs-3 m-auto">
              There are no posts yet, add a new one, tell us what new happened
              to you.
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Home;
