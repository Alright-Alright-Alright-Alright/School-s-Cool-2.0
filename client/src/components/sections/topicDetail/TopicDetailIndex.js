/* eslint-disable no-unused-vars */
import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import Main from "../../layout/Main"
import TopicContentLeft from "./TopicContentLeft"
import MainContent from "./MainContent"
import TopicContentRight from "./TopicContentRight"
import { getOneTopic } from "../../../redux/actions/topicActions"
import { getAllTheUsers } from "../../../redux/actions/userActions"

const TopicDetailIndex = () => {
  const topic = useSelector((state) => state.topics)
  const allUsers = useSelector((state) => state.user.users)
  const { topicId } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllTheUsers())
    dispatch(getOneTopic(topicId))
  }, [dispatch, topicId])

  return (
    <>
      <Main
        main={<MainContent topic={topic.singleTopic} />}
        contentLeft={<TopicContentLeft topic={topic.singleTopic} />}
        contentRight={<TopicContentRight topic={topic} users={allUsers} />}
      />
    </>
  )
}

export default TopicDetailIndex
