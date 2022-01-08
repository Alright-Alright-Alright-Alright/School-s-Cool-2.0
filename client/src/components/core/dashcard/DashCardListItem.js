import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import dayjs from "dayjs"
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
            <p className="text-xs text-grey-medium pb-1">
              {dayjs(listItemDate).format("MMM DD, YYYY")}
            </p>
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

DashCardListItem.defaultProps = {
  listItemDate: "",
}

DashCardListItem.propTypes = {
  linkId: PropTypes.string.isRequired,
  listItemTitle: PropTypes.string.isRequired,
  listItemDate: PropTypes.string,
  listItemComments: PropTypes.arrayOf.isRequired,
  listItemUsers: PropTypes.arrayOf.isRequired,
  listItemType: PropTypes.string.isRequired,
}
