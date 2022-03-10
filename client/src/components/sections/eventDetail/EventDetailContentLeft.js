/* eslint-disable no-underscore-dangle */
import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import dayjs from "dayjs"
import calendar from "dayjs/plugin/calendar"
import { t } from "i18next"
import ResourceDashcard from "../../core/resourceDashCard/ResourceDashcard"

function EventDetailContentLeft({ event }) {
  dayjs.extend(calendar)

  // Get i18Next locale from cookies
  const localeFromCookies = `; ${document.cookie}`
    .split(`; i18next=`)
    .pop()
    .split(";")[0]

  return (
    <div className="flex flex-col max-w-sm">
      <div className="p-3">
        <img
          className="rounded-r-3xl rounded-b-3xl object-cover h-72"
          src={event?.bannerImage}
          alt="placeholder"
          width="400"
        />
        <div className="p-3 flex-col  place-items-end content-end max-w-xs">
          <h1 className="text-xl pb-2">{event?.title}</h1>
          <p className="text-lg pb-2">{event?.location}</p>
          <p className="text-base pb-2">
            {dayjs(event?.dateStart)
              .locale(localeFromCookies)
              .format("DD MMMM , YYYY")}{" "}
            -{" "}
            {dayjs(event?.dateEnd)
              .locale(localeFromCookies)
              .format("DD MMMM, YYYY")}
          </p>
          <p className="text-base pb-2">
            {event?.timeStart
              ? dayjs(event?.timeStart).locale(localeFromCookies).calendar()
              : null}
          </p>
        </div>

        <div className="place-items-end">
          <ResourceDashcard
            resourceDashCardTitle={t("dash_card_title_files")}
            resourceDashCardStyle="bg-sky"
            resourceDashCardData={event?.resources}
            // dropdownMenuData={data.resources}
          />
        </div>
        <div className="p-3 w-full">
          <p>
            {event?.isPrivate
              ? `${t("events.private_event_organized_by")}`
              : `${t("events.public_event_organized_by")}`}
          </p>
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
