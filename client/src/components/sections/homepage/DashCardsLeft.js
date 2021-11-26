import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import Dashcard from "../../core/dashcard/Dashcard"
import { getAllTopics } from "../../../redux/actions/topicActions"
import { getAllEvents } from "../../../redux/actions/eventActions"
import getAllCourses from "../../../redux/actions/courseActions"
// import { getAllPosts } from "../../../redux/actions/postActions"

function DashCardsLeft() {
  const topics = useSelector((state) => state.topics)
  const courses = useSelector((state) => state.courses)
  const events = useSelector((state) => state.events)
  const posts = useSelector((state) => state.posts)
  console.log(posts)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllTopics())
    dispatch(getAllEvents())
    dispatch(getAllCourses())
    // dispatch(getAllPosts())
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
