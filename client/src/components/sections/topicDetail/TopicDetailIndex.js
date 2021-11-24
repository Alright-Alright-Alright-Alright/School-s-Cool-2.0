/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import Main from "../../layout/main"
import TopicContentLeft from "./TopicContentLeft"
import MainContent from "./MainContent"
import TopicContentRight from "./TopicContentRight"
import { getOneTopic } from "../../../redux/actions/topicActions"

function TopicDetailIndex() {
<<<<<<< HEAD
  const topic = useSelector((state) => state.topics.singleTopic)
=======
  const topic = useSelector((state) => state.topic)
>>>>>>> 9ff2a94 (merge)
  const params = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getOneTopic(params.topicId))
  }, [dispatch, params.topicId])

<<<<<<< HEAD
=======
  console.log(params.topicId)

>>>>>>> 9ff2a94 (merge)
  return (
    <>
      <Main
        main={<MainContent topic={topic} />}
        contentLeft={<TopicContentLeft topic={topic} />}
        contentRight={<TopicContentRight topic={topic} />}
      />
    </>
  )
}

export default TopicDetailIndex
