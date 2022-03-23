/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import PropTypes from "prop-types"
import { getAllPosts } from "../../../redux/actions/postActions"
import Post from "../../core/post/Post"
import RichTextToolbar from "../../core/richtText/RichTextToolbar"
import TopicModal from "../../core/topics/TopicModal"

function MainContent({ topic, showModal, editModal, showEditModal }) {
  const [body, setPostBody] = useState("")
  const UI = useSelector((state) => state.UI)
  const user = useSelector((state) => state.user)
  const posts = useSelector((state) => state.posts.allPosts)
  const params = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllPosts(params.topicId))
  }, [dispatch, params.topicId])

  return (
    <div className="static">
      {UI.errors && <p>{UI.errors.message}</p>}
      <RichTextToolbar />
      {/* <TopicHeaderCard
        onClick={createNewPost}
        postBody={(e) => setPostBody(e)}
      /> */}
      {showModal && (
        <TopicModal
          editModal={editModal}
          handleShowModal={showEditModal}
          singleTopic={topic}
        />
      )}
      {posts?.map((post) => (
        <Post
          key={post?._id}
          post={post}
          parentId={params.topicId}
          comments={post?.comments}
          // onDeletePost={handleDeletePost}
        />
      ))}
    </div>
  )
}

MainContent.propTypes = {
  topic: PropTypes.object.isRequired,
}

export default MainContent
