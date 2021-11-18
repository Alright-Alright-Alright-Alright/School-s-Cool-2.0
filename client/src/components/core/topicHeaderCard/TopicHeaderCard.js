import React from "react"
import Button from "../Button"
import Icon from "../Icon"

function TopicHeaderCard() {
  return (
    <div className="rounded-bl-2xl rounded-br-2xl rounded-r-2xl bg-white shadow-lg m-3">
      <div className="flex justify-between p-3">
        <img
          className="w-10 h-10 rounded-full mr-2"
          src="https://via.placeholder.com/30x30"
          alt="profile"
        />
        <input
          className="bg-grey-super_light w-full rounded-full text-base pl-3"
          type="text"
          placeholder="Add a comment"
        />
      </div>

      <div className="flex justify-between p-3">
        <div className="flex items-center">
          <button type="button">
            <Icon iconName="add" iconStyle="fill-inactive text-aqua" />
          </button>
          <p className="pl-3">Add a resource</p>
        </div>
        <Button buttonName="Add post to topic" btnPrimary />
      </div>
    </div>
  )
}

export default TopicHeaderCard
