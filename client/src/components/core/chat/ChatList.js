/* eslint-disable react/prop-types */
import React from "react"
import "./ChatList.css"
// import avatar from "./avatar.png"

export default ({ chats, user }) => (
  <ul>
    {chats.map((chat) => (
      <div key={chat.id} className="flex">
        <div className="w-full">
          <p className="text-base">{chat.message}</p>
        </div>
        <div className=" rounded-full">
          <img
            src={user.imageUrl}
            alt="avatar"
            className="rounded-full h-12 w-12"
          />
          <p className="text-base">{chat.username}</p>
        </div>

        {/* <div className="row show-grid">
          <div className="col-xs-12">
            <div className="chatMessage ">
              <div key={chat.id} className=" bg-grey-super_light">
                <p>
                  <strong>{chat.username}</strong>
                </p>
                <p>{chat.message}</p>
              </div>
              <div className="imageHolder">
                <img
                  src={user.imageUrl}
                  className="img-responsive avatar"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    ))}
  </ul>
)
