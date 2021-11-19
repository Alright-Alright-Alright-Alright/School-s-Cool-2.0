import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import AddTopicCard from "../components/core/topicsCards/AddTopicCard"
import TopicCards from "../components/core/topicsCards/TopicCards"
import { getAllTopics } from "../redux/actions/topicActions"

const Topics = () => {
  const topics = useSelector((state) => state.topics)
  console.log(topics)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllTopics())
  }, [dispatch])

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <AddTopicCard />
      <TopicCards topics={topics} />
    </div>
  )
}

export default Topics
