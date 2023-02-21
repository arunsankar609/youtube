import React from "react";

const ChatMessages = ({name,message}) => {
  return (
    <div >
      <div className="flex items-center p-1 m-1">
        <img
        className="w-11"
          alt="chat-icon"
          src="https://t3.ftcdn.net/jpg/05/17/79/88/360_F_517798849_WuXhHTpg2djTbfNf0FQAjzFEoluHpnct.jpg"
        />
        <span className="font-bold mx-1">{name}</span>
        <span className="mx-1">{message}</span>
      </div>
    </div>
  );
};

export default ChatMessages;
