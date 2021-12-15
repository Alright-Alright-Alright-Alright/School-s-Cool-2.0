/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
import React, { useState } from "react"
import PropTypes from "prop-types"
// import Icon from "../Icon"
import { useSelector } from "react-redux"
import DropDownMenu from "../DropDownMenu"
import dashcardDropdownMenu from "../../../data/dashcardDropdownMenu.json"
// import CommentForm from "./CommentForm"
import Icon from "../Icon"
import EditCommentForm from "./EditCommentForm"

function Comment({ comment }) {
  // eslint-disable-next-line no-unused-vars
  // const [option, setOption] = useState("")
  const [commentBody, setCommentBody] = useState("")

  const [showEditForm, setShowEditForm] = useState(false)
  const [showDeleteForm, setShowDeleteForm] = useState(false)
  const user = useSelector((state) => state.user.singleUser)

  const onSelectFilter = (item) => {
    if (item === "Edit") {
      console.log(item)
      // setShowEditForm(!showEditForm)
    } else if (item === "Delete") {
      console.log(item)
      // setShowDeleteForm(!showDeleteForm)
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setShowEditForm(false)
    setCommentBody("")
  }

  const editCommentForm = (
    <form
      className="flex px-5 pb-1 pt-3 items-center"
      onSubmit={handleFormSubmit}
    >
      <img
        className="w-10 h-10 rounded-full mr-2"
        src={`${comment?.owner?.imageUrl}`}
        alt="profile"
      />
      <div className="flex justify-between bg-grey-light w-full rounded-full items-center ">
        <input
          className=" bg-grey-light w-full pl-3 mr-4 rounded-full text-sm placeholder-grey-dark focus:ring-grey-dark"
          type="text"
          placeholder={comment?.body}
          value={commentBody}
          onChange={(e) => setCommentBody(e.target.value)}
        />
        {commentBody && (
          <div className="pr-2">
            <button type="submit">
              <Icon
                iconName="follow"
                iconStyle="fill-inactive text-grey-dark"
              />
            </button>
          </div>
        )}

        {user?._id === comment?.owner?._id && (
          <DropDownMenu
            data={dashcardDropdownMenu.comment}
            selectFilter={onSelectFilter}
          />
        )}
      </div>
    </form>
  )

  const commentContent = (
    <div className="flex px-5 pb-1 pt-3 items-center">
      <img
        className="w-10 h-10 rounded-full mr-2"
        src={`${comment?.owner?.imageUrl}`}
        alt="profile"
      />
      <div className="flex justify-between bg-grey-super_light w-full rounded-full items-center ">
        <p className="text-sm text-grey-dark p-2 pl-3">{comment?.body}</p>
        {user?._id === comment?.owner?._id && (
          <DropDownMenu
            data={dashcardDropdownMenu.comment}
            selectFilter={onSelectFilter}
          />
        )}
      </div>
    </div>
  )

  return (
    <div>
      {showEditForm ? (
        <EditCommentForm showEditForm={showEditForm} />
      ) : (
        commentContent
      )}
    </div>
  )
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
}

export default Comment
