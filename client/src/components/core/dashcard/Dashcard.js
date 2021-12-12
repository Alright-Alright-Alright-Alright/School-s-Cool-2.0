import React, { useState } from "react"
import { useSelector } from "react-redux"
import PropTypes from "prop-types"
import Icon from "../Icon"
import DashCardListItem from "./DashCardListItem"
import DropDownMenu from "../DropDownMenu"

export default function Dashcard({
  dashCardData,
  dashCardTitle,
  dashCardStyle,
  dropdownMenuData,
}) {
  const [expandDashCard, setExpandDashCard] = useState(false)
  const [filter, setFilter] = useState(dropdownMenuData?.dropDownItems[0])

  const user = useSelector((state) => state.user.singleUser)

  let filterRule
  switch (filter) {
    case "Created by me":
      /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
      filterRule = (item) => item.owner === user._id
      break
    case "Followed by me":
      filterRule = (item) =>
        item.members.find((member) => member._id === user._id)
      break
    default:
      filterRule = (item) => item
  }

  const filteredItems = dashCardData.filter(filterRule)

  const firstThreeItems = filteredItems
    .slice(0, 3)
    .map((item) => (
      <DashCardListItem
        key={item._id}
        linkId={item._id}
        listItemTitle={item?.title}
        listItemDate={item?.date}
        listItemComments={item?.posts}
        listItemUsers={item?.members}
      />
    ))

  const allItems = filteredItems.map((item) => (
    <DashCardListItem
      key={item._id}
      linkId={item._id}
      listItemTitle={item?.title}
      listItemDate={item?.date}
      listItemComments={item?.posts}
      listItemUsers={item?.members}
    />
  ))

  const onSelectFilter = (item) => {
    setFilter(item)
  }

  return (
    <>
      <div className="flex flex-col relative w-full m-3 shadow-lg rounded-bl-3xl rounded-br-3xl bg-white rounded-r-3xl">
        <div
          className={`w-full ${dashCardStyle} h-dashcardtitle rounded-r-full rounded-bl-full`}
        >
          <div className="flex justify-between pt-3 text-white">
            <p className="text-lg pl-4">{dashCardTitle}</p>
            <div className="flex flex-row">
              <h2 className="text-base pr-4">{filter}</h2>
              <DropDownMenu
                data={dropdownMenuData}
                filter={filter}
                selectFilter={onSelectFilter}
              />
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
  dashCardData: PropTypes.array,
  dashCardTitle: PropTypes.string.isRequired,
  dashCardStyle: PropTypes.string.isRequired,
  dropdownMenuData: PropTypes.shape({
    bgColorOnHover: PropTypes.string,
    dropDownItems: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
}
