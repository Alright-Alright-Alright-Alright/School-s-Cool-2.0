/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-unused-prop-types */
import React from "react"
import PropTypes from "prop-types"

function TopicPost({ post }) {
  return (
    <div className="rounded-bl-2xl rounded-br-2xl rounded-r-2xl bg-white shadow-lg m-3">
      <div>
        <div className="flex justify-between p-3">
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-2"
              src="https://via.placeholder.com/40x40"
              alt="profile"
            />
            <p className="text-base">User name</p>
            <p className="text-base pl-3 text-grey-medium_light">
              Commented on
            </p>
            <a href="/" className="text-base pl-3">
              Topic name
            </a>
          </div>
          <div className="flex items-center">
            <p className="text-base">{post.createdAt}</p>
          </div>
        </div>
      </div>
      <div className="">
        <p className="border-b-2 border-grey-light m-3 pb-3 text-base">
          {post.body}
        </p>
      </div>
      <div className="flex justify-end pt-1 pr-3">
        <p className="text-base">Icons</p>
      </div>
      <div className="flex px-5 pb-5 pt-3">
        <img
          className="w-10 h-10 rounded-full mr-2"
          src="https://via.placeholder.com/30x30"
          alt="profile"
        />
        <input
          className="bg-grey-super_light w-full rounded-full text-base pl-3"
          type="text"
          placeholder="Add a comment"
        />
      </div>
    </div>
  )
}

TopicPost.propTypes = {
  post: PropTypes.object.isRequired,
}

export default TopicPost
