/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import PropTypes from "prop-types"
import { useParams } from "react-router-dom"
import {
  submitComment,
  getPostById,
  getAllPosts,
} from "../../../redux/actions/postActions"

function CommentForm({ postId }) {
  const [commentBody, setCommentBody] = useState("")
  const user = useSelector((state) => state.user.singleUser)
  const singlePost = useSelector((state) => state.posts.singlePost)
  const dispatch = useDispatch()

  const params = useParams()

  const handleFormSubmit = (e) => {
    e.preventDefault()
    dispatch(submitComment(user._id, commentBody, postId))
    dispatch(getAllPosts(params.topicId))
  }

  useEffect(() => {
    dispatch(getAllPosts(params.topicId))
    dispatch(getPostById(postId))
  }, [dispatch])

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
        placeholder="Write a comment"
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
