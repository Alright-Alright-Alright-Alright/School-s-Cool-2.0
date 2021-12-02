/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

export default function DashCardListChats({
  listContactName,
  // listContactId,
  // listContactAvatar,
}) {
  return (
    <>
      <div className="pt-3 flex justify-between">
        <div className="flex-col">
          <Link to="/">{listContactName}</Link>
        </div>
      </div>
    </>
  )
}

DashCardListChats.propTypes = {
  listContactName: PropTypes.string.isRequired,
}
