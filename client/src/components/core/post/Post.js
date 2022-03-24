/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-unused-prop-types */
import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import { useSelector, useDispatch } from "react-redux"
import { t } from "i18next"
import Comment from "../comment/Comment"
import CommentForm from "../comment/CommentForm"
import {
  likePost,
  unlikePost,
  deletePost,
  updatePost,
} from "../../../redux/actions/postActions"
import Icon from "../Icon"
import DropDownMenu from "../DropDownMenu"
import ReadOnlyPostRow from "./ReadOnlyPostRow"
import EditablePostRow from "./EditablePostRow"

function Post({ post, parentId, comments }) {
  const [showMoreComments, setShowMoreComments] = useState(false)
  const [showEditPost, setShowEditPost] = useState(false)
  const [newPostBody, setNewPostBody] = useState(post.body)
  const user = useSelector((state) => state.user.singleUser)
  const dispatch = useDispatch()

  dayjs.extend(relativeTime)

  // Get i18Next locale from cookies
  const localeFromCookies = `; ${document.cookie}`
    .split(`; i18next=`)
    .pop()
    .split(";")[0]

  const handleLike = () => {
    dispatch(likePost(post._id, user._id))
  }

  const handleUnlike = () => {
    dispatch(unlikePost(post._id, user._id))
  }

  const handleEditPost = (e) => {
    setNewPostBody(e.target.value)
  }

  const handleSubmitEditPost = () => {
    dispatch(
      updatePost(post._id, {
        body: newPostBody,
      })
    )
    setShowEditPost(false)
  }

  const firstThreeComments = comments
    .slice(0, 3)
    .map((commentData) => (
      <Comment key={commentData._id} comment={commentData} id={post._id} />
    ))

  const allComments = comments.map((commentData) => (
    <Comment key={commentData._id} comment={commentData} id={post._id} />
  ))

  const handleSelectAction = (actionName) => {
    if (actionName === "edit") {
      setShowEditPost(!showEditPost)
    }
    if (actionName === "delete") {
      dispatch(deletePost(post._id, parentId))
    }
  }

  return (
    <div className="relative rounded-bl-2xl rounded-br-2xl rounded-r-2xl bg-white shadow-lg m-3">
      {user?._id === post?.owner?._id || user.role === "ADMIN" ? (
        <DropDownMenu
          position="absolute top-6 right-0"
          data={{
            bgColorOnHover: "aqua-light",
            dropDownItems: ["edit", "delete"],
          }}
          selectFilter={handleSelectAction}
        />
      ) : null}
      <div>
        <div className="flex justify-between flex-wrap p-3 mr-6">
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-2"
              src={post?.owner?.imageUrl}
              alt="profile"
            />
            <p className="text-base">
              {post?.owner?.firstName} {post?.owner?.lastName}
            </p>
            <p className="text-base pl-3 text-grey-medium_light">
              {t("topics.topic_post_commentted_on")}
            </p>
            <Link to={`/topics/${post?.topic?._id}`} className="text-base pl-3">
              {post.topic?.title || post.event?.title}
            </Link>
          </div>
          <div className="flex items-center mt-2 sm:mt-0">
            <p className="text-base">
              {dayjs(post.createdAt).locale(localeFromCookies).fromNow()}
            </p>
          </div>
        </div>
      </div>
      <div className="">
        {/* <p className="border-b-2 border-grey-light m-3 pb-3 text-base">
          {ReactHtmlParser(post.body)}
        </p> */}
        {showEditPost ? (
          <EditablePostRow
            postBody={post.body}
            handleEditPost={handleEditPost}
            handleSubmitEditPost={handleSubmitEditPost}
          />
        ) : (
          <ReadOnlyPostRow postBody={post.body} />
        )}
      </div>
      <div className="flex justify-end items-center pt-1 pr-3 space-x-2">
        {/* <div className="flex">
          <Icon iconName="file" />
          <span>00</span>
        </div> */}
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

Post.defaultProps = {
  parentId: "",
  onDeletePost: () => {},
}

Post.propTypes = {
  parentId: PropTypes.string,
  post: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired,
  onDeletePost: PropTypes.func,
}

export default Post
