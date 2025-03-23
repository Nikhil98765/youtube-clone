import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { hideSideBar } from '../store/appSlice';
import { VIDEO_URL } from '../utils/constants';
import { CommentsContainer } from './CommentsContainer';

export const WatchPage = () => {

  const [videoDetails, setVideoDetails] = useState(null);
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  const videoId = params.get('v');

  const fetchVideo = async () => {
    const response = await fetch(VIDEO_URL`${videoId}`);
    const json = await response.json();
    setVideoDetails(json.items[0]);
  }

  useEffect(() => {
    dispatch(hideSideBar());
    fetchVideo();
  }, []);

  return (
    <div className="col-span-10 p-4 mx-20">
      <iframe
        width="1300"
        height="700"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <div className='mt-4'>
        <h1 className='font-bold text-xl'>{videoDetails?.snippet?.title}</h1>
      </div>
      <div>
        <CommentsContainer />
      </div>
    </div>
  );
}
