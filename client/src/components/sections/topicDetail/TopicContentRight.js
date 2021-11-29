import React from "react"
import PropTypes from "prop-types"
import Dashcard from "../../core/dashcard/Dashcard"

function TopicContentRight({ topic }) {
  return (
    <div className="place-items-start max-w-xs">
      <Dashcard
        dashCardTitle="Topic Members"
        dashCardStyle="bg-aqua"
        dashCardData={topic.members}
      />
    </div>
  )
}

TopicContentRight.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  topic: PropTypes.object.isRequired,
}

export default TopicContentRight
