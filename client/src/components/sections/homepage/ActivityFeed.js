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
    const activitiesCurrentUserCanSee = []

    activitiesMemo.forEach((activity) => {
      if (activity?.topic?.isPrivate === false) {
        activitiesCurrentUserCanSee.push(activity)
      }
    })
    const privateTopics = activitiesMemo.filter(
      (activity) => activity?.topic?.isPrivate === true
    )
    privateTopics.map((activity) =>
      activity.topic.members.forEach((member) => {
        if (member === user._id) {
          activitiesCurrentUserCanSee.push(activity)
        }
      })
    )

    activitiesMemo.forEach((activity) => {
      if (activity?.event?.isPrivate === false) {
        activitiesCurrentUserCanSee.push(activity)
      }
    })
    const privateEvents = activitiesMemo.filter(
      (activity) => activity?.event?.isPrivate === true
    )
    privateEvents.map((activity) =>
      activity.event.members.forEach((member) => {
        if (member === user._id) {
          activitiesCurrentUserCanSee.push(activity)
        }
      })
    )

    return activitiesCurrentUserCanSee
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
      <div className="sm:flex md:place-content-between pb-3">
        <div>
          <h1 className="text-lg text-center mb-3 md:mb-0 pl-3">
            {t("activity_feed")}
          </h1>
        </div>
        <div className="flex pl-3 lg:pl-0 space-x-4 md:place-content-between text-center pr-3">
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
