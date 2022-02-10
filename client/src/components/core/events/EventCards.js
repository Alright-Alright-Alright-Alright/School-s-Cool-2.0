/* eslint-disable no-underscore-dangle */
import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import dayjs from "dayjs"
import PropTypes from "prop-types"
import Icon from "../Icon"
import { joinEvent, leaveEvent } from "../../../redux/actions/eventActions"

const EventCards = ({ event }) => {
  const user = useSelector((state) => state.user.singleUser)
  const [join, setJoin] = useState(false)
  const dispatch = useDispatch()

  const joinEventHandler = () => {
    dispatch(joinEvent(event?._id, user?._id))
    setJoin(!join)
  }

  const leaveEventHandler = () => {
    dispatch(leaveEvent(event?._id, user?._id))
    setJoin(!join)
  }

  return (
    <div className="flex flex-col justify-between w-full lg:w-48 h-72 bg-white shadow-xl rounded-br-3xl rounded-bl-3xl rounded-tr-3xl">
      <Link to={`${event?._id}`}>
        <section className="">
          <img
            src={event?.bannerImage}
            alt="event_Image"
            className="object-cover h-36 w-full rounded-tr-3xl"
          />
        </section>
        <section className="border-b-2 border-grey-light mx-3 h-24 flex flex-col justify-around">
          <div className="flex items-center">
            <h1 className="text-md w-2/4">{event?.title}</h1>
            {/* <p className="text-base w-3/4 pl-2">{event.description}</p> */}
          </div>
          <div className="flex justify-around">
            <p className="text-sm">{event?.location}</p>
            <p className="text-sm">
              {" "}
              {dayjs(event?.dateStart).format("MMM DD, YYYY")}
            </p>
            <p className="text-sm">
              {" "}
              {dayjs(event?.dateEnd).format("MMM DD, YYYY")}
            </p>
          </div>
        </section>
      </Link>

      <section className="h-12">
        <div className="flex justify-between">
          <div className="flex p-3">
            <Icon iconName="member" iconStyle="fill-inactive text-grey-dark" />
            <span>{event?.attendees.length}</span>
          </div>
          <div className="p-3">
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
