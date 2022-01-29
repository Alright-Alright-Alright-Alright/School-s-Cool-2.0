/* eslint-disable no-unused-vars */
import React from "react"
import Main from "../../layout/Main"
import ActivityFeed from "./ActivityFeed"
import DashCardsLeft from "./DashCardsLeft"
import DashCardsRight from "./DashCardsRight"

function index() {
  return (
    <div className="static">
      <Main
        main={<ActivityFeed />}
        contentLeft={<DashCardsLeft />}
        contentRight={<DashCardsRight />}
      />
    </div>
  )
}

export default index
