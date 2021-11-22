import React, { useState } from "react"
import ActivityCard from "../../core/activityCard/ActivityCard"
import Button from "../../core/Button"

function ActivityFeed() {
  const [filter, setFilter] = useState("btnPrimaryStyle")

  return (
    <div className="mt-3">
      <div className="sm:flex md:place-content-between">
        <div>
          <h1 className="text-lg text-center mb-3 md:mb-0 pl-3">
            Activity Feed
          </h1>
        </div>
        <div className="space-x-4 md:place-content-between text-center pr-3">
          <Button
            buttonName="All activity"
            buttonStyle={filter}
            // btnPrimary={filter}
            onClick={() => setFilter("btnPrimaryStyle")}
          />
          <Button
            buttonName="Followed activity"
            buttonStyle={
              filter === "btnSecondaryStyle"
                ? "btnPrimaryStyle"
                : "btnSecondaryStyle"
            }
            onClick={() => setFilter("btnSecondaryStyle")}
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
