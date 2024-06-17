const YT_API_KEY = 'AIzaSyBhfob3qAKYBIB1WI-OkcZLyRhrK99vCk0';
export const YT_VIDEOLIST_API = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&regionCode=IN&chart=mostPopular&key='+YT_API_KEY ;
export const YT_CHANNELDETAIL_API = 'https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key='+YT_API_KEY
export const YT_SINGLEVIDEO_API = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key='+YT_API_KEY
export const YT_COMMENT_API = 'https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=5&key='+YT_API_KEY
export const YT_SEARCH_API = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&key=AIzaSyBhfob3qAKYBIB1WI-OkcZLyRhrK99vCk0&q='