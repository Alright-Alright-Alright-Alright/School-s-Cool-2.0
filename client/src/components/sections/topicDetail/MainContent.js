/* eslint-disable no-underscore-dangle */
/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import PropTypes from "prop-types"
import { createPost } from "../../../redux/actions/postActions"
import { getOneTopic } from "../../../redux/actions/topicActions"
import TopicHeaderCard from "../../core/topicHeaderCard/TopicHeaderCard"
import TopicPost from "../../core/TopicPost/TopicPost"

function MainContent({ topic }) {
  const [body, setPostBody] = useState("")
  const UI = useSelector((state) => state.UI)
  const user = useSelector((state) => state.user)
  const params = useParams()
  const dispatch = useDispatch()
  const newPost = {
    body,
    topicId: params.topicId,
    owner: user?._id,
  }

  const createNewPost = () => {
    dispatch(createPost(newPost))
    dispatch(getOneTopic(params.topicId))
  }

  useEffect(() => {
    dispatch(getOneTopic(params.topicId))
  }, [dispatch, params.topicId])

  return (
    <div className="">
      {UI.errors && <p>{UI.errors.message}</p>}
      <TopicHeaderCard
        onClick={createNewPost}
        postBody={(e) => setPostBody(e)}
      />
      {topic?.posts?.map((post) => (
        <TopicPost key={post._id} post={post} topicId={params.topicId} />
      ))}
    </div>
  )
}

MainContent.propTypes = {
  topic: PropTypes.object.isRequired,
}

export default MainContent
