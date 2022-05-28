/* eslint-disable no-underscore-dangle */
import React, { useState } from "react"
import PropTypes from "prop-types"
import Icon from "../../Icon"
import EventDashCardListItem from "./EventDashCardListItem"
import DropDownMenu from "../../DropDownMenu"

export default function EventDashcard({
  eventDashCardData,
  eventDashCardTitle,
  eventDashCardStyle,
  dropdownMenuData,
  users,
}) {
  const [expandDashCard, setExpandDashCard] = useState(false)

  const firstThreeItems = users
    .slice(0, 3)
    .map((item) => (
      <EventDashCardListItem
        key={item?._id}
        listItemUserId={item?._id}
        listItemFirstName={item?.firstName}
        listItemLastName={item?.lastName}
        eventDashCardData={eventDashCardData}
      />
    ))

  const allItems = users.map((item) => (
    <EventDashCardListItem
      key={item?._id}
      listItemUserId={item?._id}
      listItemFirstName={item?.firstName}
      listItemLastName={item?.lastName}
      eventDashCardData={eventDashCardData}
    />
  ))

  return (
    <div className="w-full">
      <div className="flex flex-col relative w-full m-3 shadow-lg rounded-bl-3xl rounded-br-3xl bg-white rounded-r-3xl">
        <div
          className={`w-full ${eventDashCardStyle} h-dashcardtitle rounded-r-full rounded-bl-full`}
        >
          <div className="flex justify-between pt-3 text-white">
            <p className="text-lg pl-4">{eventDashCardTitle}</p>
            <div className="flex flex-row">
              <h2 className="text-base pr-4">Filter</h2>
              <DropDownMenu data={dropdownMenuData} />
            </div>
          </div>
        </div>
        <div className="flex-col pl-4 pr-4 max-h-96 overflow-y-auto scrollBar">
          <div className="divide-y-2 divide-primary">
            {expandDashCard ? allItems : firstThreeItems}
            <div />
          </div>
        </div>
        <div className="min-h-dashcardrow flex justify-center pt-3">
          <button
            type="button"
            onClick={() => setExpandDashCard(!expandDashCard)}
          >
            {expandDashCard ? (
              <Icon iconName="collapse" />
            ) : (
              <Icon iconName="expand" />
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

EventDashcard.defaultProps = {
  eventDashCardData: [],
  users: [],
}

EventDashcard.propTypes = {
  eventDashCardData: PropTypes.arrayOf(PropTypes.shape),
  eventDashCardTitle: PropTypes.string.isRequired,
  eventDashCardStyle: PropTypes.string.isRequired,
  dropdownMenuData: PropTypes.shape.isRequired,
  users: PropTypes.arrayOf(PropTypes.shape),
}
