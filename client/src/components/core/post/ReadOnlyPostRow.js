import React from "react"
import PropTypes from "prop-types"
import ReactHtmlParser from "react-html-parser"

function ReadOnlyPostRow({ postBody }) {
  return (
    <p className="border-b-2 border-grey-light m-3 pb-3 text-base">
      {ReactHtmlParser(postBody)}
    </p>
  )
}

ReadOnlyPostRow.propTypes = {
  postBody: PropTypes.string.isRequired,
}

export default ReadOnlyPostRow
