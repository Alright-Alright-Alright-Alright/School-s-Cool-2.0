import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  getAllActivities,
  getFollowedActivities,
} from "../../../redux/actions/activityActions"
import ActivityCard from "../../core/activityCard/ActivityCard"
import Button from "../../core/Button"

function ActivityFeed() {
  const [filter, setFilter] = useState(false)

  const allActivities = useSelector((state) => state.activities.allActivities)
  const followedActivities = useSelector(
    (state) => state.activities.followedActivities
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllActivities())
    dispatch(getFollowedActivities())
  }, [dispatch])

  const shownActivities = filter ? followedActivities : allActivities

  return (
    <div className="mt-3 ">
      <div className="sm:flex md:place-content-between ">
        <div>
          <h1 className="text-lg text-center mb-3 md:mb-0 pl-3">
            Activity Feed
          </h1>
        </div>
        <div className="space-x-4 md:place-content-between text-center pr-3">
          <Button
            buttonName="All activity"
            buttonStyle={filter ? "btnPrimaryStyle" : "btnSecondaryStyle"}
            onClick={() => setFilter(false)}
          />
          <Button
            buttonName="Followed activity"
            buttonStyle={filter ? "btnSecondaryStyle" : "btnPrimaryStyle"}
            onClick={() => setFilter(true)}
          />
        </div>
      </div>
      {/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */}
      {shownActivities.map((activity) => (
        <ActivityCard key={activity._id} activity={activity} />
      ))}
    </div>
  )
}

export default ActivityFeed
