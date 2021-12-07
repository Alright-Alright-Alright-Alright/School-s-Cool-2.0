import React, { useEffect, useState, useRef } from "react"
import PropTypes from "prop-types"
import Icon from "./Icon"

function DropDownMenu({ data }) {
  const node = useRef()

  const [isOpen, setIsOpen] = useState(false)
  const [filter, setFilter] = useState(data?.dropDownItems[0])

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      return
    }
    // outside click
    setIsOpen(false)
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClick)

    return () => {
      document.removeEventListener("mousedown", handleClick)
    }
  }, [])

  return (
    <div ref={node} className="relative z-20">
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        <Icon iconName="seemore" iconStyle="text-white" />
      </button>
      {isOpen && (
        <div className="absolute right-10 -top-2 w-48 py-6 mt-2 bg-white rounded-xl shadow-xl">
          {data.dropDownItems.map((item) => (
            <button
              type="button"
              key={item}
              className={`text-grey-dark w-full px-4 py-2 text-left hover:bg-${data?.bgColorOnHover}`}
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
