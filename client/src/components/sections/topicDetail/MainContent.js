/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { getAllPosts, createPost } from "../../../redux/actions/postActions"
import TopicHeaderCard from "../../core/topicHeaderCard/TopicHeaderCard"
import TopicPost from "../../core/TopicPost/TopicPost"

function MainContent() {
  const [body, setPostBody] = useState("")
  const posts = useSelector((state) => state.posts.posts)
  const params = useParams()
  const dispatch = useDispatch()

  const newPost = {
    body,
    topicId: params.topicId,
  }

  useEffect(() => {
    dispatch(getAllPosts(params.topicId))
  }, [dispatch, params.topicId])

  const createNewPost = () => {
    dispatch(createPost(newPost))
    setTimeout(() => {
      dispatch(getAllPosts(params.topicId))
    }, 100)
  }

  return (
    <div className="">
      <TopicHeaderCard
        onClick={createNewPost}
        postBody={(e) => setPostBody(e)}
      />
      {posts.map((post, index) => (
        <TopicPost key={index} post={post} />
      ))}
    </div>
  )
}

export default MainContent
