/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { PlusIcon } from "@heroicons/react/solid";
import EventCards from "../../core/events/EventCards";
import AddCard from "../../core/AddCard";
import EventModal from "../../core/events/EventModal";
import Button from "../../core/Button";
import Icon from "../../core/Icon";

const MainEventsContent = ({ events }) => {
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState("");
  const { t } = useTranslation();
  const user = useSelector((state) => state.user.singleUser);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  let filterRule;
  switch (filter) {
    case "All events":
      filterRule = (item) => item;
      break;
    case "My events":
      /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
      filterRule = (item) => item.owner === user?._id;
      break;
    case "Attended events":
      filterRule = (item) =>
        item.attendees.find((attendee) => attendee._id === user?._id);
      break;
    case "Past events":
      filterRule = (item) => new Date(item.dateStart) < new Date();
      break;
    default:
      filterRule = (item) => new Date(item.dateEnd) >= new Date();
  }

  const filteredEvents = events.filter(filterRule);

  return (
    <div className="max-w-sm	lg:max-w-full">
      <div className="flex flex-col lg:flex-row flex-wrap pt-5 justify-evenly lg:justify-between space-x-2  pr-2 lg:px-5">
        <button
          className="flex gap-2 bg-sky text-white rounded-sm hover:shadow-md px-4 py-2 hover:bg-sky-dark"
          type="button"
          onClick={handleShowModal}
        >
          <PlusIcon className="h-5" />
          <p className="pl-3">{t("events.button_new_event")}</p>
        </button>

        <div className="flex overflow-x-auto space-x-3 max-w-xl">
          <div className="pb-3 lg:pb-0">
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
        className={`flex justify-center sm:justify-evenly flex-wrap gap-7 m-6 filter ${
          showModal && "blur-md"
        }`}
      >
        {filteredEvents.map((event) => (
          <EventCards key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default MainEventsContent;
