import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import Dashcard from "../../core/dashcard/Dashcard"
import { getAlltopics } from "../../../redux/actions/topicActions"
import { getAllEvents } from "../../../redux/actions/eventActions"
import getAllCourses from "../../../redux/actions/courseActions"

function DashCardsLeft() {
  const topics = useSelector((state) => state.topics.topics)
  const courses = useSelector((state) => state.courses)
  const events = useSelector((state) => state.events)
  // const posts = useSelector((state) => state.posts)
  // console.log(posts)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAlltopics())
    dispatch(getAllEvents())
    dispatch(getAllCourses())
  }, [dispatch])

  return (
    <div>
      <Dashcard
        dashCardData={topics}
        dashCardTitle="Topics"
        dashCardStyle="bg-aqua"
      />
      <Dashcard
        dashCardData={courses}
        dashCardTitle="Courses"
        dashCardStyle="bg-yellow"
      />{" "}
      <Dashcard
        dashCardData={events}
        dashCardTitle="Events"
        dashCardStyle="bg-grey-dark"
      />{" "}
    </div>
  )
}

export default DashCardsLeft
