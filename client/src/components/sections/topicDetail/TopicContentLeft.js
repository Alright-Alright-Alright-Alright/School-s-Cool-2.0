/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */

import React from "react"
import { Link } from "react-router-dom"
import ResourceDashcard from "../../core/resourceDashCard/ResourceDashcard"
import data from "../../../data/dashcardDropdownMenu.json"

function TopicContentLeft({ topic }) {
  return (
    <div className="flex flex-col max-w-sm float-right">
      <div className="p-3">
        <img
          className="rounded-r-3xl rounded-b-3xl object-cover h-72"
          src={topic?.bannerImage}
          alt="placeholder"
          width="400"
        />
        <div className="p-3 flex-col  place-items-end content-end max-w-xs">
          <h1 className="text-xl pb-2">{topic?.title}</h1>
          <p className="text-lg pb-2">
            {topic?.category}: {topic?.subject}
          </p>
          <p className="text-sm">{topic?.description} </p>
        </div>
        <div className="place-items-end">
          <ResourceDashcard
            resourceDashCardTitle="Resources"
            resourceDashCardStyle="bg-aqua"
            resourceDashCardData={topic?.resources}
            dropdownMenuData={data.resources}
          />
        </div>
        <div className="p-3 w-full">
          <p>{topic?.isPrivate ? "Private" : "Public"} topic created by </p>
          <Link to={`/profile/${topic?.owner?._id}`}>
            <div className="flex items-center py-3">
              <img
                className="w-10 h-10 rounded-full mr-2"
                src={`${topic?.owner?.imageUrl}`}
                alt="profile"
              />
              <p className="text-base">
                {topic?.owner?.firstName} {topic?.owner?.lastName}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TopicContentLeft
