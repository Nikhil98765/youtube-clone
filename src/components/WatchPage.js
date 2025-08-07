import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { hideSideBar } from '../store/appSlice';
import { VIDEO_URL } from '../utils/constants';
import { CommentsContainer } from './CommentsContainer';
import LiveChat from "./LiveChat";

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
    <div className="flex flex-col w-full">
      <div className="px-5 flex w-full">
        <div>
          <iframe
            width="1350"
            height="700"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div className="w-full flex justify-center">
          <LiveChat />
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
}
