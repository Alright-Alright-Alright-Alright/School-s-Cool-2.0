/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from "react"
import EventCards from "../../core/events/EventCards"

const MainEventsContent = ({ events }) => (
  <div>
    {events.map((event) => (
      <div key={event._id} className="flex justify-center flex-wrap gap-7 m-6">
        <EventCards events={event} />
      </div>
    ))}
  </div>
)

export default MainEventsContent
