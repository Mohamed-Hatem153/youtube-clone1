import axios from "axios";
const KEY = "AIzaSyC4L30thGoeWial87chrfR0Uhg0mfKAdQI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
