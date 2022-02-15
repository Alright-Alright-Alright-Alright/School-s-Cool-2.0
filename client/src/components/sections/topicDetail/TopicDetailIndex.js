/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react"
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
  const user = useSelector((state) => state.user)
  const [showModal, setshowModal] = useState(false)
  const [editModal, seteditModal] = useState(false)
  const { topicId } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllTheUsers())
    dispatch(getOneTopic(topicId))
  }, [dispatch, topicId])

  const showEditModel = () => {
    setshowModal(!showModal)
    seteditModal(!editModal)
  }

  return (
    <>
      <Main
        main={
          <MainContent
            topic={topic.singleTopic}
            showModal={showModal}
            showEditModel={showEditModel}
            editModal={editModal}
          />
        }
        contentLeft={
          <TopicContentLeft
            topic={topic.singleTopic}
            showEditModel={showEditModel}
            user={user.singleUser}
          />
        }
        contentRight={<TopicContentRight topic={topic} users={user.users} />}
      />
    </>
  )
}

export default TopicDetailIndex
