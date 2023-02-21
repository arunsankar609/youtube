import React from "react";
const commentData = [
  {
    name: "Arun",
    text: "savari giri giri giri",
    reply: [
      {
        name: "Arun",
        text: "savari giri giri giri",
        reply: [ {
          name: "Arun",
          text: "savari giri giri giri",
          reply: [ {
            name: "Arun",
            text: "savari giri giri giri",
            reply: [ {
              name: "Arun",
              text: "savari giri giri giri",
              reply: [],
            },],
          },],
        }, {
          name: "Arun",
          text: "savari giri giri giri",
          reply: [ {
            name: "Arun",
            text: "savari giri giri giri",
            reply: [],
          },],
        },],
      },
      {
        name: "Arun",
        text: "savari giri giri giri",
        reply: [ {
          name: "Arun",
          text: "savari giri giri giri",
          reply: [ {
            name: "Arun",
            text: "savari giri giri giri",
            reply: [],
          },],
        },],
      },
    ],
  },
  {
    name: "Arun",
    text: "savari giri giri giri",
    reply: [ {
      name: "Arun",
      text: "savari giri giri giri",
      reply: [ {
        name: "Arun",
        text: "savari giri giri giri",
        reply: [ {
          name: "Arun",
          text: "savari giri giri giri",
          reply: [],
        },],
      },],
    },],
  },
  {
    name: "Arun",
    text: "savari giri giri giri",
    reply: [],
  },
  {
    name: "Arun",
    text: "savari giri giri giri",
    reply: [],
  },
];
const Commment = ({ data }) => {
  const { name, text, reply } = data;
  return (
    <div className="flex flex-row p-2 bg-gray-100">
      <div>
        <img
          className="w-10"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
      <div className="mx-3">
        <h1 className="font-semibold">Name:{name}</h1>
        <h1>Comment:{text}</h1>
      </div>
    </div>
  );
};
const Commentcomponent = ({ comments }) => {
  return comments?.map((comm,index) => (
        <div>
          <Commment key={index} data={comm} />
          <div className="mx-10 m-2 border border-l-gray-600">
          <Commentcomponent key={index} comments={comm.reply} />
          
         
          </div>
        </div>
      ))
   
  
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold text-2xl">Comments</h1>

      <Commentcomponent comments={commentData} />
    </div>
  );
};

export default CommentsContainer;
