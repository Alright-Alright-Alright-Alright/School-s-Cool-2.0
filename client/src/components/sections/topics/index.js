import React from "react"
import Main from "../../layout/main"
import TopicCards from "../../core/topicsCards/TopicCards"

function index() {
  return (
    <>
      <Main main={<TopicCards />} />
    </>
  )
}

export default index
