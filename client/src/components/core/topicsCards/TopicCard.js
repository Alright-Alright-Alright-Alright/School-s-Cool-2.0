/* eslint-disable array-callback-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import {
  getAlltopics,
  joinAtopic,
  leaveAtopic,
} from "../../../redux/actions/topicActions"
import Icon from "../Icon"

const TopicCard = ({ topics }) => {
  const user = useSelector((state) => state.user.singleUser)
  const [join, setJoin] = useState(false)
  const dispatch = useDispatch()

  const leaveTopicHandler = async () => {
    setJoin(false)
    dispatch(leaveAtopic(topics._id))
  }

  const JoinTopicHandler = () => {
    setJoin(true)
    dispatch(joinAtopic(topics._id))
  }

  const checkJoinedUser = () => {
    topics.members.map((member) => member._id === user?._id && setJoin(true))
  }

  useEffect(() => {
    checkJoinedUser()
    dispatch(getAlltopics())
  }, [dispatch])

  return (
    <div
      key={topics._id}
      className="flex flex-col justify-between w-48 h-72 bg-white shadow-xl rounded-br-3xl rounded-bl-3xl rounded-tr-3xl"
    >
      <Link to={`/topics/${topics._id}`}>
        <section className="">
          <img
            src={topics.bannerImage}
            alt="topic_Image"
            className="object-cover h-48 w-full rounded-tr-3xl"
          />
        </section>
        <section className="border-b-2 border-grey-light ml-3 mr-3 h-12 flex items-center">
          <h1 className="text-lg">{topics.title}</h1>
        </section>
      </Link>
      <section>
        <div className="flex justify-between">
          <div className="flex p-3">
            <Icon iconName="member" iconStyle="fill-inactive text-grey-dark" />
            <span>{topics.members?.length}</span>
            <Icon iconName="file" iconStyle="fill-inactive text-grey-dark" />
            <span>{topics.resources?.length}</span>
          </div>
          <div className="p-3">
            {join ? (
              <button type="button" onClick={leaveTopicHandler}>
                <Icon
                  iconName="follow"
                  iconStyle="fill-active text-grey-dark"
                />
              </button>
            ) : (
              <button type="button" onClick={JoinTopicHandler}>
                <Icon
                  iconName="follow"
                  iconStyle="fill-inactive text-grey-dark"
                />
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default TopicCard
