/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import Icon from "../Icon"

export default function DashCardListItem({
  linkId,
  listItemTitle,
  listItemDate,
  listItemComments,
  listItemUsers,
  listItemType,
}) {
  return (
    <>
      <div className="pt-3 flex justify-between">
        <div className="flex-col">
          <Link to={`/${listItemType}/${linkId}`}>{listItemTitle}</Link>
          {listItemDate && (
            <p className="text-xs text-grey-medium pb-1">{listItemDate}</p>
          )}
        </div>

        <div className="flex gap-1 w-20 grid-cols-2 pb-1 items-center">
          {listItemType === "Courses" ? (
            <div className="w-full bg-grey-medium_light rounded-full h-1 dark:bg-gray-700">
              <div
                className=" bg-yellow h-1 rounded-full"
                style={{ width: `45%` }}
              />
            </div>
          ) : (
            <>
              <div className="flex gap-1 w-20">
                <button type="button">
                  <Icon
                    iconName="member"
                    iconStyle="fill-inactive text-grey-dark"
                  />
                </button>
                <p>{listItemUsers?.length}</p>
              </div>
              <button type="button">
                <Icon
                  iconName="message"
                  iconStyle="fill-inactive text-grey-dark"
                />
              </button>
              <p>{listItemComments?.length}</p>
            </>
          )}
        </div>
      </div>
    </>
  )
}

DashCardListItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  linkId: PropTypes.string.isRequired,
  listItemTitle: PropTypes.string.isRequired,
  listItemDate: PropTypes.string,
  listItemComments: PropTypes.array.isRequired,
  listItemUsers: PropTypes.array.isRequired,
  listItemType: PropTypes.string.isRequired,
}
