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
    <div className="flex flex-col justify-between w-48 h-72 bg-white shadow-xl rounded-br-3xl rounded-bl-3xl rounded-tr-3xl">
      <section className="">
        <img
          src=""
          alt="event_Image"
          className="object-cover h-48 w-full rounded-tr-3xl"
        />
      </section>
      <section className="border-b-2 border-grey-light ml-3 mr-3 h-12 flex items-center">
        <h1 className="text-lg">Event name</h1>
      </section>

      <section>
        <div className="flex justify-between">
          <div className="flex p-3">
            <Icon iconName="member" iconStyle="fill-inactive text-grey-dark" />
            <span>0</span>
            <Icon iconName="file" iconStyle="fill-inactive text-grey-dark" />
            <span>0</span>
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
