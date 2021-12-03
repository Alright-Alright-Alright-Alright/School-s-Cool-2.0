/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import Icon from "../Icon"

export default function DashCardListChats({
  listContactName,
  // isOnline,
  // listContactId,
  // listContactAvatar,
}) {
  return (
    <>
      <div className="pt-3 flex justify-between">
        <div className="flex-col">
          <Link to="/">{listContactName}</Link>
        </div>
        <div className="flex grid-cols-2 pb-1 items-center">
          <div className="flex">
            <button type="button">
              <Icon
                iconName="message"
                iconStyle="fill-inactive text-grey-dark"
              />
            </button>
          </div>
          <button type="button">
            <Icon iconName="follow" iconStyle="fill-inactive text-grey-dark" />
          </button>
        </div>
      </div>
    </>
  )
}

DashCardListChats.propTypes = {
  listContactName: PropTypes.string.isRequired,
  // isOnline: PropTypes.bool
}
