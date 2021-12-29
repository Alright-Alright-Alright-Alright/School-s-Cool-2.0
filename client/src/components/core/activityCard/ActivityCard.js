import React from "react"
import PropTypes from "prop-types"
import Icon from "../Icon"

function ActivityCard({ activity }) {
  return (
    <div className="rounded-bl-2xl rounded-br-2xl rounded-r-2xl bg-white shadow-lg m-3">
      <div className="p-3">
        <img
          className="object-cover w-full max-h-40 rounded-bl-2xl rounded-br-2xl rounded-r-2xl"
          src={activity.topic?.bannerImage}
          alt="banner"
        />
      </div>
      <div>
        <div className="flex justify-between pl-3 pr-3">
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-2"
              src={activity.owner?.imageUrl}
              alt="profile"
            />
            <p className="text-base">
              {activity.owner?.firstName} {activity.owner?.lastName}
            </p>
            <p className="text-base pl-3 text-grey-medium_light">Posted on</p>
            <a href="/" className="text-base pl-3">
              {activity.topic?.title}
            </a>
          </div>
          <div className="flex items-center">
            <p className="text-base">{activity.createdAt}</p>
          </div>
        </div>
      </div>
      <div className="">
        <p className="border-b-2 border-grey-light m-3 pb-3 text-base">
          {activity.body}
        </p>
      </div>
      <div className="flex justify-end items-center pt-1 pr-3 space-x-2">
        <div className="flex">
          <Icon iconName="file" />
          <span>00</span>
        </div>
        <div className="flex">
          <Icon iconName="like" iconStyle="fill-inactive" />
          <span>{activity.likedBy.length}</span>
        </div>
        <div className="flex">
          <Icon iconName="message" />
          <span>{activity.comments.length}</span>
        </div>
      </div>
      <div className="flex p-3">
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
    </div>
  )
}

export default ActivityCard

ActivityCard.defaultProps = {
  activity: {},
}

ActivityCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  activity: PropTypes.object,
}
