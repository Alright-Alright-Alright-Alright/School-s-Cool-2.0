/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link, useParams } from "react-router-dom"
import Icon from "../Icon"
import { joinEvent, leaveEvent } from "../../../redux/actions/eventActions"

const EventCards = ({ event }) => {
  const user = useSelector((state) => state.user.singleUser)
  const [join, setJoin] = useState(false)
  const dispatch = useDispatch()

  const params = useParams()

  console.log(event.attendees)

  const joinEventHandler = () => {
    dispatch(joinEvent(event?._id, user._id))
    setJoin(!join)
  }

  const leaveEventHandler = () => {
    dispatch(leaveEvent(event?._id, user._id))
    setJoin(!join)
  }

  
  return (
    <div className="flex flex-col justify-between w-3/7 h-2/5 bg-white shadow-xl rounded-br-3xl rounded-bl-3xl rounded-tr-3xl">
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
            <p className="text-sm">{event?.dateStart.slice(0, 10)}</p>
            <p className="text-sm">{event?.dateEnd.slice(0, 10)}</p>
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
  );
}

export default EventCards
