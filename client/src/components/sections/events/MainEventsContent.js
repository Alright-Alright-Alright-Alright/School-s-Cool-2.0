/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useState } from "react"
import { useSelector } from "react-redux"
import EventCards from "../../core/events/EventCards"
import AddCard from "../../core/AddCard"
import EventModal from "../../core/events/EventModal"
import Button from "../../core/Button"
import Icon from "../../core/Icon"

const MainEventsContent = ({ events }) => {
  const [showModal, setShowModal] = useState(false)
  const [filter, setFilter] = useState("All events")
  const user = useSelector((state) => state.user.singleUser)

  const handleShowModal = () => {
    setShowModal(!showModal)
  }

  let filterRule
  switch (filter) {
    case "My events":
      /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
      filterRule = (item) => item.owner === user?._id
      break
    case "Attended events":
      filterRule = (item) =>
        item.attendees.find((attendee) => attendee._id === user?._id)
      break
    case "Past events":
      filterRule = (item) =>
        new Date(item.dateStart) < new Date() &&
        new Date(item.dateEnd) < new Date()
      break
    default:
      filterRule = (item) => new Date(item.dateStart) > new Date()
  }

  const filteredEvents = events.filter(filterRule)

  return (
    <div className="">
      <div className="flex flex-wrap lg:flex pt-5 justify-evenly lg:justify-end space-x-2 lg:space-x-3 pr-2 lg:pr-10">
        <button
          className="flex text-lg items-center pb-3 lg:pb-0"
          type="button"
          onClick={handleShowModal}
        >
          <Icon iconName="add" iconStyle="fill-inactive text-sky" />
          <p className="pl-3">New Event</p>
        </button>

        <div className="pb-3 lg:pb-0">
          <Button
            buttonName="All events"
            buttonStyle="btnEventStyle"
            onClick={() => setFilter("All events")}
          />
        </div>
        <div className="pb-3 lg:pb-0">
          <Button
            buttonName="Attended events"
            buttonStyle="btnEventStyle"
            onClick={() => setFilter("Attended events")}
          />
        </div>

        <div className="pb-3 lg:pb-0">
          <Button
            buttonName="My events"
            buttonStyle="btnEventStyle"
            onClick={() => setFilter("My events")}
          />
        </div>

        <div className="pb-3 lg:pb-0">
          <Button
            buttonName="Past events"
            buttonStyle="btnEventStyle"
            onClick={() => setFilter("Past events")}
          />
        </div>
      </div>
      {showModal && <EventModal handleShowModal={handleShowModal} />}
      <div
        className={`flex justify-center sm:justify-evenly flex-wrap gap-7 m-6 filter ${
          showModal && "blur-md"
        }`}
      >
        {filteredEvents.map((event) => (
          <EventCards key={event._id} event={event} />
        ))}
      </div>
    </div>
  )
}

export default MainEventsContent
