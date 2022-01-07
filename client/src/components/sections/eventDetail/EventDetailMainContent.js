/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import EventHeaderCard from "../../core/events/eventHeaderCard/EventHeaderCard"
import {
  createPost,
  getAllEventPosts,
} from "../../../redux/actions/postActions"
import EventDescriptionCard from "../../core/events/eventDescriptionCard/eventDescriptionCard"
import TopicPost from "../../core/topics/TopicPost/TopicPost"

function EventDetailMainContent({ event }) {
  const [body, setPostBody] = useState("")
  const UI = useSelector((state) => state.UI)
  const posts = useSelector((state) => state.posts.allPosts)
  const params = useParams()
  const dispatch = useDispatch()
  const newPost = {
    body,
    eventId: params.eventId,
  }

  const createNewPost = () => {
    dispatch(createPost(newPost))
  }

  useEffect(() => {
    dispatch(getAllEventPosts(params.eventId))
  }, [dispatch, params.eventId])

  return (
    <div>
      {UI.errors && <p>{UI.errors.message}</p>}

      <EventDescriptionCard event={event} />
      <EventHeaderCard
        onClick={createNewPost}
        postBody={(e) => setPostBody(e)}
      />
      {/* <TopicHeaderCard
      // onClick={createNewPost}
      // postBody={(e) => setPostBody(e)}
      /> */}
      {posts?.map((post) => (
        <TopicPost
          key={post._id}
          post={post}
          //   topicId={params.topicId}
          comments={post?.comments}
        />
        // <h1 key={post?.id}>{post?.body}</h1>
      ))}
    </div>
  )
}

EventDetailMainContent.propTypes = {
  event: PropTypes.shape.isRequired,
}

export default EventDetailMainContent
