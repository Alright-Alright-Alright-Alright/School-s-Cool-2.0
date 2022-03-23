/* eslint-disable no-underscore-dangle */
import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate, Link } from "react-router-dom"
import dayjs from "dayjs"
import calendar from "dayjs/plugin/calendar"
import PropTypes from "prop-types"
import { t } from "i18next"
import Icon from "../Icon"
import { joinEvent, leaveEvent } from "../../../redux/actions/eventActions"
import Button from "../Button"

const EventCards = ({ event }) => {
  const user = useSelector((state) => state.user.singleUser)
  const [join, setJoin] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  dayjs.extend(calendar)

  // Get i18Next locale from cookies
  const localeFromCookies = `; ${document.cookie}`
    .split(`; i18next=`)
    .pop()
    .split(";")[0]

  const joinEventHandler = () => {
    dispatch(joinEvent(event?._id, user?._id))
    setJoin(!join)
  }

  const leaveEventHandler = () => {
    dispatch(leaveEvent(event?._id, user?._id))
    setJoin(!join)
  }

  return (
    <div className="flex flex-col justify-between w-full bg-white shadow-xl rounded-br-3xl rounded-bl-3xl rounded-tr-3xl">
      <section className="flex justify-between border-b-2 border-grey-light mx-5">
        <div className="flex-col w-1/2 pr-3 justify-between">
          <div className="">
            <div className="py-5 flex">
              {join ? (
                <button type="button" onClick={joinEventHandler}>
                  <Icon
                    iconName="follow"
                    iconStyle="fill-active text-grey-dark"
                  />
                </button>
              ) : (
                <button type="button" onClick={leaveEventHandler}>
                  <Icon
                    iconName="follow"
                    iconStyle="fill-inactive text-grey-dark"
                  />
                </button>
              )}
              <Link to={`/events/${event?._id}`}>
                <h1 className=" text-lg pl-3">{event?.title}</h1>
              </Link>
            </div>

            <div>
              <div className="flex justify-start">
                <p className="text-sm pr-3 text-grey-medium_light">
                  {dayjs(event?.dateStart).format("MMM DD, YYYY")}
                </p>
                <p className="text-sm text-grey-medium_light">
                  {dayjs(event?.dateEnd).format("MMM DD, YYYY")}
                </p>
              </div>
              <p className="text-sm text-grey-medium_light">
                {event?.location}
              </p>
              <p className="text-sm text-grey-medium_light">
                {event?.timeStart
                  ? dayjs(event?.timeStart)
                      .locale(localeFromCookies)
                      .format("HH:mm")
                  : null}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap h-28 justify-start items-end">
            {event?.tags.map((tag) => (
              <span
                key={tag}
                className="mr-2 bg-grey-super_light rounded-full px-3 py-1 text-base text-grey-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-end w-1/2 my-5 ">
          <Link to={`/events/${event?._id}`} className=" w-full h-48 ">
            <img
              src={event?.bannerImage}
              alt="event_Image"
              className=" object-cover w-full h-48 rounded-tr-3xl rounded-b-3xl"
            />
          </Link>
        </div>
      </section>

      <section className="flex justify-between items-center p-5">
        <div>
          <Button
            buttonName={t("events.button_more_info")}
            buttonStyle="btnEventStyle"
            onClick={() => {
              navigate(`/events/${event?._id}`)
            }}
          />
        </div>
        <div className="flex p-3">
          <div className="flex items-center px-3">
            <button type="button">
              <Icon
                iconName="member"
                iconStyle="fill-inactive text-grey-dark"
              />
            </button>
            <p>{event?.attendees?.length}</p>
          </div>
          <div className="flex items-center">
            <button type="button">
              <Icon
                iconName="message"
                iconStyle="fill-inactive text-grey-dark"
              />
            </button>
            <p>{event?.posts?.length}</p>
          </div>
        </div>
      </section>
    </div>
  )
}

EventCards.propTypes = {
  event: PropTypes.shape.isRequired,
}

export default EventCards
