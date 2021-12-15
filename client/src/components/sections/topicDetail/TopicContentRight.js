/* eslint-disable react/forbid-prop-types */
import React from "react"
import PropTypes from "prop-types"
import TopicDashcard from "../../core/topicDashCard/TopicDashcard"
import dashcardDropdownMenu from "../../../data/dashcardDropdownMenu.json"

function TopicContentRight({ topic, users }) {
  return (
    <div className="place-items-start max-w-xs hidden lg:block">
      <TopicDashcard
        topicDashCardTitle="Topic Members"
        topicDashCardStyle="bg-aqua"
        topicDashCardData={topic?.members}
        users={users?.users}
        dropdownMenuData={dashcardDropdownMenu.topicMembers}
      />
    </div>
  )
}

TopicContentRight.propTypes = {
  topic: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
}

export default TopicContentRight
