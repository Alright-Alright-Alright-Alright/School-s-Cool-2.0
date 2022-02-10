/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useState } from "react"
import { useSelector } from "react-redux"
import EventCards from "../../core/events/EventCards"
import AddCard from "../../core/AddCard"
import EventModal from "../../core/events/EventModal"
import Button from "../../core/Button"

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

  console.log(filteredEvents)

  return (
    <div className="relative">
      <div className="flex pt-5 justify-end space-x-2 lg:space-x-3 pr-2 lg:pr-10">
        <Button
          buttonName="All events"
          buttonStyle="btnEventStyle"
          onClick={() => setFilter("All events")}
        />
        <Button
          buttonName="Attended events"
          buttonStyle="btnEventStyle"
          onClick={() => setFilter("Attended events")}
        />
        <Button
          buttonName="My events"
          buttonStyle="btnEventStyle"
          onClick={() => setFilter("My events")}
        />
        <Button
          buttonName="Past events"
          buttonStyle="btnEventStyle"
          onClick={() => setFilter("Past events")}
        />
      </div>
      {showModal && <EventModal handleShowModal={handleShowModal} />}
      <div
        className={`flex justify-center sm:justify-evenly flex-wrap gap-7 m-6 filter ${
          showModal && "blur-md"
        }`}
      >
        <button type="button" onClick={handleShowModal}>
          <AddCard cardTitle="New event" color="#27A8DF" />
        </button>
        {filteredEvents.map((event) => (
          <EventCards key={event._id} event={event} />
        ))}
      </div>
    </div>
  )
}

export default MainEventsContent
