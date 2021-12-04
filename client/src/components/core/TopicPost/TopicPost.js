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
import { getAllPosts, getPostById } from "../../../redux/actions/postActions"
import Icon from "../Icon"

function TopicPost({ post, topicId, comments }) {
  const [postLiked, setPostLiked] = useState(false)
  const postById = useSelector((state) => state.posts.post)
  const singleTopic = useSelector((state) => state.topics.singleTopic)
  const posts = useSelector((state) => state.posts.posts)

  const dispatch = useDispatch()

  dayjs.extend(relativeTime)

  useEffect(() => {
    dispatch(getPostById(post._id))
    dispatch(getAllPosts(topicId))
  }, [dispatch, post._id, topicId])

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
          <button type="button" onClick={() => setPostLiked(!postLiked)}>
            {postLiked ? (
              <Icon iconName="like" iconStyle="fill-active" />
            ) : (
              <Icon iconName="like" iconStyle="fill-inactive" />
            )}
          </button>
          <span>{postById?.likedBy?.length}</span>
        </div>
        <div className="flex">
          <Icon iconName="message" />
          <span>{postById?.comments?.length}</span>
        </div>
      </div>
      {comments?.map((commentData) => (
        <Comment key={commentData._id} comment={commentData} />
      ))}
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
