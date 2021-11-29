import React from "react"
import { useSelector } from "react-redux"

function CommentForm() {
  const user = useSelector((state) => state.user)

  return (
    <form className="flex px-5 pb-5 pt-3">
      <img
        className="w-10 h-10 rounded-full mr-2"
        src={`${user?.imageUrl}`}
        alt="profile"
      />
      <input
        className=" border-grey-super_light border-2 bg-white w-full rounded-full text-sm pl-3 placeholder-grey-dark"
        type="text"
        placeholder="Write a comment"
      />
    </form>
  )
}

export default CommentForm
