// eslint-disable-next-line no-unused-vars
import React, { useState } from "react"
import PropTypes from "prop-types"
import { useSelector } from "react-redux"
import Button from "../Button"
import Icon from "../Icon"

function TopicHeaderCard({ onClick, postBody }) {
  const user = useSelector((state) => state.user)

  return (
    <div className="rounded-bl-2xl rounded-br-2xl rounded-r-2xl bg-white shadow-lg m-3">
      <div className="flex justify-between p-3">
        <img
          className="w-10 h-10 rounded-full mr-2"
          src={`${user?.imageUrl}`}
          alt="profile"
        />
        <input
          className="bg-grey-super_light w-full rounded-full text-base pl-3"
          type="text"
          placeholder="Add a post"
          onChange={(e) => postBody(e.target.value)}
          required
        />
      </div>

      <div className="flex justify-between p-3">
        <div className="flex items-center">
          <button type="button">
            <Icon iconName="add" iconStyle="fill-inactive text-aqua" />
          </button>
          <p className="pl-3">Add a resource</p>
        </div>
        <Button
          buttonName="Add post to topic"
          buttonStyle="btnTopicStyle"
          buttonSubmit
          onClick={onClick}
        />
      </div>
    </div>
  )
}

TopicHeaderCard.propTypes = {
  onClick: PropTypes.func.isRequired,
  postBody: PropTypes.func.isRequired,
}

export default TopicHeaderCard
