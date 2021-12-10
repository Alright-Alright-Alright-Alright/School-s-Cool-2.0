/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import AddTopicCard from "../../core/topicsCards/AddTopicCard"
import TopicCard from "../../core/topicsCards/TopicCard"
import TopicModal from "../../core/TopicModal"
import { getAlltopics } from "../../../redux/actions/topicActions"

function MainTopicsContent() {
  const topics = useSelector((state) => state.topics.allTopics)
  const [showModal, setShowModal] = useState(false)
  const dispatch = useDispatch()

  const handleShowModal = () => {
    setShowModal(!showModal)
  }

  useEffect(() => {
    dispatch(getAlltopics())
  }, [dispatch])

  return (
    <div className="relative">
      {showModal && <TopicModal handleShowModal={handleShowModal} />}
      <div
        className={`flex justify-center flex-wrap gap-7 m-6 filter ${
          showModal && "blur-md"
        }`}
      >
        <button type="button" onClick={handleShowModal}>
          <AddTopicCard />
        </button>
        {topics?.map((topic) => (
          <TopicCard key={topic._id} topics={topic} />
        ))}
      </div>
    </div>
  )
}

export default MainTopicsContent
