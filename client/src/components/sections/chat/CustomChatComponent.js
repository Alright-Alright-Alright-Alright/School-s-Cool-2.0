/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useState } from "react"
import { useSelector } from "react-redux"
import Button from "../../core/Button"

function CustomChatComponent({ messages }) {
  const [showChannels, setShowChannels] = useState(false)
  const users = useSelector((state) => state.user.users.users)

  const handleSetChat = (user) => {
    setShowChannels(false)
    console.log(user)
  }

  const userList = users.map((user) => (
    <li key={user._id}>
      <button
        className=" w-full"
        type="button"
        onClick={() => handleSetChat(user._id)}
      >
        <div className="flex justify-start items-center pt-1 hover:bg-grey-medium_light w-full rounded-xl ">
          <img
            src={user.imageUrl}
            alt={user.firstName}
            className=" w-12 h-12 object-cover rounded-full"
          />
          <p className="pl-3">
            {user.firstName} {user.lastName}
          </p>
        </div>
      </button>
    </li>
  ))

  console.log(messages)
  return (
    <div className="flex flex-col w-full   right-1 pl-2">
      <div className="flex w-full py-1 justify-between">
        <Button
          onClick={() => setShowChannels(!showChannels)}
          buttonName="Show Channels"
          buttonStyle="btnSecondaryStyle"
        />
        <Button
          onClick={() => setShowChannels(!showChannels)}
          buttonName="Show Chat"
          buttonStyle="btnPrimaryStyle"
        />
      </div>
      {showChannels && (
        <div className="flex-col w-full ">
          <h2>Channels</h2>
          <ul>{userList}</ul>
        </div>
      )}
    </div>
  )
}

export default CustomChatComponent
