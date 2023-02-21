
import React from "react";

const VideoCards =  (props) => {
    

  return (
    <div className="p-2 m-3 w-[320px] cursor-pointer">
     <div><img className="rounded-lg" alt="img" src={props.video?.snippet?.thumbnails?.medium?.url}/></div>
     <div><h1 className="font-semibold">{props.video?.snippet?.title}</h1></div>
     <div><h1 className="font-semibold">{props.video?.snippet?.channelTitle}</h1></div>
     <div className="flex">
        <div><h1>{props.video?.statistics?.viewCount} <span className="font-thin">Views</span> </h1></div>
        <div className="mx-2"><h1>{props.video?.statistics?.likeCount} Likes</h1></div>
     </div>
    </div>
  );
};

export default VideoCards;
