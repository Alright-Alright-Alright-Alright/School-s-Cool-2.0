import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import Dashcard from "../../core/dashcard/Dashcard"
import { getAllTopics } from "../../../redux/actions/topicActions"

function DashCardsLeft() {
  const topics = useSelector((state) => state.topics)
  const courses = useSelector((state) => state.courses)
  const events = useSelector((state) => state.events)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllTopics())
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
