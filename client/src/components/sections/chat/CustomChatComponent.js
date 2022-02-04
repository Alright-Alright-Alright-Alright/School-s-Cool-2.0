/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useState } from "react"
import { useSelector } from "react-redux"
import Button from "../../core/Button"
import Icon from "../../core/Icon"

function CustomChatComponent({ messages, handleNewChannel }) {
  const [showChannels, setShowChannels] = useState(false)
  const users = useSelector((state) => state.user.users.users)

  const handleSetChat = (user) => {
    setShowChannels(false)
    handleNewChannel(user)
  }

  const userList = users.map((user) => (
    <div key={user._id}>
      <button
        type="button"
        onClick={() => handleSetChat(user)}
        className="w-full"
      >
        <div className="flex justify-start items-center pt-1 hover:bg-grey-medium_light w-full rounded-full ">
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
    </div>
  ))

  return (
    <div className="flex flex-col justify-items-center ">
      <div className="flex justify-between fixed top-21 ">
        {/* <Icon iconName="collapse" iconStyle="fill-active" /> */}
        <Button
          onClick={() => setShowChannels(!showChannels)}
          buttonName="Show Contacts"
          buttonStyle="btnSecondaryStyle"
        />
      </div>
      {showChannels && (
        <div>
          <div className="flex-col w-full fixed bg-white shadow-xl rounded-2xl lg:right-96 overflow-y-scroll h-full  top-0">
            <h1 className=" text-lg p-3 bg-grey-medium_light w-full">
              Contacts
            </h1>
            <div className="relative pl-3">
              <div>{userList}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CustomChatComponent
