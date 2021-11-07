import React, { useState } from "react"
import PropTypes from "prop-types"
import Icon from "../Icon"
import DashCardListItem from "./DashCardListItem"

export default function Dashcard({
  dashCardData,
  dashCardTitle,
  dashCardStyle,
}) {
  const [expandDashCard, setExpandDashCard] = useState(false)

  const firstDashCardRows = dashCardData
    .slice(0, 3)
    .map((item) => (
      <DashCardListItem
        key={item.index}
        listItemTitle={item[0].titleTest}
        listItemDate={item[0].date}
        listItemComments={item[0].comment}
        listItemUsers={item[0].user}
      />
    ))

  const secondDashCardRows = dashCardData
    .slice(3, 6)
    .map((item) => (
      <DashCardListItem
        key={item.index}
        listItemTitle={item[0].titleTest}
        listItemDate={item[0].date}
        listItemComments={item[0].comment}
        listItemUsers={item[0].user}
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
              <button type="button">
                <Icon iconName="seemore" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex-col pl-4 pr-4">
          <div className="divide-y-2 divide-primary">
            {firstDashCardRows}
            {expandDashCard ? secondDashCardRows : null}
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

Dashcard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  dashCardData: PropTypes.object.isRequired,
  dashCardTitle: PropTypes.string.isRequired,
  dashCardStyle: PropTypes.string.isRequired,
}
