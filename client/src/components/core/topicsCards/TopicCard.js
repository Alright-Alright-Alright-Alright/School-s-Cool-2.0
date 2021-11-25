/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from "react"
import { Link } from "react-router-dom"
import Icon from "../Icon"

const TopicCard = ({ topics }) => (
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
          <span>{topics.members}</span>
          <Icon iconName="file" iconStyle="fill-inactive text-grey-dark" />
          <span>{topics.files}</span>
        </div>
        <div className="p-3">
          <button type="button">
            <Icon iconName="add" iconStyle="fill-inactive text-grey-dark" />
          </button>
        </div>
      </div>
    </section>
  </div>
)

export default TopicCard
