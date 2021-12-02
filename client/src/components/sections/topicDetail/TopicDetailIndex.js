/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import Main from "../../layout/main"
import TopicContentLeft from "./TopicContentLeft"
import MainContent from "./MainContent"
import TopicContentRight from "./TopicContentRight"
import { getOneTopic } from "../../../redux/actions/topicActions"
import { getAllUsers } from "../../../redux/actions/userActions"

function TopicDetailIndex() {
  const topic = useSelector((state) => state.topics.singleTopic)
  const user = useSelector((state) => state.user)
  const allUsers = useSelector((state) => state.user.users)
  const params = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllUsers())
    dispatch(getOneTopic(params.topicId, user?.id))
  }, [dispatch, params.topicId, user?.id])

  return (
    <>
      <Main
        main={<MainContent topic={topic} />}
        contentLeft={<TopicContentLeft topic={topic} />}
        contentRight={<TopicContentRight topic={topic} users={allUsers} />}
      />
    </>
  )
}

export default TopicDetailIndex
