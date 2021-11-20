import React from "react"
import AddTopicCard from "./AddTopicCard"
import Icon from "../Icon"

const TopicCards = () => (
  <div className="flex flex-wrap">
    <AddTopicCard />
    <div className="w-topicsCard h-topicsCard flex flex-col shadow-xl rounded-br-xl rounded-bl-xl">
      <section className="h-topicsCardImage">
        <img
          src="https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1140180560"
          alt="topic_Image"
          className="h-topicsCardImage rounded-tr-xl"
        />
      </section>
      <section className="">
        <div>
          <h1>Topic Title </h1>
        </div>
        <div className="flex">
          <div className="flex justify-around">
            <Icon iconName="member" iconStyle="fill-inactive text-grey-dark" />
            <p>20</p>
            {/* {members.length} */}
            <Icon iconName="message" iconStyle="fill-inactive text-grey-dark" />
            <p>20</p>
          </div>
          <div className="justify-end">
            <Icon iconName="add" iconStyle="fill-inactive text-grey-dark" />
          </div>
        </div>
      </section>
    </div>
  </div>
)

export default TopicCards
