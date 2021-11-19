/* eslint-disable no-unused-vars */
import React from "react"
import { useParams } from "react-router-dom"
import Main from "../../layout/main"
import TopicContentLeft from "./TopicContentLeft"
import MainContent from "./MainContent"
import TopicContentRight from "./TopicContentRight"

function TopicDetailIndex() {
  const params = useParams()

  return (
    <>
      <Main
        main={<MainContent />}
        contentLeft={<TopicContentLeft />}
        contentRight={<TopicContentRight />}
      />
    </>
  )
}

export default TopicDetailIndex
