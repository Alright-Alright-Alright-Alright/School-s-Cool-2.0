import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getAllTopics } from "../../../redux/actions/topicActions"
import Main from "../../layout/main"
import TopicCards from "../../core/topicsCards/TopicCards"

const Index = () => {
  const topics = useSelector((state) => state.topics)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllTopics())
  }, [dispatch])

  return (
    <>
      <Main main={<TopicCards topics={topics} />} />
    </>
  )
}

export default Index
