/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"
import AddCard from "../../core/AddCard"
import TopicCard from "../../core/topics/topicsCards/TopicCard"
import TopicModal from "../../core/topics/TopicModal"
import { getAlltopics } from "../../../redux/actions/topicActions"
import Button from "../../core/Button"

function MainTopicsContent() {
  const topics = useSelector((state) => state.topics.allTopics)
  const [filter, setFilter] = useState("All topics")
  const user = useSelector((state) => state.user.singleUser)
  const [showModal, setShowModal] = useState(false)
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const handleShowModal = () => {
    setShowModal(!showModal)
  }

  useEffect(() => {
    dispatch(getAlltopics())
  }, [dispatch])

  let filterRule
  switch (filter) {
    case "My topics":
      /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
      filterRule = (item) => item.owner === user._id
      break
    case "Followed topics":
      filterRule = (item) =>
        item.members.find((member) => member._id === user._id)
      break
    default:
      filterRule = (item) => item
  }

  const filteredTopics = topics.filter(filterRule)

  return (
    <div>
      <div className="flex pt-5 justify-end space-x-2 lg:space-x-3 pr-2 lg:pr-10">
        <Button
          buttonName={t("topics.button_all_topics")}
          buttonStyle="btnTopicStyle"
          onClick={() => setFilter("All topics")}
        />
        <Button
          buttonName={t("topics.button_followed_topics")}
          buttonStyle="btnTopicStyle"
          onClick={() => setFilter("Followed topics")}
        />
        <Button
          buttonName={t("topics.button_my_topics")}
          buttonStyle="btnTopicStyle"
          onClick={() => setFilter("My topics")}
        />
      </div>
      <div className="">
        {showModal && <TopicModal handleShowModal={handleShowModal} />}
        <div
          className={`flex justify-center sm:justify-evenly flex-wrap gap-7 m-6 filter ${
            showModal && "blur-md"
          }`}
        >
          <button type="button" onClick={handleShowModal}>
            <AddCard
              cardTitle={t("topics.add_topic_card_title")}
              color="#18C7BB"
            />
          </button>
          {filteredTopics?.map((topic) => (
            <TopicCard key={topic._id} topics={topic} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MainTopicsContent
