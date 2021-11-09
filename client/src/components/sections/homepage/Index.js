import React from "react"
import Main from "../../layout/main"
import ActivityFeed from "./ActivityFeed"
import DashCardsLeft from "./DashCardsLeft"
import DashCardsRight from "./DashCardsRight"

function index() {
  return (
    <>
      <Main
        main={<ActivityFeed />}
        contentLeft={<DashCardsLeft />}
        contentRight={<DashCardsRight />}
      />
    </>
  )
}

export default index
