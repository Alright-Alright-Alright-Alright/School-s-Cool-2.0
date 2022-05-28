/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */

import React, { useState } from "react"
import PropTypes from "prop-types"
import Icon from "../../Icon"
import TopicDashCardListItem from "./TopicDashCardListItem"
import DropDownMenu from "../../DropDownMenu"

export default function TopicDashcard({
  topicDashCardData,
  topicDashCardTitle,
  topicDashCardStyle,
  dropdownMenuData,
  users,
}) {
  const [expandDashCard, setExpandDashCard] = useState(false)
  const [filter, setFilter] = useState(dropdownMenuData?.dropDownItems[0])

  const onSelectFilter = (item) => {
    setFilter(item)
  }

  const firstThreeItems = users
    .slice(0, 3)
    .map((item) => (
      <TopicDashCardListItem
        key={item?._id}
        listItemUserId={item?._id}
        listItemFirstName={item?.firstName}
        listItemLastName={item?.lastName}
        topicDashCardData={topicDashCardData}
      />
    ))

  const allItems = users.map((item) => (
    <TopicDashCardListItem
      key={item?._id}
      listItemUserId={item?._id}
      listItemFirstName={item?.firstName}
      listItemLastName={item?.lastName}
      topicDashCardData={topicDashCardData}
    />
  ))

  return (
    <div className="w-full py-3">
      <div className="flex flex-col w-full shadow-lg rounded-bl-3xl rounded-br-3xl bg-white rounded-r-3xl">
        <div
          className={`w-full ${topicDashCardStyle} h-dashcardtitle rounded-r-full rounded-bl-full`}
        >
          <div className="flex justify-between pt-3 text-white">
            <p className="text-lg pl-4">{topicDashCardTitle}</p>
            <div className="flex flex-row">
              <h2 className="text-base pr-4">Filter</h2>
              <DropDownMenu
                data={dropdownMenuData}
                filter={filter}
                selectFilter={onSelectFilter}
              />
            </div>
          </div>
        </div>
        <div className="flex-col pl-4 pr-4 max-h-96 overflow-y-auto scrollBar">
          <div className="divide-y-2 divide-primary">
            {expandDashCard ? allItems : firstThreeItems}
            <div />
          </div>
        </div>
        <div className="min-h-dashcardrow flex justify-center pt-3">
          <button
            type="button"
            onClick={() => setExpandDashCard(!expandDashCard)}
          >
            {expandDashCard ? (
              <Icon iconName="collapse" />
            ) : (
              <Icon iconName="expand" />
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

TopicDashcard.defaultProps = {
  topicDashCardData: [],
  users: [],
}

TopicDashcard.propTypes = {
  topicDashCardData: PropTypes.array,
  topicDashCardTitle: PropTypes.string.isRequired,
  topicDashCardStyle: PropTypes.string.isRequired,
  dropdownMenuData: PropTypes.shape({
    bgColorOnHover: PropTypes.string,
    dropDownItems: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  users: PropTypes.arrayOf(PropTypes.object),
}
