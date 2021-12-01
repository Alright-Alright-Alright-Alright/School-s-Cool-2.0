import React from "react"
import PropTypes from "prop-types"
import TopicDashcard from "../../core/topicDashCard/TopicDashcard"

function TopicContentRight({ topic }) {
  console.log(topic)

  return (
    <div className="place-items-start max-w-xs">
      <TopicDashcard
        topicDashCardTitle="Topic Members"
        topicDashCardStyle="bg-aqua"
        topicDashCardData={topic?.members}
      />
    </div>
  )
}

TopicContentRight.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  topic: PropTypes.object.isRequired,
}

export default TopicContentRight
