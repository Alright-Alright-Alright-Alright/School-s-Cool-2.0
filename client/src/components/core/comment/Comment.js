/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
import React from "react"
import PropTypes from "prop-types"
import Icon from "../Icon"

function Comment({ comment, singleFile }) {
  return (
    <div className="flex px-5 pb-1 pt-3 items-center">
      <img
        className={
          singleFile
            ? `w-6 h-6 rounded-full mr-2`
            : `w-10 h-10 rounded-full mr-2`
        }
        src={`${
          singleFile ? singleFile.owner.imageUrl : comment?.owner?.imageUrl
        }`}
        alt="profile"
      />
      <div
        className={
          singleFile
            ? `flex justify-between bg-grey-super_light w-full rounded-full items-center p-1`
            : `flex justify-between bg-grey-super_light w-full rounded-full items-center p-2`
        }
      >
        <p className="text-sm text-grey-dark pl-1">{comment?.body}</p>
        <Icon iconName="close" iconStyle="text-grey-dark" />
      </div>
    </div>
  )
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
}

export default Comment
