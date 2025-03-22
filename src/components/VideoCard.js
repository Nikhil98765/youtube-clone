import React from 'react'

export const VideoCard = ({ info }) => {
  
  if (!info) return null;

  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails } = snippet;
  const { viewCount } = statistics;
  
  return (
    <div className="w-[380px] p-1 m-2 cursor-pointer">
      <img className="rounded-xl" src={thumbnails.medium.url} alt={title} />
      <ul className="py-2 px-4">
        <li className="font-bold max-h-[50px] text-ellipsis line-clamp-2">{title}</li>
        <li className="pt-2 text-gray-500">{channelTitle}</li>
        <li className="text-gray-500">
          {Intl.NumberFormat('en', { notation: 'compact' }).format(viewCount) + ' views'}
        </li>
      </ul>
    </div>
  );
}

//  Higher order component
export const AdVideoCard = (VideoCmp) => {
  return ({info}) => {
    return (
      <div className="border-gray-400 border-[1px]">
        <VideoCmp info={info} />
      </div>
    );
  }
}
