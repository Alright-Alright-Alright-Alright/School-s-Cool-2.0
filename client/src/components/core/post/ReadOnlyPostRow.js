import React from "react"
import PropTypes from "prop-types"
import ReactHtmlParser from "react-html-parser"
import Linkify from "react-linkify"

function ReadOnlyPostRow({ postBody }) {
  return (
    <p className="border-b-2 border-grey-light m-3 pb-3 text-base ">
      <Linkify
        componentDecorator={(decoratedHref, decoratedText, key) => (
          <a
            target="blank"
            href={decoratedHref}
            key={key}
            className=" text-sky hover:text-sky-light"
          >
            {decoratedText}
          </a>
        )}
      >
        {ReactHtmlParser(postBody)}
      </Linkify>
    </p>
  )
}

ReadOnlyPostRow.propTypes = {
  postBody: PropTypes.string.isRequired,
}

export default ReadOnlyPostRow
