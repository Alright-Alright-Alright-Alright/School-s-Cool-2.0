import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import ReactHtmlParser from "react-html-parser"
import { useSelector, useDispatch } from "react-redux"
import Comment from "../comment/Comment"
import CommentForm from "../comment/CommentForm"
import { likePost, unlikePost } from "../../../redux/actions/postActions"
import {
  getAllActivities,
  getFollowedActivities,
} from "../../../redux/actions/activityActions"
import Icon from "../Icon"

dayjs.extend(relativeTime)

function ActivityCard({ activity }) {
  const [showMoreComments, setShowMoreComments] = useState(false)
  const user = useSelector((state) => state.user.singleUser)
  const dispatch = useDispatch()

  const handleLike = () => {
    dispatch(likePost(activity._id, user._id))
    dispatch(getAllActivities())
    dispatch(getFollowedActivities())
  }

  const handleUnlike = () => {
    dispatch(unlikePost(activity._id, user._id))
    dispatch(getAllActivities())
    dispatch(getFollowedActivities())
  }

  const handleSubmitComment = () => {
    dispatch(getAllActivities())
    dispatch(getFollowedActivities())
  }

  const firstThreeComments = activity.comments
    .slice(0, 3)
    .map((commentData) => (
      <Comment key={commentData._id} comment={commentData} />
    ))

  const allComments = activity.comments.map((commentData) => (
    <Comment key={commentData._id} comment={commentData} />
  ))

  const activityType = activity.topic ? "topic" : "event"

  return (
    <div className="rounded-bl-2xl rounded-br-2xl rounded-r-2xl bg-white shadow-lg m-3">
      <div className="p-3">
        <Link to={`/${activityType}s/${activity[activityType]?._id}`}>
          <img
            className="object-cover w-full max-h-40 rounded-bl-2xl rounded-br-2xl rounded-r-2xl"
            src={activity[activityType]?.bannerImage}
            alt="banner"
          />
        </Link>
      </div>
      <div>
        <div className="flex justify-between pl-3 pr-3">
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-2"
              src={activity.owner?.imageUrl}
              alt="profile"
            />
            <p className="text-base">
              {activity.owner?.firstName} {activity.owner?.lastName}
            </p>
            <p className="text-base pl-3 text-grey-medium_light">Posted on</p>
            <Link
              to={`/${activityType}s/${activity[activityType]?._id}`}
              className="text-base pl-3"
            >
              {activity[activityType]?.title}
            </Link>
          </div>
          <div className="hidden lg:block items-center">
            <p className="text-base">{dayjs(activity.createdAt).fromNow()}</p>
          </div>
        </div>
        <div className="flex items-center lg:hidden pl-3 pt-3">
          <p className="text-base text-grey-medium_light">
            {dayjs(activity.createdAt).fromNow()}
          </p>
        </div>
      </div>
      <div className="">
        <p className="border-b-2 border-grey-light m-3 pb-3 text-base">
          {ReactHtmlParser(activity.body)}
        </p>
      </div>
      <div className="flex justify-end items-center pt-1 pr-3 space-x-2">
        <div className="flex">
          <Icon iconName="file" />
          <span>00</span>
        </div>
        <div className="flex">
          {/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */}
          {activity.likedBy?.includes(user?._id) ? (
            <button type="button" onClick={handleUnlike}>
              <Icon iconName="like" iconStyle="fill-active" />
            </button>
          ) : (
            <button type="button" onClick={handleLike}>
              <Icon iconName="like" iconStyle="fill-inactive" />
            </button>
          )}
          <span>{activity.likedBy.length}</span>
        </div>
        <div className="flex">
          <Icon iconName="message" />
          <span>{activity.comments.length}</span>
        </div>
      </div>
      {showMoreComments ? allComments : firstThreeComments}
      {activity.comments.length > 3 && (
        <div className="flex justify-center pt-3">
          <button
            className="hover:bg-grey-super_light rounded-full p-1 justify-center items-center"
            type="button"
            onClick={() => setShowMoreComments(!showMoreComments)}
          >
            {activity.comments.length > 3 && !showMoreComments ? (
              <Icon iconName="expand" />
            ) : null}
            {showMoreComments && <Icon iconName="collapse" />}
          </button>
        </div>
      )}
      <CommentForm
        postId={activity._id}
        onSubmitComment={() => handleSubmitComment}
      />
    </div>
  )
}

export default ActivityCard

ActivityCard.defaultProps = {
  activity: {},
}

ActivityCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  activity: PropTypes.object,
}
