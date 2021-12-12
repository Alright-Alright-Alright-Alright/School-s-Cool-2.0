/* eslint-disable no-unused-vars */
import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import Dashcard from "../../core/dashcard/Dashcard"
import { getAlltopics } from "../../../redux/actions/topicActions"
import { getAllEvents } from "../../../redux/actions/eventActions"
// import getAllCourses from "../../../redux/actions/courseActions"

import dashcardDropdownMenu from "../../../data/dashcardDropdownMenu.json"
import { getAllFilesFromLibrary } from "../../../redux/actions/libraryActions"

function DashCardsLeft() {
  const topics = useSelector((state) => state.topics.allTopics)
  const courses = useSelector((state) => state.courses)
  const events = useSelector((state) => state.events.events)
  // const posts = useSelector((state) => state.posts)
  // console.log(posts)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAlltopics())
    dispatch(getAllFilesFromLibrary())
    dispatch(getAllEvents())
    // dispatch(getAllCourses())
  }, [dispatch])

  return (
    <div>
      <Dashcard
        dashCardData={topics}
        dashCardTitle="Topics"
        dashCardStyle="bg-aqua"
        dropdownMenuData={dashcardDropdownMenu.topics}
      />
      <Dashcard
        dashCardData={courses}
        dashCardTitle="Courses"
        dashCardStyle="bg-yellow"
        dropdownMenuData={dashcardDropdownMenu.courses}
      />{" "}
      <Dashcard
        dashCardData={events}
        dashCardTitle="Events"
        dashCardStyle="bg-sky"
        dropdownMenuData={dashcardDropdownMenu.events}
      />{" "}
    </div>
  )
}

export default DashCardsLeft
