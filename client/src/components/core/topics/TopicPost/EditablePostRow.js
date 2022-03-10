import React from "react"
import PropTypes from "prop-types"
import Button from "../../Button"

function ReadOnlyPostRow({ postBody, handleEditPost, handleSubmitEditPost }) {
  return (
    <div className="flex border-b-2 border-grey-light m-3 pb-3 text-base">
      <input
        className="text-base w-full"
        type="text"
        placeholder={postBody}
        onChange={handleEditPost}
      />
      <Button
        buttonName="Save"
        buttonStyle="btnTopicStyle"
        buttonSubmit
        onClick={handleSubmitEditPost}
      />
    </div>
  )
}

ReadOnlyPostRow.propTypes = {
  postBody: PropTypes.string.isRequired,
  handleEditPost: PropTypes.func.isRequired,
  handleSubmitEditPost: PropTypes.func.isRequired,
}

export default ReadOnlyPostRow
