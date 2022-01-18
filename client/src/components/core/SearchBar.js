/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import Icon from "./Icon"
import { getSingleFile } from "../../redux/actions/libraryActions"

function SearchBar({ placeholder }) {
  const [filteredData, setFilteredData] = useState([])
  const [wordEntered, setWordEntered] = useState("")
  const dispatch = useDispatch()
  const urlPath = window.location.pathname
  const topics = useSelector((state) => state.topics.allTopics)
  const events = useSelector((state) => state.events.allEvents)
  const library = useSelector((state) => state.library.allFiles)
  const courses = useSelector((state) => state.courses.allcourses)

  const whereToSearch = () => {
    let data = []
    if (urlPath.includes("topics")) data = topics
    if (urlPath.includes("events")) data = events
    if (urlPath.includes("library")) data = library
    if (urlPath.includes("home") || urlPath.includes("profile"))
      data = [...library, ...topics, ...events]
    return data
  }

  const handleFilter = (event) => {
    const searchWord = event.target.value

    setWordEntered(searchWord)
    const newFilter = whereToSearch().filter((value) => {
      const tag = value.tags?.join(" ").toLowerCase().split(" ")
      return (
        value.title.toLowerCase().includes(searchWord.toLowerCase()) ||
        tag?.includes(searchWord.toLowerCase())
      )
    })

    if (searchWord === "") {
      setFilteredData([])
    } else {
      setFilteredData(newFilter)
    }
  }

  const clearInput = () => {
    setFilteredData([])
    setWordEntered("")
  }

  const whenLibrary = (id) => {
    dispatch(getSingleFile(id))
    clearInput()
  }

  useEffect(() => {
    whereToSearch()
  }, [urlPath])

  return (
    <div>
      <div className="flex items-center place-content-between border-2 border-grey-light rounded-r-full rounded-l-full py-2 px-4 text-grey-darker leading-tight ">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
          className="focus:outline-none bg-grey-super_light focus:border-teal-500 w-60"
        />
        <div>
          {filteredData.length === 0 ? (
            <svg
              className="fill-current text-grey-darker h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
            </svg>
          ) : (
            <button type="button" onClick={clearInput}>
              <Icon iconName="close" />
            </button>
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div>
          {filteredData.slice(0, 15).map((value) =>
            value.collectionName === "library" ? (
              <Link
                to={`/${value.collectionName}`}
                onClick={() => whenLibrary(value._id)}
              >
                <p className="py-1">
                  {value.title}{" "}
                  <span className="text-sm text-grey-medium">
                    in {value.collectionName}
                  </span>
                </p>
              </Link>
            ) : (
              <Link
                to={`/${value.collectionName}/${value._id}`}
                onClick={clearInput}
              >
                <p className="py-1">
                  {value.title}{" "}
                  <span className="text-sm text-grey-medium">
                    in {value.collectionName}
                  </span>{" "}
                </p>
              </Link>
            )
          )}
        </div>
      )}
    </div>
  )
}

export default SearchBar
