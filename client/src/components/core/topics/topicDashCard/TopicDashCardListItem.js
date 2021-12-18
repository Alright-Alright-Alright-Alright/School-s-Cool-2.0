/* eslint-disable  */
/* eslint-disable react/forbid-prop-types */
import React from "react"
import PropTypes from "prop-types"
import Icon from "../../Icon"
import { inviteForTopic, removeInvite } from "../../../../redux/actions/topicActions"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"

export default function TopicDashCardListItem({
  listItemFirstName,
  listItemLastName,
  listItemUserId,
  topicDashCardData,
}) {

  const dispatch = useDispatch()
  const params = useParams()

  const inviteUserHandler = () => {
    dispatch(inviteForTopic(params.topicId, listItemUserId))
  }

  const removeInviteHandler = () => {
    dispatch(removeInvite(params.topicId, listItemUserId))
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
            {topicDashCardData?.some(
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

TopicDashCardListItem.propTypes = {
  listItemFirstName: PropTypes.string.isRequired,
  listItemLastName: PropTypes.string.isRequired,
  listItemUserId: PropTypes.string.isRequired,
  topicDashCardData: PropTypes.array,
}
