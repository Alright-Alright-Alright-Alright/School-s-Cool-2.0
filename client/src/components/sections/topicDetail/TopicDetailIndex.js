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
  const topics = useSelector((state) => state.topic)
  const user = useSelector((state) => state.user)
  const topic = useSelector((state) => state.topics.topic)

  const params = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getOneTopic(params.topicId, user?.id))
  }, [dispatch, params.topicId, user?.id])

  console.log(params.topicId)
  console.log(topic)

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
