/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
import Icon from "./Icon"

function DropDownMenu({ data, selectFilter, position, filter }) {
  const node = useRef()
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

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
    <div ref={node} className={`z-20 ${position}`}>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        <Icon iconName="seemore" iconStyle="text-current" />
      </button>
      {isOpen && (
        <div className="absolute right-10 -top-2 w-48 py-6 mt-2 bg-white rounded-xl shadow-xl">
          {data.dropDownItems.map((item) => (
            <button
              type="button"
              key={item}
              className={`text-grey-dark w-full px-4 py-2 text-left hover:bg-${data?.bgColorOnHover}`}
              onClick={() => selectFilter(item)}
            >
              <div className="flex place-self-center">
                <Icon
                  iconName="select"
                  iconStyle={filter === item ? "" : "invisible"}
                />
                <p>{t(`dropdownmenu.${item}`)}</p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

DropDownMenu.defaultProps = {
  filter: null,
  position: "",
}
DropDownMenu.propTypes = {
  data: PropTypes.shape({
    bgColorOnHover: PropTypes.string,
    dropDownItems: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  filter: PropTypes.string,
  position: PropTypes.string,
  selectFilter: PropTypes.func.isRequired,
}

export default DropDownMenu
