/* eslint-disable no-underscore-dangle */
import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
import { submitComment } from "../../../redux/actions/postActions"

function CommentForm({ postId }) {
  const [commentBody, setCommentBody] = useState("")
  const { t } = useTranslation()
  const user = useSelector((state) => state.user.singleUser)
  const dispatch = useDispatch()

  const handleFormSubmit = (e) => {
    e.preventDefault()
    dispatch(submitComment(user._id, commentBody, postId))
    setCommentBody("")
  }

  return (
    <form className="flex px-5 pb-5 pt-3" onSubmit={handleFormSubmit}>
      <img
        className="w-10 h-10 rounded-full mr-2"
        src={`${user?.imageUrl}`}
        alt="profile"
      />
      <input
        className=" border-grey-super_light border-2 bg-white w-full rounded-full text-sm pl-3 placeholder-grey-dark"
        type="text"
        placeholder={t("comment_reaction_field_placeholder")}
        value={commentBody}
        onChange={(e) => setCommentBody(e.target.value)}
      />
    </form>
  )
}

CommentForm.propTypes = {
  postId: PropTypes.string.isRequired,
}

export default CommentForm
