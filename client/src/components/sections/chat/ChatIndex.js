/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from "react"
import { StreamChat } from "stream-chat"
import {
  Chat,
  Channel,
  ChannelHeader,
  ChannelList,
  ChannelListMessenger,
  LoadingIndicator,
  MessageInput,
  MessageList,
  Thread,
  useMessageContext,
  Window,
} from "stream-chat-react"
import { useSelector } from "react-redux"
import ChatUserList from "./ChatUserList"

import "stream-chat-react/dist/css/index.css"

const STREAM_API = process.env.REACT_APP_STREAM_API_SECRET

const userToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoibGluZ2VyaW5nLXdvb2QtOSJ9.PJr1U8ujbLF-NPlqDaWJGntcp5TViLlDPwz7oBDYSQM"

const CustomChannelPreview = (props) => {
  const { channel, setActiveChannel } = props

  const { messages } = channel.state
  const messagePreview = messages[messages.length - 1]?.text.slice(0, 30)

  return (
    <div onClick={() => setActiveChannel(channel)} className=" h-6/7 bg-yellow">
      <div>{channel.data.name || "Unnamed Channel"}</div>
      <div style={{ fontSize: "14px" }}>{messagePreview}</div>
    </div>
  )
}

const CustomChannelList = (props) => (
  <div>
    <h1>Custom Channel List</h1>
    {/* <CustomChannelPreview /> */}
    <h1>User</h1>
    <h1>User</h1>
    <h1>User</h1>
  </div>
)

const CustomMessage = () => {
  const { message } = useMessageContext()

  return (
    <div>
      <b style={{ marginRight: "4px" }}>{message.user.name}</b> {message.text}
    </div>
  )
}

const App = () => {
  const [chatClient, setChatClient] = useState(null)
  const currentUser = useSelector((state) => state.user.singleUser)

  const id = currentUser?._id
  const name = currentUser?.firstName

  const filters = { type: "messaging" }
  const sort = { last_message_at: -1 }

  const customClasses = {
    chat: " shadow-lg rounded-lg",
    channel: " shadow-lg rounded-lg",
    channelList: "shadow-lg rounded-lg",
    chatContainer: "bg-white flex  mx-auto bottom-20",
  }

  const customStyles = {
    "--primary-color": "green",
    "--md-font": "1.2rem",
    "--xs-m": "1.2rem",
    "--xs-p": "1.2rem",
    "height:": "100%",
  }

  useEffect(() => {
    const initChat = async () => {
      const client = new StreamChat(STREAM_API)

      await client.connectUser({ id, name }, client.devToken(id))

      const users = await client.queryUsers(
        { id: { $ne: client.userID } },
        { id: 1 },
        { limit: 8 }
      )
      console.log(users)

      setChatClient(client)
    }

    initChat()
  }, [])

  if (!chatClient) {
    return <LoadingIndicator />
  }

  return (
    <Chat
      client={chatClient}
      //   customStyles={customStyles}
      theme="messaging light"
      //   customClasses={customClasses}
      // customStyles={{
      //   chat: " shadow-lg rounded-lg bg-yellow",
      //   channel: "bg-white shadow-lg rounded-lg",
      //   channelList: "bg-yellow shadow-lg rounded-lg w-full",
      //   threadList: "bg-yellow shadow-lg rounded-lg w-full",
      //   chatContainer: "bg-yellow shadow-lg rounded-lg w-full",
      // }}
    >
      <ChannelList
        filters={filters}
        sort={sort}
        // List={CustomChannelList}
        // Preview={CustomChannelPreview}
      />
      <Channel>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  )
}

export default App
