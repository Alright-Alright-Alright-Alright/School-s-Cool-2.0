/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useSelector, useDispatch } from "react-redux"
import { Link, useParams } from "react-router-dom"
import ResourceDashcard from "../../core/resourceDashCard/ResourceDashcard"
import data from "../../../data/dashcardDropdownMenu.json"
import { getOneTopic } from "../../../redux/actions/topicActions"

function TopicContentLeft() {
  const topic = useSelector((state) => state.topics.singleTopic)
  const dispatch = useDispatch()
  const params = useParams()

  useEffect(() => {
    dispatch(getOneTopic(params.topicId))
  }, [dispatch, params.topicId])

  console.log(params)
  console.log(topic)

  // const {
  //   bannerImage,
  //   title,
  //   description,
  //   isPrivate,
  //   owner,
  //   category,
  //   subject,
  //   resources,
  // } = topic

  return (
    <div className="flex flex-col max-w-sm float-right">
      {topic ? (
        <div className="p-3">
          <h1>hello</h1>
          <img
            className="rounded-r-3xl rounded-b-3xl object-cover h-72"
            src={`${topic?.bannerImage}`}
            alt="placeholder"
            width="400"
          />
          <div className="p-3 flex-col  place-items-end content-end max-w-xs">
            <h1 className="text-xl pb-2">{topic?.title}</h1>
            <p className="text-lg pb-2">
              {topic?.category}: {topic?.subject}
            </p>
            <p className="text-sm">{topic?.description} </p>
          </div>
          <div className="place-items-end">
            <ResourceDashcard
              resourceDashCardTitle="Resources"
              resourceDashCardStyle="bg-aqua"
              resourceDashCardData={topic?.resources}
              dropdownMenuData={data.resources}
            />
          </div>
          <div className="p-3 w-full">
            <p>{topic?.isPrivate ? "Private" : "Public"} topic created by </p>
            <Link to={`/profile/${topic?.owner?._id}`}>
              <div className="flex items-center py-3">
                <img
                  className="w-10 h-10 rounded-full mr-2"
                  src={`${topic?.owner?.imageUrl}`}
                  alt="profile"
                />
                <p className="text-base">
                  {topic?.owner?.firstName} {topic?.owner?.lastName}
                </p>
              </div>
            </Link>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

// TopicContentLeft.propTypes = {
//   // eslint-disable-next-line react/forbid-prop-types
//   topic: PropTypes.object.isRequired,
// }

export default TopicContentLeft
