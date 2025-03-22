import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import { API_URL } from '../utils/constants';
import { AdVideoCard, VideoCard } from './VideoCard';

export const VideoContainer = () => {

  const [videoList, setVideoList] = useState([]);

  const AdVideoCardCmp = AdVideoCard(VideoCard);

  const fetchVideos = async () => { 
    const response = await fetch(API_URL);
    const data = await response.json();
    setVideoList(data.items);
  }

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div className="flex flex-wrap">
      {videoList.map((video, index) => {
        if (index === 0) {
          return (
            <Link key={video.id} to={`/watch?v=${video.id}`}>
              <AdVideoCardCmp info={video} />
            </Link>
          );
        }

        return (
          <Link key={video.id} to={`/watch?v=${video.id}`}>
            <VideoCard info={video} />
          </Link>
        );
        }) 
      }
    </div>
  );
}
