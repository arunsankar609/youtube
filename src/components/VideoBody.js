import axios from "axios";
import React, { useEffect, useState } from "react";
import TopButtonList from "./TopButtonList";
import { SEARCH_VIDEO_LIST,Api_Key, Youtube_URL } from "./constants/Constants";
import VideoCards from "./VideoCards";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { openMenu, toggleMenu } from "../store/NavSlice";

const VideoBody = () => {
  const dispatch = useDispatch();
  const videoSearch=useSelector((store=>store.videoLink.videoLin))
  console.log(videoSearch);
  const [videoData, setVideoData] = useState([]);
  useEffect(() => {
   
    SearchVideos()
   
   
  }, [videoSearch]);
  useEffect(() => {
    dispatch(openMenu());
  }, []);
  const getVideos = async () => {
 
    const youtubeData = await axios.get(Youtube_URL);
   
    setVideoData(youtubeData.data.items);
  };
  const SearchVideos=async()=>{
    const videoData=await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${videoSearch}&regionCode=IN&type=video&key=${Api_Key}`);
    setVideoData(videoData.data.items)
    
  }

  return (
        <div>
      <TopButtonList />
      
     
        <div className="flex flex-wrap" >
          {videoData.map((videoData) => (
            <Link  key={videoData.id}  to={"/watch?v="+videoData.id.videoId}>
            <VideoCards video={videoData} />
            </Link>
          ))}
        </div>
     
    </div>
  );
};

export default VideoBody;
