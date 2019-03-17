import axios from "axios";

const KEY = "AIzaSyBU5pPhB-AmcM5uICni8wFbgwmWDOwvuwM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResulats: 5,
    chart: "mostPopular",
    reginCode: "AU",
    key: KEY
  }
});
