import React from "react"
import PropTypes from "prop-types"

function EventDescriptionCard({ event }) {
  return (
    <div className="rounded-bl-2xl rounded-br-2xl rounded-r-2xl bg-white shadow-lg m-3">
      <div>
        <h1 className="p-3 text-lg">Event description</h1>
      </div>
      <div className="flex justify-between px-3 pb-3 text-base">
        <p>{event?.description}</p>
      </div>

      {/* <div className="flex justify-between p-3 relative">
        <div className="flex items-center">
          <button type="button" onClick={handleShowModal} className="flex">
            <Icon iconName="add" iconStyle="fill-inactive text-sky" />
            <p className="pl-3">Add a resource</p>
          </button>
          {showModal && (
            <LibraryModal
              handleShowModal={handleShowModal}
              singleTopic={singleTopic}
            />
          )}
        </div>
        <Button
          buttonName="Add post to event"
          buttonStyle="btnEventStyle"
          buttonSubmit
          onClick={onClick}
        />
      </div> */}
    </div>
  )
}

EventDescriptionCard.propTypes = {
  event: PropTypes.shape.isRequired,
}

export default EventDescriptionCard
