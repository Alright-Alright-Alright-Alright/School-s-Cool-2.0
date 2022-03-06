/* eslint-disable react/forbid-prop-types */
import React from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
import TopicDashcard from "../../core/topics/topicDashCard/TopicDashcard"
import dashcardDropdownMenu from "../../../data/dashcardDropdownMenu.json"

function TopicContentRight({ topic, users }) {
  const { t } = useTranslation()
  return (
    <div className="place-items-start max-w-xs hidden lg:block">
      <TopicDashcard
        topicDashCardTitle={t("topics.dash_card_members")}
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
