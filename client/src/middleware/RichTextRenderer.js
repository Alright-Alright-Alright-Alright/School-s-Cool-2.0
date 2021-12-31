/* eslint-disable react/prop-types */
import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"

function RichTextRenderer(document) {
  const Bold = ({ children }) => <p className="font-bold py-3">{children}</p>

  const Text = ({ children }) => <p className="text-left text-sm">{children}</p>

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className=" text-lg py-3">{children}</h1>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className="list-disc">
          <li className="pt-3">{children}</li>
        </ul>
      ),
    },
    renderText: (text) => text.replace("!", "?"),
  }

  return documentToReactComponents(document, options)
}

export default RichTextRenderer
