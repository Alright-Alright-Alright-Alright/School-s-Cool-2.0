/* eslint-disable no-underscore-dangle */
import React from "react"
import PropTypes from "prop-types"
import { useDispatch } from "react-redux"
import Button from "../../Button"
import { joinEvent, leaveEvent } from "../../../../redux/actions/eventActions"

function EventDescriptionCard({ event, user }) {
  const dispatch = useDispatch()

  return (
    <div className="rounded-bl-2xl rounded-br-2xl rounded-r-2xl bg-white shadow-lg m-3">
      <div>
        <h1 className="p-3 text-lg">Event description</h1>
      </div>
      <div className="flex justify-between px-3 pb-3 text-base">
        <p>{event?.description}</p>
      </div>

      <div className="flex justify-end p-3 relative">
        {event?.attendees?.some((attendee) => attendee._id === user._id) ? (
          <Button
            buttonName="Leave this event"
            buttonStyle="btnEventStyleActive"
            buttonSubmit
            onClick={() => dispatch(leaveEvent(event._id, user._id))}
          />
        ) : (
          <Button
            buttonName="Join this event"
            buttonStyle="btnEventStyle"
            buttonSubmit
            onClick={() => dispatch(joinEvent(event._id, user._id))}
          />
        )}
      </div>
    </div>
  )
}

EventDescriptionCard.propTypes = {
  event: PropTypes.shape.isRequired,
  user: PropTypes.shape.isRequired,
}

export default EventDescriptionCard
