/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-array-index-key */
import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import PropTypes from "prop-types"
import { getAllPosts, createPost } from "../../../redux/actions/postActions"
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
    author: user?.user?._id,
  }

  const createNewPost = () => {
    dispatch(createPost(newPost))
    setTimeout(() => {
      dispatch(getAllPosts(params.topicId))
    }, 100)
  }

  return (
    <div className="">
      {UI.errors && <p>{UI.errors.message}</p>}
      <TopicHeaderCard
        onClick={createNewPost}
        postBody={(e) => setPostBody(e)}
      />
      {topic.posts.map((post, index) => (
        <TopicPost key={index} post={post} />
      ))}
    </div>
  )
}

MainContent.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  topic: PropTypes.object.isRequired,
}

export default MainContent
