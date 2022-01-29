/* eslint-disable no-unused-vars */
import React from "react"
import { StreamChat, AnyRole } from "stream-chat"
import {
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react"
import Main from "../../layout/Main"
import ActivityFeed from "./ActivityFeed"
import DashCardsLeft from "./DashCardsLeft"
import DashCardsRight from "./DashCardsRight"
import ChatMainContent from "../chat/ChatMainContent"

import ChatIndex from "../chat/ChatIndex"
import ChatWidget from "../chat/ChatWidget"

// const client = StreamChat.getInstance("4gr5arqkjs4r", {
//   timeout: 6000,
// })

// const userToken =
//   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZW1wdHktc2hhZG93LTgifQ.rLf0N-Ncmh0fe4sJQUu0ktrLK1K8BXw7lgEO3DWSGlU"

// client.connectUser(
//   {
//     id: "empty-shadow-8",
//     name: "empty-shadow-8",
//     role: "admin",
//     image:
//       "https://getstream.io/random_png/?id=empty-shadow-8&name=empty-shadow-8",
//   },
//   userToken
// )

// const conversation = client.channel("messaging", {
//   members: ["empty-shadow-8"],
// })
function index() {
  return (
    <div className="static ">
      <Main
        main={<ActivityFeed />}
        contentLeft={<DashCardsLeft />}
        contentRight={<DashCardsRight />}
      />
    </div>
  )
}

export default index
