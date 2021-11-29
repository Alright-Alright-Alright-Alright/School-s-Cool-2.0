/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/require-default-props */
import React, { useState } from "react"
import PropTypes from "prop-types"
import Icon from "../Icon"
import DashCardListItem from "./DashCardListItem"
import DropDownMenu from "../DropDownMenu"

export default function Dashcard({
  dashCardData,
  dashCardTitle,
  dashCardStyle,
}) {
  const [expandDashCard, setExpandDashCard] = useState(false)

  const firstThreeItems = dashCardData
    .slice(0, 3)
    .map((item) => (
      <DashCardListItem
        key={item.id}
        listItemTitle={item?.title}
        listItemDate={item?.date}
        listItemComments={item?.comment}
        listItemUsers={item?.user}
      />
    ))

  const allItems = dashCardData.map((item) => (
    <DashCardListItem
      key={item?.id}
      listItemTitle={item?.title}
      listItemDate={item?.date}
      listItemComments={item?.comment}
      listItemUsers={item?.user}
    />
  ))

  return (
    <>
      <div className="flex flex-col relative max-w-dashcard m-3 shadow-lg rounded-bl-3xl rounded-br-3xl bg-white rounded-r-3xl">
        <div
          className={`w-full ${dashCardStyle} h-dashcardtitle rounded-r-full rounded-bl-full`}
        >
          <div className="flex justify-between pt-3 text-white">
            <p className="text-lg pl-4">{dashCardTitle}</p>
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

Dashcard.defaultProps = {
  dashCardData: [],
}

Dashcard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  dashCardData: PropTypes.array.isRequired,
  dashCardTitle: PropTypes.string.isRequired,
  dashCardStyle: PropTypes.string.isRequired,
}
