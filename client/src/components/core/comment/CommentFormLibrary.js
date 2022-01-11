/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { submitComment } from "../../../redux/actions/libraryActions"

function CommentForm({ singleFile }) {
  const [commentBody, setCommentBody] = useState("")
  const user = useSelector((state) => state.user.singleUser)
  const dispatch = useDispatch()

  const handleFormSubmit = (e) => {
    e.preventDefault()
    dispatch(submitComment(commentBody, singleFile._id))
    setCommentBody("")
  }

  return (
    <form className="flex px-5 pb-5 pt-3" onSubmit={handleFormSubmit}>
      <img
        className="w-10 h-10 rounded-full mr-2"
        src={user.imageUrl}
        alt="profile"
      />
      <input
        className=" border-grey-super_light border-2 bg-white w-full rounded-full text-sm pl-3 placeholder-grey-dark"
        type="text"
        placeholder="Write a comment"
        value={commentBody}
        onChange={(e) => setCommentBody(e.target.value)}
      />
    </form>
  )
}

export default CommentForm
