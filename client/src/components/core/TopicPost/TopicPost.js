/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-unused-prop-types */
import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import { useSelector, useDispatch } from "react-redux"
import Comment from "../comment/Comment"
import CommentForm from "../comment/CommentForm"
import {
  getAllPosts,
  getPostById,
  likePost,
  unlikePost,
} from "../../../redux/actions/postActions"
import Icon from "../Icon"

function TopicPost({ post, topicId, comments }) {
  const [showMoreComments, setShowMoreComments] = useState(false)
  const postById = useSelector((state) => state.posts.singlePost)
  const user = useSelector((state) => state.user.singleUser)
  const dispatch = useDispatch()
  dayjs.extend(relativeTime)

  const handleLike = () => {
    dispatch(likePost(post._id, user._id))
  }

  const handleUnlike = () => {
    dispatch(unlikePost(post._id, user._id))
  }

  const firstThreeComments = comments
    .slice(0, 3)
    .map((commentData) => (
      <Comment key={commentData._id} comment={commentData} />
    ))

  const allComments = comments.map((commentData) => (
    <Comment key={commentData._id} comment={commentData} />
  ))

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
      <div className="flex justify-end items-center pt-1 pr-3 space-x-2">
        <div className="flex">
          <Icon iconName="file" />
          <span>00</span>
        </div>
        <div className="flex">
          {post?.likedBy?.includes(user?._id) ? (
            <button type="button" onClick={handleUnlike}>
              <Icon iconName="like" iconStyle="fill-active" />
            </button>
          ) : (
            <button type="button" onClick={handleLike}>
              <Icon iconName="like" iconStyle="fill-inactive" />
            </button>
          )}
          <span>{post?.likedBy?.length}</span>
        </div>
        <div className="flex">
          <Icon iconName="message" />
          <span>{post?.comments?.length}</span>
        </div>
      </div>
      {showMoreComments ? allComments : firstThreeComments}
      {comments.length > 3 && (
        <div className="flex justify-center pt-3">
          <button
            className="hover:bg-grey-super_light rounded-full p-1 justify-center items-center"
            type="button"
            onClick={() => setShowMoreComments(!showMoreComments)}
          >
            {comments.length > 3 && !showMoreComments ? (
              <Icon iconName="expand" />
            ) : null}
            {showMoreComments && <Icon iconName="collapse" />}
          </button>
        </div>
      )}
      <CommentForm postId={post._id} />
    </div>
  )
}

TopicPost.propTypes = {
  topicId: PropTypes.string.isRequired,
  post: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired,
}

export default TopicPost
