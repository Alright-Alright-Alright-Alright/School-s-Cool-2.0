/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import Icon from "../Icon"

export default function TopicDashCardListItem({
  listItemFirstName,
  listItemLastName,
  topicDashCardData,

  // listItemTitle,
  // listItemDate,
  // listItemComments,
  // listItemUsers,
}) {
  console.log(topicDashCardData)
  return (
    <>
      <div className="pt-3 flex justify-between">
        <div className="flex-col">
          {/* <Link to="/">{listItemTitle}</Link>
          {listItemDate && (
            <p className="text-xs text-grey-medium pb-1">{listItemDate}</p>
          )} */}
          <p>
            {listItemFirstName} {listItemLastName}
          </p>
        </div>
        <div className="flex gap-1 w-20 grid-cols-2 pb-1 items-center">
          <div className="flex gap-1 w-20">
            {topicDashCardData?.includes(listItemFirstName) ? (
              <p>yes</p>
            ) : (
              // <Icon iconName="add" iconStyle="fill-active text-grey-dark" />
              <p>no</p>
              // <Icon iconName="add" iconStyle="fill-inactive text-grey-dark" />
            )}
            {/* <button type="button">
              <Icon iconName="add" iconStyle="fill-inactive text-grey-dark" />
            </button> */}
            {/* <p>{listItemComments?.length}</p> */}
          </div>
          <button type="button">
            <Icon iconName="follow" iconStyle="fill-inactive text-grey-dark" />
          </button>
          {/* <p>{listItemUsers?.length}</p> */}
        </div>
      </div>
    </>
  )
}

TopicDashCardListItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  listItemFirstName: PropTypes.string.isRequired,
  listItemLastName: PropTypes.string.isRequired,
  topicDashCardData: PropTypes.object.isRequired,
  // listItemDate: PropTypes.string,
  // listItemComments: PropTypes.array.isRequired,
  // listItemUsers: PropTypes.array.isRequired,
}
