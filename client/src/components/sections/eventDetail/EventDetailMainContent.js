/* eslint-disable no-underscore-dangle */
import React from "react"
import PropTypes from "prop-types"
import TopicHeaderCard from "../../core/topics/topicHeaderCard/TopicHeaderCard"
// import TopicPost from "../../core/topics/TopicPost/TopicPost"

function EventDetailMainContent({ event }) {
  console.log(event)
  return (
    <div>
      <TopicHeaderCard
      // onClick={createNewPost}
      // postBody={(e) => setPostBody(e)}
      />
      {/* {event?.comment.map((post) => (
        <TopicPost
          key={post?._id}
          post={post}
          //   topicId={params.topicId}
          comments={post?.comments}
        />
      ))} */}
    </div>
  )
}

EventDetailMainContent.propTypes = {
  event: PropTypes.shape.isRequired,
}

export default EventDetailMainContent
