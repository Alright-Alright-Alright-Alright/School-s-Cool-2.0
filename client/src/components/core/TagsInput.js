/* eslint-disable react/prop-types */
/* eslint-disable no-param-reassign */
/* eslint-disable react/no-array-index-key */
import React, { useState } from "react"

const TagsInput = ({ selectedTags }) => {
  const [tags, setTags] = useState([])

  const addTags = (event) => {
    if (event.keyCode === 13 && event.target.value !== "") {
      setTags([...tags, event.target.value])
      selectedTags([...tags, event.target.value])
      event.target.value = ""
    }
  }

  const removeTags = (index) => {
    setTags([...tags.filter((tag) => tags.indexOf(tag) !== index)])
  }

  return (
    <div className="w-full px-6 flex content-start flex-wrap">
      <ul className="w-auto flex content-center justify-center border-sky">
        {tags.map((tag, index) => (
          <li key={index} className="mr-1 bg-grey-light rounded-full px-3">
            <button
              type="button"
              onClick={() => removeTags(index)}
              className="flex items-center m-1"
            >
              <span className="text-sm font-semibold">{tag}</span>
            </button>
          </li>
        ))}
      </ul>
      {tags.length >= 5 ? (
        <p className="text-base text-pink flex items-center pl-4">
          You can not add more tags
        </p>
      ) : (
        <input
          required
          type="text"
          onKeyUp={(event) => addTags(event)}
          placeholder={`${
            tags.length > 0
              ? "Click on the tag to remove it"
              : "Press enter to add up to 5 tags"
          } `}
          className="w-6/7 flex-1 focus:outline-none text-base"
        />
      )}
    </div>
  )
}
export default TagsInput
