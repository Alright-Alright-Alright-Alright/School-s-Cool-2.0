/* eslint-disable  */
/* eslint-disable react/forbid-prop-types */
import React from "react"
import PropTypes from "prop-types"
import Icon from "../../Icon"
import { inviteForEvent, removeEventInvite } from "../../../../redux/actions/eventActions"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"

export default function EventDashCardListItem({
  listItemFirstName,
  listItemLastName,
  listItemUserId,
  eventDashCardData,
}) {

  const dispatch = useDispatch()
  const params = useParams()

  const inviteUserHandler = () => {
    dispatch(inviteForEvent(params.eventId, listItemUserId))
  }

  const removeInviteHandler = () => {
    dispatch(removeEventInvite(params.eventId, listItemUserId))
  }


  return (
    <>
      <div className="pt-3 flex justify-between">
        <div className="flex-col">
          <p>
            {listItemFirstName} {listItemLastName}
          </p>
        </div>
        <div className="flex w-20 pb-1 justify-end">
          <div className="flex ">
            {eventDashCardData?.some(
              (user) => user.firstName === listItemFirstName
            ) ? (
              <button type="button" onClick={removeInviteHandler}>
                <Icon iconName="follow" iconStyle="fill-active text-grey-dark" />
              </button>
            ) : (
              <button type="button" onClick={inviteUserHandler}>
                <Icon iconName="add" iconStyle="fill-inactive text-grey-dark" />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

EventDashCardListItem.propTypes = {
  listItemFirstName: PropTypes.string.isRequired,
  listItemLastName: PropTypes.string.isRequired,
  listItemUserId: PropTypes.string.isRequired,
  eventDashCardData: PropTypes.array,
}
