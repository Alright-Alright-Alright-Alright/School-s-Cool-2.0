/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from "react"
import PropTypes from "prop-types"
import Icon from "../Icon"

function Comment({ comment }) {
  return (
    <div className="flex px-5 pb-1 pt-3 items-center">
      <img
        className="w-10 h-10 rounded-full mr-2"
        src={`${comment?.owner?.imageUrl}`}
        alt="profile"
      />
      <div className="flex justify-between bg-grey-super_light w-full rounded-full items-center p-2">
        <p className="text-sm text-grey-dark pl-1">{comment?.body}</p>
        <Icon iconName="close" iconStyle="text-grey-dark" />
      </div>
    </div>
  )
}

Comment.defaultProps = {
  comment: "This is a test comment",
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
}

export default Comment
