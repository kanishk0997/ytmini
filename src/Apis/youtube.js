import axios from "axios";


const KEY = 'AIzaSyBgyfW1akiBSyyF2jWxgwRnUZoDPtTnqGQ';

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params:{
  part: 'snippet',
  maxResult: 5,
  key: KEY
  }

});
