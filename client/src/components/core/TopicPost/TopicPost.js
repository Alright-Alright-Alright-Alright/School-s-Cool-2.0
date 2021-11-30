/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-unused-prop-types */
import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import { useSelector, useDispatch } from "react-redux"
import Comment from "../comment/Comment"
import CommentForm from "../comment/CommentForm"
import { getPostById } from "../../../redux/actions/postActions"

function TopicPost({ post }) {
  const postById = useSelector((state) => state.posts.post)
  const dispatch = useDispatch()

  dayjs.extend(relativeTime)

  useEffect(() => {
    dispatch(getPostById(post._id))
  }, [dispatch, post._id])

  return (
    <div className="rounded-bl-2xl rounded-br-2xl rounded-r-2xl bg-white shadow-lg m-3">
      <div>
        <div className="flex justify-between p-3">
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-2"
              src={postById?.owner?.imageUrl}
              alt="profile"
            />
            <p className="text-base">
              {postById?.owner?.firstName} {postById?.owner?.lastName}
            </p>
            <p className="text-base pl-3 text-grey-medium_light">
              Commented on
            </p>
            <Link
              to={`/topics/${postById?.topic?._id}`}
              className="text-base pl-3"
            >
              {post.topic?.title}
            </Link>
          </div>
          <div className="flex items-center">
            <p className="text-base">{dayjs(post.createdAt).fromNow()}</p>
          </div>
        </div>
      </div>
      <div className="">
        <p className="border-b-2 border-grey-light m-3 pb-3 text-base">
          {post.body}
        </p>
      </div>
      <div className="flex justify-end pt-1 pr-3">
        <p className="text-base">Icons</p>
      </div>
      {postById?.comments?.map((commentData) => (
        <Comment key={commentData._id} comment={commentData} />
      ))}
      <CommentForm postId={post._id} />
    </div>
  )
}

TopicPost.propTypes = {
  post: PropTypes.object.isRequired,
}

export default TopicPost
