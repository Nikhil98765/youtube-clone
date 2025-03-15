import React, { useEffect, useState } from 'react'
import { API_URL } from '../utils/constants';
import { VideoCard } from './VideoCard';

export const VideoContainer = () => {

  const [videoList, setVideoList] = useState([]);

  const fetchVideos = async () => { 
    const response = await fetch(API_URL);
    const data = await response.json();
    setVideoList(data.items);
  }

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div className='flex flex-wrap'>
      {videoList.map((video) => (
        <VideoCard key={video.id} info={video} />
      ))}
    </div>
  );
}
