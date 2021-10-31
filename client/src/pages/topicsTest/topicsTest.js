/* eslint-disable react/prop-types */
import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getAllTopics } from "../../redux/actions/topicActions"

// eslint-disable-next-line react/prop-types
const TopicsTest = () => {
  const topics = useSelector((state) => state.topics)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllTopics())
  }, [dispatch])

  console.log("Inside topicTest", topics)

  return (
    <>
      <h1>Hello, this is a message from the server: {topics.topics.message}</h1>
    </>
  )
}

export default TopicsTest

