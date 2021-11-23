/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import AddTopicCard from "../../core/topicsCards/AddTopicCard"
import TopicCard from "../../core/topicsCards/TopicCard"
import Modal from "../../core/Modal"
import { getAllTopics } from "../../../redux/actions/topicActions"

function MainTopicsContent() {
  const topics = useSelector((state) => state.topics)
  const [showModal, setShowModal] = useState(false)

  const dispatch = useDispatch()

  const handleShowModal = () => {
    setShowModal(!showModal)
  }

  const getAllTopicsHandler = () => {
    dispatch(getAllTopics())
  }

  useEffect(() => {
    getAllTopicsHandler()
  }, [])

  return (
    <div className="relative">
      {showModal && (
        <Modal
          handleShowModal={handleShowModal}
          getTopicsFromDB={getAllTopicsHandler}
        />
      )}
      <div className="flex justify-center flex-wrap gap-8 m-6">
        <button type="button" onClick={handleShowModal}>
          <AddTopicCard />
        </button>
        {topics.map((topic) => (
          <TopicCard topics={topic} />
        ))}
      </div>
    </div>
  )
}

export default MainTopicsContent
