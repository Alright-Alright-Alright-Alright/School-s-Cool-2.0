/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from "react"
import EventCards from "../../core/events/EventCards"
import AddCard from "../../core/AddCard"

const MainEventsContent = ({ events }) => (
  <div className="w-full flex justify-center flex-wrap gap-3 m-6">
    <button type="button" className="pr-28">
      <AddCard cardTitle="New event" />
    </button>
    {events.map((event) => (
      <EventCards key={event._id} events={event} />
    ))}
  </div>
)

export default MainEventsContent
