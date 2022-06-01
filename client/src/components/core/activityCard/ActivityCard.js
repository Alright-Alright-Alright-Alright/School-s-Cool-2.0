/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import ReactHtmlParser from "react-html-parser";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import Linkify from "react-linkify";
import Comment from "../comment/Comment";
import CommentForm from "../comment/CommentForm";
import { likePost, unlikePost } from "../../../redux/actions/postActions";
import {
  getAllActivities,
  getFollowedActivities,
} from "../../../redux/actions/activityActions";
import Icon from "../Icon";

dayjs.extend(relativeTime);

function ActivityCard({ activity, commentFather }) {
  const [showMoreComments, setShowMoreComments] = useState(false);
  const { t } = useTranslation();
  const user = useSelector((state) => state.user.singleUser);
  const dispatch = useDispatch();

  // Get i18Next locale from cookies
  const localeFromCookies = `; ${document.cookie}`
    .split(`; i18next=`)
    .pop()
    .split(";")[0];

  const handleLike = () => {
    dispatch(likePost(activity._id, user._id));
    dispatch(getAllActivities());
    dispatch(getFollowedActivities());
  };

  const handleUnlike = () => {
    dispatch(unlikePost(activity._id, user._id));
    dispatch(getAllActivities());
    dispatch(getFollowedActivities());
  };

  const handleSubmitComment = () => {
    dispatch(getAllActivities());
    dispatch(getFollowedActivities());
  };

  const firstThreeComments = activity.comments
    .slice(0, 3)
    .map((commentData) => (
      <Comment key={commentData._id} comment={commentData} id={commentFather} />
    ));

  const allComments = activity.comments.map((commentData) => (
    <Comment key={commentData._id} comment={commentData} id={commentFather} />
  ));

  const activityType = activity.topic ? "topic" : "event";

  return (
    <div className="rounded-bl-sm rounded-br-sm rounded-r-sm bg-white shadow-md mx-3 mb-3">
      <div className="p-3">
        <Link to={`/${activityType}s/${activity[activityType]?._id}`}>
          <img
            className="object-cover w-full max-h-40 rounded-bl-sm rounded-br-sm rounded-r-sm"
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
              <Link to={`/profile/${activity?.owner?._id}`}>
                {activity.owner?.firstName} {activity.owner?.lastName}
              </Link>
            </p>
            <p className="text-base pl-3 text-grey-medium_light">
              {t("activity_feed_card_action_type")}
            </p>
            <Link
              to={`/${activityType}s/${activity[activityType]?._id}`}
              className="text-base pl-3"
            >
              {activity[activityType]?.title}
            </Link>
          </div>
          <div className="hidden lg:block items-center">
            <p className="text-base">
              {dayjs(activity.createdAt).locale(localeFromCookies).fromNow()}
            </p>
          </div>
        </div>
        <div className="flex items-center lg:hidden pl-3 pt-3">
          <p className="text-base text-grey-medium_light">
            {dayjs(activity.createdAt).locale(localeFromCookies).fromNow()}
          </p>
        </div>
      </div>
      <div className="">
        <div className="border-b-2 border-grey-light m-3 pb-3 text-base">
          <Linkify
            componentDecorator={(decoratedHref, decoratedText, key) => (
              <a
                target="blank"
                href={decoratedHref}
                key={key}
                className=" text-sky hover:text-sky-light"
              >
                {decoratedText}
              </a>
            )}
          >
            {ReactHtmlParser(activity.body)}
          </Linkify>
        </div>
      </div>
      <div className="flex justify-end items-center pt-1 pr-3 space-x-2">
        <div className="flex">
          <Icon iconName="file" />
          <span>{activity[activityType]?.resources?.length}</span>
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
  );
}

export default ActivityCard;
