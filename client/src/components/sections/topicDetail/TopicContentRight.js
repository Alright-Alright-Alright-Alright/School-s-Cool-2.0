import React from "react"
import Dashcard from "../../core/dashcard/Dashcard"

function TopicContentRight() {
  return (
    <div className="place-items-start max-w-xs">
      <Dashcard
        dashCardTitle="Topic Members"
        dashCardStyle="bg-aqua"
        dashCardData={[]}
      />
    </div>
  )
}

export default TopicContentRight
