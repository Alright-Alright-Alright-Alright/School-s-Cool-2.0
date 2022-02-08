/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react"
import PropTypes from "prop-types"
import { Avatar } from "stream-chat-react"

function UserItem({ user, createChannel }) {
  return (
    <button
      type="button"
      onClick={() => createChannel(user)}
      className="flex pt-3 items-center"
    >
      <div>
        <Avatar image={user.image} name={user.name || user.id} size={32} />
        <img src="" alt="" />
      </div>
      <div className="flex items-center ">
        <p className=" text-base">{user.name}</p>
      </div>
    </button>
  )
}

UserItem.propTypes = {
  user: PropTypes.shape.isRequired,
  createChannel: PropTypes.func.isRequired,
}

export default UserItem
