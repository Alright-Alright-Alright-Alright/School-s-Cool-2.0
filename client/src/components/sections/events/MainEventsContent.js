/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import EventCards from "../../core/events/EventCards"
import AddCard from "../../core/AddCard"
import EventModal from "../../core/events/EventModal"
import { getAllEvents } from "../../../redux/actions/eventActions"

const MainEventsContent = ({ events }) => {
  const dispatch = useDispatch()
  const [showModal, setShowModal] = useState(false)
  const handleShowModal = () => {
    setShowModal(!showModal)
  }

  useEffect(() => {
    dispatch(getAllEvents())
  }, [dispatch])

  return (
    <div className="relative">
      {showModal && <EventModal handleShowModal={handleShowModal} />}
      <div
        className={`w-full flex justify-between flex-wrap gap-3 m-6 filter ${
          showModal && "blur-md"
        }`}
      >
        <button type="button" onClick={handleShowModal}>
          <AddCard cardTitle="New event" color="#27A8DF" />
        </button>
        {events.map((event) => (
          <EventCards key={event._id} events={event} />
        ))}
      </div>
    </div>
  )
}

export default MainEventsContent
