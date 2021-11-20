/* eslint-disable react/prop-types */
import React from "react"
import AddTopicCard from "./AddTopicCard"
import Icon from "../Icon"

const TopicCards = ({ topics }) => {
  const topicsCard = topics.map((topic) => (
    <div className="w-topicsCard h-topicsCard flex flex-col shadow-xl rounded-br-xl rounded-bl-xl bg-white">
      <section className="h-topicsCardImage">
        <img
          src="https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1140180560"
          alt="topic_Image"
          className="h-topicsCardImage rounded-tr-xl"
        />
      </section>
      <section className="h-topicsCardBottomHalf">
        <div>
          <h1 className="font-sans font-semibold text-lg">{topic.title}</h1>
        </div>
        <hr />
        <div className="flex">
          <div>
            <Icon iconName="member" iconStyle="fill-inactive text-grey-dark" />
            <p>20</p>
            {/* {members.length} */}
            <Icon iconName="file" iconStyle="fill-inactive text-grey-dark" />
            <p>20</p>
            {/* {files.length} */}
          </div>
          <div>
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
