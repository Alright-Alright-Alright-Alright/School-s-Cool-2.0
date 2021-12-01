/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/require-default-props */
import React, { useState } from "react"
import PropTypes from "prop-types"
import Icon from "../Icon"
import DashCardListItem from "./TopicDashCardListItem"
import DropDownMenu from "../DropDownMenu"

export default function TopicDashcard({
  topicDashCardData,
  topicDashCardTitle,
  topicDashCardStyle,
}) {
  const [expandDashCard, setExpandDashCard] = useState(false)

  console.log(topicDashCardData)

  const firstThreeItems = topicDashCardData.slice(0, 3).map((item) => (
    <DashCardListItem
      key={item._id}
      listItemFirstName={item?.firstName}
      listItemLastName={item?.lastName}
      topicDashCardData={topicDashCardData}

      // listItemDate={item?.date}
      // listItemComments={item?.comment}
      // listItemUsers={item?.user}
    />
  ))

  const allItems = topicDashCardData.map((item) => (
    <DashCardListItem
      key={item?._id}
      listItemFirstName={item?.firstName}
      listItemLastName={item?.lastName}
      topicDashCardData={topicDashCardData}

      // listItemDate={item?.date}
      // listItemComments={item?.comment}
      // listItemUsers={item?.user}
    />
  ))

  return (
    <>
      <div className="flex flex-col relative max-w-dashcard m-3 shadow-lg rounded-bl-3xl rounded-br-3xl bg-white rounded-r-3xl">
        <div
          className={`w-full ${topicDashCardStyle} h-dashcardtitle rounded-r-full rounded-bl-full`}
        >
          <div className="flex justify-between pt-3 text-white">
            <p className="text-lg pl-4">{topicDashCardTitle}</p>
            <div className="flex flex-row">
              <h2 className="text-base pr-4">Filter</h2>
              <DropDownMenu />
            </div>
          </div>
        </div>
        <div className="flex-col pl-4 pr-4 max-h-96 overflow-y-auto">
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
    </>
  )
}

TopicDashcard.defaultProps = {
  topicDashCardData: [],
}

TopicDashcard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  topicDashCardData: PropTypes.array.isRequired,
  topicDashCardTitle: PropTypes.string.isRequired,
  topicDashCardStyle: PropTypes.string.isRequired,
}
