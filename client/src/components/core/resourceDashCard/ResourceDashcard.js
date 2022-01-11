/* eslint-disable no-unused-vars */
/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-underscore-dangle */
import React, { useState } from "react"
import PropTypes from "prop-types"
import Icon from "../Icon"
import ResourceDashCardListItem from "./ResourceDashCardListItem"
import DropDownMenu from "../DropDownMenu"
// import data from "../../../data/dashcardDropdownMenu.json"

export default function ResourceDashcard({
  resourceDashCardData,
  resourceDashCardTitle,
  resourceDashCardStyle,
  dropdownMenuData,
}) {
  const [expandDashCard, setExpandDashCard] = useState(false)

  const firstThreeItems = resourceDashCardData
    .slice(0, 3)
    .map((item) => (
      <ResourceDashCardListItem
        key={item?._id}
        listItemName={item?.title}
        listItemLikes={item?.likedBy}
        listItemComments={item?.comments}
        resourceDashCardData={resourceDashCardData}
      />
    ))

  const allItems = resourceDashCardData.map((item) => (
    <ResourceDashCardListItem
      key={item?._id}
      listItemFirstName={item?.firstName}
      listItemLastName={item?.lastName}
      resourceDashCardData={resourceDashCardData}
    />
  ))

  const noDataPlaceholder = (
    <>
      <div className="flex-col pl-4 pr-4 max-h-96">
        <p className="px-4 py-5">No resources have been added yet</p>
      </div>
    </>
  )

  const showAllDashCardData = (
    <>
      <div className="flex-col pl-4 pr-4 max-h-96 overflow-y-auto">
        <div className="divide-y-2 divide-primary">
          {expandDashCard ? allItems : firstThreeItems}
          <div />
        </div>
      </div>
      <div className="min-h-dashcardrow flex justify-center pt-3">
        {resourceDashCardData.length > 3 && (
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
        )}
      </div>
    </>
  )

  return (
    <>
      <div className="flex flex-col relative w-full shadow-lg rounded-bl-3xl rounded-br-3xl bg-white rounded-r-3xl">
        <div
          className={`w-full ${resourceDashCardStyle} h-dashcardtitle rounded-r-full rounded-bl-full`}
        >
          <div className="flex justify-between pt-3 text-white">
            <p className="text-lg pl-4">{resourceDashCardTitle}</p>
            <div className="flex flex-row">
              <h2 className="text-base pr-4">Filter</h2>
              <DropDownMenu data={dropdownMenuData} />
            </div>
          </div>
        </div>
        {resourceDashCardData.length < 1
          ? noDataPlaceholder
          : showAllDashCardData}
      </div>
    </>
  )
}

ResourceDashcard.defaultProps = {
  resourceDashCardData: [],
  // users: [],
}

ResourceDashcard.propTypes = {
  resourceDashCardData: PropTypes.array.isRequired,
  resourceDashCardTitle: PropTypes.string.isRequired,
  resourceDashCardStyle: PropTypes.string.isRequired,
  // users: PropTypes.array.isRequired,
  dropdownMenuData: PropTypes.object.isRequired,
}
