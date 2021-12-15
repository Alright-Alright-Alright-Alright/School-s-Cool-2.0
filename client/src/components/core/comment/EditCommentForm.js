/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-underscore-dangle */
import React, { useState } from "react"
import PropTypes from "prop-types"
// import Icon from "../Icon"
// import { useSelector } from "react-redux"
import DropDownMenu from "../DropDownMenu"
import dashcardDropdownMenu from "../../../data/dashcardDropdownMenu.json"
// import CommentForm from "./CommentForm"
import Icon from "../Icon"

function EditCommentForm({ comment, showEditForm }) {
  const [commentBody, setCommentBody] = useState("")

  const handleFormSubmit = (e) => {
    e.preventDefault()
    // setShowEditForm(false)
    setCommentBody("")
  }

  return (
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

        {showEditForm && (
          <DropDownMenu
            data={dashcardDropdownMenu.comment}
            // selectFilter={onSelectFilter}
          />
        )}
      </div>
    </form>
  )
}

EditCommentForm.propTypes = {
  comment: PropTypes.object.isRequired,
  showEditForm: PropTypes.bool.isRequired,
}

export default EditCommentForm
