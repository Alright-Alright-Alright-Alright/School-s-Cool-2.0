/* eslint-disable no-unused-vars */
import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import AddTopicCard from "../../core/topicsCards/AddTopicCard"
import TopicCard from "../../core/topicsCards/TopicCard"

import { getAllTopics } from "../../../redux/actions/topicActions"

function MainTopicsContent() {
  const topics = useSelector((state) => state.topics)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllTopics())
  }, [dispatch])

  return (
    <div className="flex flex-wrap gap-8 m-6">
      <AddTopicCard />
      {topics.map((topic) => (
        <TopicCard topics={topic} />
      ))}
    </div>
  )
}

export default MainTopicsContent
