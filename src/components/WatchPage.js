import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../store/NavSlice";
import CommentsContainer from "./CommentsContainer";
import LiveChatComponent from "./LiveChatComponent";

const WatchPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  // const VideoIdS = useSelector((store) => store.videoLink.videoLin);
  let [searchParams] = useSearchParams();

  return (
    <div className=" w-full">
      <div className="p-2 m-2 flex flex-col ">
        <div className="flex  ">
          <div>
            <iframe
              id="player"
              type="text/html"
              className="rounded-xl"
              width="840"
              height="530"
              src={"https://www.youtube.com/embed/" + searchParams.get("v")}
              frameborder="0"
            ></iframe>
          </div>
          <div className="w-full">
            <LiveChatComponent/>
          </div>
        </div>
      </div>
      <div className="w-6/12 ">
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
