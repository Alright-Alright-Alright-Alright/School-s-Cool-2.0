/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import { Link } from "react-router-dom"
import Icon from "./Icon"

const topicsItems = [
  {
    id: "allTopics",
    title: "All topics",
    bgcolor: "aqua-light",
  },
  {
    id: "createdTopics",
    title: "Created by me",
    bgcolor: "aqua-light",
  },
  {
    id: "followdTopics",
    title: "Followed by me",
    bgcolor: "aqua-light",
  },
]

function DropDownMenu() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="relative">
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        <Icon iconName="seemore" iconStyle="text-white" />
      </button>
      {isOpen && (
        <div className="absolute right-10 -top-2 w-48 py-6 mt-2 bg-white rounded-xl shadow-xl">
          {topicsItems.map((item) => (
            <button
              type="button"
              key={item.id}
              className={`text-grey-dark w-full px-4 py-2 text-left hover:bg-${item.bgcolor}`}
            >
              <div className="flex place-self-center">
                <Icon iconName="select" />
                <p>{item.title}</p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default DropDownMenu
