/* eslint-disable  */
/* eslint-disable react/forbid-prop-types */
import React from "react"
import PropTypes from "prop-types"
import Icon from "../Icon"

export default function TopicDashCardListItem({
  listItemFirstName,
  listItemLastName,
  topicDashCardData,
}) {
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
              <button type="button">
                <Icon iconName="follow" iconStyle="fill-active text-grey-dark" />
              </button>
            ) : (
              <button type="button">
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
  // eslint-disable-next-line react/forbid-prop-types
  listItemFirstName: PropTypes.string.isRequired,
  listItemLastName: PropTypes.string.isRequired,
  topicDashCardData: PropTypes.array.isRequired,
}
