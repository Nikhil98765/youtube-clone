export const API_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${process.env.REACT_APP_API_KEY}`;

// export const VIDEO_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=${process.env.REACT_APP_API_KEY}`;

export function VIDEO_URL(strings, videoId) {
  return `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${process.env.REACT_APP_API_KEY}`;
}

// export function CHANNEL_URL(String, channelId) {
//  return `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${process.env.REACT_APP_API_KEY}`;
// }

export function YOUTUBE_SEARCH_API(String, query) {
  return `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${query}`;
}
