import React, { useState } from "react"
import PropTypes from "prop-types"
import Icon from "./Icon"

function DropDownMenu({ data }) {
  const [isOpen, setIsOpen] = useState(false)
  const [filter, setFilter] = useState(data.dropDownItems[0])

  return (
    <div className="relative">
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        <Icon iconName="seemore" iconStyle="text-white" />
      </button>
      {isOpen && (
        <div className="absolute right-10 -top-2 w-48 py-6 mt-2 bg-white rounded-xl shadow-xl">
          {data.dropDownItems.map((item) => (
            <button
              type="button"
              key={item}
              className={`text-grey-dark w-full px-4 py-2 text-left hover:bg-${data.bgColorOnHover}`}
              onClick={() => setFilter(item)}
            >
              <div className="flex place-self-center">
                <Icon
                  iconName="select"
                  iconStyle={filter === item ? "" : "invisible"}
                />
                <p>{item}</p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

DropDownMenu.propTypes = {
  data: PropTypes.shape({
    bgColorOnHover: PropTypes.string,
    dropDownItems: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
}

export default DropDownMenu
