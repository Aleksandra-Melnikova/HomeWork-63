
import FormAddNewPost from '../components/FormAddNewPost/FormAddNewPost.tsx';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axiosAPI from '../axiosAPI.ts';
import { IGetPost } from '../types';

const FullPost = () => {
  const params = useParams();
  const [getData, setGetData] = useState<IGetPost>({
    datetime: '',
    post:{
      postMessage: '',
      title: '',
    }
  });




  useEffect(() => {
    const fetchData = (async () => {
      const responseRequest = await axiosAPI<IGetPost>('data/' + params.id + '.json');
      const newResponse = responseRequest.data;
      console.log(newResponse);
      setGetData(newResponse);
      // setGetData((prevState:IDataApi => [...prevState, newResponse]);
    });
    void fetchData();
  }, [params.id]);
  console.log(getData);

  const onSubmit = async (e:React.FormEvent) => {
    e.preventDefault();
      await axiosAPI.delete('data/' + params.id + '.json');
      setGetData({
        datetime: '',
        post: {
          postMessage: '',
          title: '',
        }});

  };

  return (
    <div>
      <div>

        <FormAddNewPost titleBtn='delete' postMessage={getData.post.postMessage} title={getData.post.title}
                        onSubmit={onSubmit}/>

      </div>
    </div>
  );
};

export default FullPost;