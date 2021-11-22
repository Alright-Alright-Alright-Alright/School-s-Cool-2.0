/* eslint-disable no-underscore-dangle */
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
  const UI = useSelector((state) => state.UI)
  const user = useSelector((state) => state.user)
  const params = useParams()
  const dispatch = useDispatch()

  const newPost = {
    body,
    topicId: params.topicId,
    author: user?.user?._id,
  }

  useEffect(() => {
    dispatch(getAllPosts(params.topicId))
  }, [dispatch, params.topicId])

  const createNewPost = () => {
    dispatch(createPost(newPost))
    // {UI.errors && <p>{UI.errors.message}</p>}

    // if (ui.errors.length === 0) {
    setTimeout(() => {
      dispatch(getAllPosts(params.topicId))
    }, 100)
    // }
  }

  return (
    <div className="">
      {UI.errors && <p>{UI.errors.message}</p>}
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
