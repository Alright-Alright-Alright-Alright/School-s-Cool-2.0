import React from "react"
import PropTypes from "prop-types"
import EventDashcard from "../../core/events/eventDashCard/EventDashcard"
import dashcardDropdownMenu from "../../../data/dashcardDropdownMenu.json"

function EventDetailContentRight({ event, users }) {
  return (
    <div className="place-items-start max-w-xs hidden lg:block">
      <EventDashcard
        eventDashCardTitle="Event Attendees"
        eventDashCardStyle="bg-sky"
        eventDashCardData={event?.attendees}
        users={users?.users}
        dropdownMenuData={dashcardDropdownMenu.eventMembers}
      />
    </div>
  )
}

EventDetailContentRight.propTypes = {
  event: PropTypes.shape.isRequired,
  users: PropTypes.shape.isRequired,
}

export default EventDetailContentRight
