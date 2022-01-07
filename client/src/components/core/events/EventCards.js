/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import Icon from "../Icon"

const EventCards = ({events}) => {
  const user = useSelector((state) => state.user.singleUser)
  const [join, setJoin] = useState(false)
  const dispatch = useDispatch()
  
  return (
    <div className="flex flex-col justify-between w-3/7 h-2/5 bg-white shadow-xl rounded-br-3xl rounded-bl-3xl rounded-tr-3xl">
      <Link to={events._id}>
        <section className="">
          <img
            src={events.bannerImage}
            alt="event_Image"
            className="object-cover h-36 w-full rounded-tr-3xl"
          />
        </section>
        <section className="border-b-2 border-grey-light mx-3 h-24 flex flex-col justify-around">
          <div className="flex items-center">
            <h1 className="text-md w-2/4">{events.title}</h1>
            {/* <p className="text-base w-3/4 pl-2">{events.description}</p> */}
          </div>
          <div className="flex justify-around">
            <p className="text-sm">{events.location}</p>
            <p className="text-sm">{events?.dateStart.slice(0, 10)}</p>
            <p className="text-sm">{events?.dateEnd.slice(0, 10)}</p>
          </div>
        </section>
      </Link>

      <section className="h-12">
        <div className="flex justify-between">
          <div className="flex p-3">
            <Icon iconName="member" iconStyle="fill-inactive text-grey-dark" />
            <span>{events?.attendees.length}</span>
          </div>
          <div className="p-3">
            {join ? (
              <button type="button">
                <Icon
                  iconName="follow"
                  iconStyle="fill-active text-grey-dark"
                />
              </button>
            ) : (
              <button type="button">
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
