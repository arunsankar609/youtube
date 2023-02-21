import axios from "axios";
import React, { useEffect, useState } from "react";
import TopButtonList from "./TopButtonList";
import { Youtube_URL } from "./constants/Constants";
import VideoCards from "./VideoCards";
import { Link } from "react-router-dom";

const VideoBody = () => {
 
  const [videoData, setVideoData] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
 
    const youtubeData = await axios.get(Youtube_URL);
   
    setVideoData(youtubeData.data.items);
  };

  return (
        <div>
      <TopButtonList />
      
     
        <div className="flex flex-wrap" >
          {videoData.map((videoData) => (
            <Link  key={videoData.id}  to={"/watch?v="+videoData.id}>
            <VideoCards video={videoData} />
            </Link>
          ))}
        </div>
     
    </div>
  );
};

export default VideoBody;
