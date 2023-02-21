import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChat } from "../store/ChatSlice";
import ChatMessages from "./ChatMessages";

const LiveChatComponent = () => {
 
  const dispatch = useDispatch();
  const lMessages = useSelector((store) => store.chat.messages);


  console.log("Live", lMessages);
  useEffect(() => {
    const i = setInterval(() => {
      console.log("Arun Pro");
      dispatch(getChat({ name: "Pro Arun", message: "Verum pro developer" }));
      
    }, 2000);
    return () => {
      clearInterval(i);
    };
  }, []);
  return (
    <div className="p-1 m-1 ">
     {lMessages.map((msg)=><ChatMessages name={msg.name} message={msg.message} />) }
      
    </div>
  );
};

export default LiveChatComponent;
