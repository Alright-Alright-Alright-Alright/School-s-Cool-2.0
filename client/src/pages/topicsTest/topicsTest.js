/* eslint-disable react/prop-types */
import React, { useEffect } from "react"
import { connect } from "react-redux"
import { getAllTopics } from "../../redux/actions/topicActions"

// eslint-disable-next-line react/prop-types
const TopicsTest = ({ topics, dispatch }) => {
  useEffect(() => {
    dispatch(getAllTopics())
  }, [dispatch])

  return (
    <>
      <h1 className="bg-grey-medium_light">
        Hello, this is a message from the server: {topics.topics.message}
      </h1>
    </>
  )
}

const mapStateToProps = (state) => {
  const { topics } = state

  return {
    topics,
  }
}

export default connect(mapStateToProps)(TopicsTest)
