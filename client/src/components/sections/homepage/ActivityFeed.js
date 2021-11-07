import React, { useState } from "react"
import ActivityCard from "../../core/activityCard/ActivityCard"
import Button from "../../core/Button"

function ActivityFeed() {
  const [filter, setFilter] = useState(true)

  return (
    <div className="mt-3">
      <div className="sm:flex md:place-content-between">
        <div>
          <h1 className="text-xl text-center mb-3 md:mb-0">Activity Feed</h1>
        </div>
        <div className="space-x-4 md:place-content-between text-center">
          <Button
            buttonName="All activity"
            btnPrimary={filter}
            onClick={() => setFilter(!filter)}
          />
          <Button
            buttonName="Followed activity"
            btnPrimary={!filter}
            onClick={() => setFilter(!filter)}
          />
        </div>
      </div>
      <ActivityCard />
      <ActivityCard />
      <ActivityCard />
    </div>
  )
}

export default ActivityFeed
