/* eslint-disable react/prop-types */
import React from "react"
import PropTypes from "prop-types"
import { LoadingIndicator } from "stream-chat-react"
import Icon from "../Icon"
import UserItem from "./UserItem"

const CustomChatList = ({
  users,
  setSelectedUser,
  handleCloseModal,
  props,
}) => {
  const { children, error, loading, LoadingErrorIndicator } = props

  if (error) {
    return <LoadingErrorIndicator type="connection" />
  }

  if (loading) {
    return <LoadingIndicator />
  }

  return (
    <div>
      <button type="button" onClick={handleCloseModal}>
        <Icon iconName="close" />
      </button>
      <div className=" h-1/2 bg-pink">
        <div className="w-full bg-grey-medium rounded-r-full rounded-bl-full">
          <div className="flex justify-between py-3 text-white">
            <p className="text-lg pl-4"> Current Chats</p>
          </div>
        </div>
        {children}
      </div>
      <div>
        <div className="w-full h-1/2 bg-grey-medium rounded-r-full rounded-bl-full">
          <div className="flex justify-between py-3 text-white">
            <p className="text-lg pl-4"> Other users</p>
          </div>
        </div>
        {users.users.map((user) => (
          <UserItem user={user} setSelectedUser={setSelectedUser} />
        ))}
      </div>
    </div>
  )
}

CustomChatList.propTypes = {
  users: PropTypes.shape.isRequired,
  setSelectedUser: PropTypes.func.isRequired,
  props: PropTypes.shape.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
}

export default CustomChatList
