/* eslint-disable no-underscore-dangle */
import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import dayjs from "dayjs"
import calendar from "dayjs/plugin/calendar"
import ResourceDashcard from "../../core/resourceDashCard/ResourceDashcard"

function EventDetailContentLeft({ event }) {
  dayjs.extend(calendar)

  return (
    <div className="flex flex-col max-w-sm float-right">
      <div className="p-3">
        <img
          className="rounded-r-3xl rounded-b-3xl object-cover h-72"
          src={event?.bannerImage}
          alt="placeholder"
          width="400"
        />
        <div className="p-3 flex-col  place-items-end content-end max-w-xs">
          <h1 className="text-xl pb-2">{event?.title}</h1>
          <p className="text-lg pb-2">Location: {event?.location}</p>
          <p className="text-base pb-2">
            {dayjs(event?.dateStart).format("MMM DD, YYYY")} -{" "}
            {dayjs(event?.dateEnd).format("MMM DD, YYYY")}
          </p>

          <p className="text-sm">{event?.description} </p>
        </div>
        <div className="place-items-end">
          <ResourceDashcard
            resourceDashCardTitle="Resources"
            resourceDashCardStyle="bg-sky"
            resourceDashCardData={event?.resources}
            // dropdownMenuData={data.resources}
          />
        </div>
        <div className="p-3 w-full">
          <p>{event?.isPrivate ? "Private" : "Public"} event created by </p>
          <Link to={`/profile/${event?.owner?._id}`}>
            <div className="flex items-center py-3">
              <img
                className="w-10 h-10 rounded-full mr-2"
                src={`${event?.owner?.imageUrl}`}
                alt="profile"
              />
              <p className="text-base">
                {event?.owner?.firstName} {event?.owner?.lastName}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

EventDetailContentLeft.propTypes = {
  event: PropTypes.shape.isRequired,
}

export default EventDetailContentLeft
