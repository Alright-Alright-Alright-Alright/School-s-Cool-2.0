import React from "react"
import Main from "../../layout/main"
import ActivityFeed from "./ActivityFeed"
import DashCardsLeft from "./DashCardsLeft"
import DashCardsRight from "./DashCardsRight"
import { DashCardChatList } from "./DashCardChat"

function index() {
  return (
    <>
      <Main
        main={<ActivityFeed />}
        contentLeft={<DashCardsLeft />}
        contentRight={<DashCardsRight />}
        contentBottomRight={<DashCardChatList />}
      />
    </>
  )
}

export default index
