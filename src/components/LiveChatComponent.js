import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChat } from "../store/ChatSlice";
import ChatMessages from "./ChatMessages";
import {nameList,makeComments} from "./helpers/helpers";
const LiveChatComponent = () => {
  const [messageLive, setMessageLive] = useState("");
  const dispatch = useDispatch();
  const lMessages = useSelector((store) => store.chat.messages);

  console.log("Live", lMessages);
  useEffect(() => {
    const i = setInterval(() => {
      console.log("Arun Pro");
      dispatch(getChat({ name: nameList(), message: makeComments(25) }));
    }, 2000);
    return () => {
      clearInterval(i);
    };
  }, []);
  return (
    <>
      <div className="ml-2  border  border-black rounded-md h-[490px]  overflow-y-auto flex flex-col-reverse ">
        {lMessages.map((msg, index) => (
          <ChatMessages key={index} name={msg.name} message={msg.message} />
        ))}
      </div>
      <form
        className=" m-1 w-full flex"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(getChat({ name: "Arun Sankar", message: messageLive }));
          setMessageLive("");
        }}
      >
        <input
          type="text"
          placeholder="Add Message..."
          className="border border-gray-600 w-full ml-1 rounded-xl h-8 "
          value={messageLive}
          onChange={(e) => setMessageLive(e.target.value)}
        />
        <img
          className="w-9 hover:bg-gray-700 cursor-pointer"
          alt="send"
          src="https://flyclipart.com/thumb2/send-queue-send-icon-with-png-and-vector-format-for-free-288937.png"
          onClick={() => {
            dispatch(getChat({ name: nameList(), message: messageLive }));
            setMessageLive("");
          }}
        />
      </form>
    </>
  );
};

export default LiveChatComponent;
