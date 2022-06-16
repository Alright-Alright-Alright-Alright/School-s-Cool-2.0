/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useState } from "react"
import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"
import EventCards from "../../core/events/EventCards"
import AddCard from "../../core/AddCard"
import EventModal from "../../core/events/EventModal"
import Button from "../../core/Button"
import Icon from "../../core/Icon"

const MainEventsContent = ({ events }) => {
  const [showModal, setShowModal] = useState(false)
  const [filter, setFilter] = useState("")
  const { t } = useTranslation()
  const user = useSelector((state) => state.user.singleUser)

  const handleShowModal = () => {
    setShowModal(!showModal)
  }

  const checkIfIsPrivate = () => {
    const eventsCurrentUserCanSee = []
    events.forEach((event) => {
      if (event.isPrivate === false) {
        eventsCurrentUserCanSee.push(event)
      }
    })
    const privateEvents = events.filter(
      (attendee) => attendee.isPrivate === true
    )
    privateEvents
      .map((event) =>
        event.members.map((member) => member._id === user._id && event)
      )
      .flat(Infinity)
      .forEach((item) => {
        if (typeof item === "object") {
          eventsCurrentUserCanSee.push(item)
        }
      })
    return eventsCurrentUserCanSee.sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    )
  }

  let filterRule
  switch (filter) {
    case "All events":
      filterRule = (item) => item
      break
    case "My events":
      /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
      filterRule = (item) => item.owner === user?._id
      break
    case "Attended events":
      filterRule = (item) =>
        item.attendees.find((attendee) => attendee._id === user?._id)
      break
    case "Past events":
      filterRule = (item) => new Date(item.dateStart) < new Date()
      break
    default:
      filterRule = (item) => new Date(item.dateEnd) >= new Date()
  }

  const filteredEvents = checkIfIsPrivate().filter(filterRule)

  return (
    <div className="max-w-sm	lg:max-w-full">
      <div className="flex flex-col lg:flex-row flex-wrap lg:pt-5 justify-evenly lg:justify-between space-x-2 lg:px-5">
        <button
          className="flex text-lg items-center pb-3 pl-6 lg:pb-0 lg:pl-0 mt-2 md:mt-0"
          type="button"
          onClick={handleShowModal}
        >
          <Icon iconName="add" iconStyle="fill-inactive text-sky " />
          <p className="pl-2">{t("events.button_new_event")}</p>
        </button>

        <div className="flex flex-wrap gap-1 lg:gap-0 pl-5 justify-start lg:space-x-3 lg:flex-nowrap max-w-xl">
          <div className="">
            <Button
              buttonName={t("events.button_all_events")}
              buttonStyle="btnEventStyle"
              onClick={() => setFilter("All events")}
            />
          </div>
          <div className="pb-3 lg:pb-0">
            <Button
              buttonName={t("events.button_attended_events")}
              buttonStyle="btnEventStyle"
              onClick={() => setFilter("Attended events")}
            />
          </div>
          <div className="pb-3 lg:pb-0">
            <Button
              buttonName={t("events.button_my_events")}
              buttonStyle="btnEventStyle"
              onClick={() => setFilter("My events")}
            />
          </div>

          <div className="pb-3 lg:pb-0">
            <Button
              buttonName={t("events.button_past_events")}
              buttonStyle="btnEventStyle"
              onClick={() => setFilter("Past events")}
            />
          </div>
        </div>
      </div>
      {showModal && <EventModal handleShowModal={handleShowModal} />}
      <div
        className={`flex justify-center sm:justify-evenly flex-wrap gap-7 mx-6 mb-24 md:m-6 filter ${
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
