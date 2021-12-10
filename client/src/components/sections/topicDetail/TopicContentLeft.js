/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import Dashcard from "../../core/dashcard/Dashcard"

function TopicContentLeft({ topic }) {
  const {
    title,
    description,
    category,
    subject,
    bannerImage,
    isPrivate,
    resources,
    owner,
  } = topic

  return (
    <div className="flex flex-col justify-end items-end content-end ">
      <div className="p-3">
        <img
          className="rounded-r-3xl rounded-b-3xl object-cover h-72 max-w-xs"
          src={`${bannerImage}`}
          alt="placeholder"
          width="400"
        />
        <div className="p-3 flex-col  place-items-end content-end max-w-xs">
          <h1 className="text-xl pb-2">{title}</h1>
          <p className="text-lg pb-2">
            {category}: {subject}
          </p>
          <p className="text-sm">{description} </p>
        </div>
        <div className="place-items-end">
          <Dashcard
            dashCardTitle="Resources"
            dashCardStyle="bg-aqua"
            dashCardData={resources}
          />
        </div>
        <div className="p-3 w-full">
          <p>{isPrivate ? "Private" : "Public"} topic created by </p>
          <Link to={`/profile/${owner?._id}`}>
            <div className="flex items-center py-3">
              <img
                className="w-10 h-10 rounded-full mr-2"
                src={`${owner?.imageUrl}`}
                alt="profile"
              />
              <p className="text-base">
                {owner?.firstName} {owner?.lastName}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

TopicContentLeft.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  topic: PropTypes.object.isRequired,
}

export default TopicContentLeft
