/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from "react"
import AddTopicCard from "./AddTopicCard"
import Icon from "../Icon"

const TopicCards = ({ topics }) => {
  const topicsCard = topics.map((topic) => (
    <div
      key={topic._id}
      className="w-topicsCard h-topicsCard shadow-xl rounded-br-xl rounded-bl-xl bg-white"
    >
      <section className="h-topicsCardImage">
        <img
          src={topic.bannerImage}
          alt="topic_Image"
          className="h-topicsCardImage rounded-tr-xl"
        />
      </section>
      <section className="h-topicsCardBottomHalf">
        <div>
          <h1 className="font-sans font-semibold text-lg">{topic.title}</h1>
        </div>
        <span className="flex justify-center">
          <hr className="w-modalHrWidth relative top-5" />
        </span>
        <div className="flex">
          <div className="flex justify-start">
            <Icon iconName="member" iconStyle="fill-inactive text-grey-dark" />
            <span>{topics.members}</span>
            <Icon iconName="file" iconStyle="fill-inactive text-grey-dark" />
            <span>{topics.files}</span>
          </div>
          <div className="flex justify-end">
            <Icon iconName="add" iconStyle="fill-inactive text-grey-dark" />
          </div>
        </div>
      </section>
    </div>
  ))
  return (
    <div className="flex flex-wrap justify-evenly content-evenly">
      <AddTopicCard />
      {topicsCard}
    </div>
  )
}

export default TopicCards
