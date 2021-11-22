/* eslint-disable no-unused-vars */
import React, { useEffect } from "react"
import Main from "../../layout/main"
import TopicContentLeft from "./TopicContentLeft"
import MainContent from "./MainContent"
import TopicContentRight from "./TopicContentRight"

function TopicDetailIndex() {
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
