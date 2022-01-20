/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import PropTypes from "prop-types"
import { createPost, getAllPosts } from "../../../redux/actions/postActions"
import TopicHeaderCard from "../../core/topics/topicHeaderCard/TopicHeaderCard"
import TopicPost from "../../core/topics/TopicPost/TopicPost"
import RichTextToolbar from "../../core/richtText/RichTextToolbar"

function MainContent({ topic }) {
  const [body, setPostBody] = useState("")
  const UI = useSelector((state) => state.UI)
  const user = useSelector((state) => state.user)
  const posts = useSelector((state) => state.posts.allPosts)
  const params = useParams()
  const dispatch = useDispatch()
  const newPost = {
    body,
    topicId: params.topicId,
    owner: user?._id,
  }

  const createNewPost = () => {
    dispatch(createPost(newPost))
    setPostBody("")
    dispatch(getAllPosts(params.topicId))
  }

  const handleDeletePost = () => {
    dispatch(getAllPosts(params.topicId))
  }

  useEffect(() => {
    dispatch(getAllPosts(params.topicId))
  }, [dispatch, params.topicId])

  return (
    <div className="static">
      {UI.errors && <p>{UI.errors.message}</p>}
      <RichTextToolbar />
      <TopicHeaderCard
        onClick={createNewPost}
        postBody={(e) => setPostBody(e)}
      />
      {posts?.map((post) => (
        <TopicPost
          key={post?._id}
          post={post}
          topicId={params.topicId}
          comments={post?.comments}
          onDeletePost={handleDeletePost}
        />
      ))}
    </div>
  )
}

MainContent.propTypes = {
  topic: PropTypes.object.isRequired,
}

export default MainContent
