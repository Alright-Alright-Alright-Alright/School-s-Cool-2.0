/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useMemo } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"
import {
  getAllActivities,
  getFollowedActivities,
} from "../../../redux/actions/activityActions"
import ActivityCard from "../../core/activityCard/ActivityCard"
import Button from "../../core/Button"
import ActivityCardSkeleton from "../../core/skeleton/ActivityCardSkeleton"

function ActivityFeed() {
  const [filter, setFilter] = useState(false)
  const { t } = useTranslation()
  const allActivities = useSelector((state) => state.activities.allActivities)
  const user = useSelector((state) => state.user.singleUser)
  const followedActivities = useSelector(
    (state) => state.activities.followedActivities
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllActivities())
    dispatch(getFollowedActivities())
  }, [dispatch])

  const activitiesMemo = useMemo(() => allActivities, [allActivities])

  const checkIfIsPrivate = () => {
    const privateTopics = activitiesMemo.filter(
      (activity) => activity?.topic?.isPrivate === true
    )
    const privateEvents = activitiesMemo.filter(
      (activity) => activity?.event?.isPrivate === true
    )
    const privateTopicsMembers = privateTopics.map((topic) =>
      topic.topic.members.map((member) => member === user._id && true)
    )
    const privateEventsMembers = privateTopics.map((event) =>
      event?.event?.members.map((member) => member === user._id && true)
    )
    return activitiesMemo.filter(
      (post) =>
        post?.topic?.isPrivate === false ||
        post?.event?.isPrivate === false ||
        (post?.topic?.isPrivate === true &&
          post?.topic?.owner._id === user._id) ||
        (post?.event?.isPrivate === true &&
          post?.event?.owner._id === user._id) ||
        post?.comments?.owner?._id === user._id ||
        privateTopicsMembers.join().includes(true) ||
        privateEventsMembers.join().includes(true)
    )
  }

  const shownActivities = filter ? followedActivities : checkIfIsPrivate()

  if (shownActivities.length === 0) {
    return (
      <div className="container">
        <ActivityCardSkeleton />
        <ActivityCardSkeleton />
      </div>
    )
  }

  return (
    <div className="mt-3">
      {/* {console.log(checkIfIsPrivate())} */}
      <div className="sm:flex md:place-content-between ">
        <div>
          <h1 className="text-lg text-center mb-3 md:mb-0 pl-3">
            {t("activity_feed")}
          </h1>
        </div>
        <div className="space-x-4 md:place-content-between text-center pr-3">
          <Button
            buttonName={t("button_all_activity_feed")}
            buttonStyle={filter ? "btnPrimaryStyle" : "btnSecondaryStyle"}
            onClick={() => setFilter(false)}
          />
          <Button
            buttonName={t("button_followed_activity_feed")}
            buttonStyle={filter ? "btnSecondaryStyle" : "btnPrimaryStyle"}
            onClick={() => setFilter(true)}
          />
        </div>
      </div>
      {/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */}
      <div className="h-screen overflow-y-auto scrollBar">
        {shownActivities.map((activity) => (
          <ActivityCard
            key={activity._id}
            activity={activity}
            commentFather={activity._id}
          />
        ))}
      </div>
    </div>
  )
}

export default ActivityFeed
