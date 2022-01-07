/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
import React from "react"
import { useDispatch } from "react-redux"
import PropTypes from "prop-types"
import Icon from "../Icon"
import { deleteComment } from "../../../redux/actions/libraryActions"

function Comment({ comment, id }) {
  const dispatch = useDispatch()
  return (
    <div className="flex px-5 pb-1 pt-3 items-center">
      <img
        className="w-10 h-10 rounded-full mr-2"
        src={`${comment?.owner?.imageUrl}`}
        alt="profile"
      />
      <div className="flex justify-between bg-grey-super_light w-full rounded-full items-center p-2">
        <p className="text-sm text-grey-dark pl-1">{comment?.body}</p>
        <button
          type="button"
          onClick={() => dispatch(deleteComment(comment._id, id))}
        >
          <Icon iconName="close" iconStyle="text-grey-dark" />
        </button>
      </div>
    </div>
  )
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
}

export default Comment
