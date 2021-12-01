/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import Dashcard from "../../core/dashcard/Dashcard"

function TopicContentLeft({ topic }) {
  const { bannerImage, title, description, isPrivate, resources, owner } = topic
  return (
    <div className="flex flex-col place-items-end">
      <div className="p-3">
        <img
          className="rounded-r-3xl rounded-b-3xl object-cover h-48 w-full"
          src={`${bannerImage}`}
          alt="placeholder"
          width="400"
        />
        <div className="p-3 flex-col  place-items-end content-end max-w-xs">
          <h1 className="text-xl pb-2">{title}</h1>
          <p className="text-lg pb-2">Schoolwork: Math</p>
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
              {/* <p className="text-base pl-3 text-grey-medium_light">
              Commented on
            </p>
            <a href="/" className="text-base pl-3">
              Topic name
            </a> */}
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
