/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { StreamChat } from "stream-chat"
import {
  Chat,
  Channel,
  ChannelHeader,
  ChannelList,
  LoadingIndicator,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react"

import "stream-chat-react/dist/css/index.css"

const userToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZW1wdHktc2hhZG93LTgifQ.rLf0N-Ncmh0fe4sJQUu0ktrLK1K8BXw7lgEO3DWSGlU"

const filters = { type: "messaging", members: { $in: ["empty-shadow-8"] } }
const sort = { last_message_at: -1 }

const App = () => {
  const [chatClient, setChatClient] = useState(null)
  const [channel, setChannel] = useState(null)
  const chatToken = useSelector((state) => state.user.chatToken)
  const user = useSelector((state) => state.user.singleUser)
  const allUsers = useSelector((state) => state.user.users)

  console.log(channel)

  const getUsers = async () => {
    const response = await chatClient.queryUsers({
      id: { $in: ["empty-shadow-8", "jack", "jessie"] },
    })

    console.log(response)
  }

  useEffect(() => {
    const initChat = async () => {
      const client = StreamChat.getInstance("4gr5arqkjs4r")

      //   const usersForChat = allUsers.map((chatUser) => chatUser.firstName)

      const newChannel = client.channel("messaging", "travel", {
        name: "Awesome channel about Tiago",
        // members: usersForChat,
      })
      // Here, 'travel' will be the channel ID
      await newChannel.create()

      await client.connectUser(
        {
          id: "empty-shadow-8",
          name: "empty-shadow-8",
          image:
            "https://getstream.io/random_png/?id=empty-shadow-8&name=empty-shadow-8",
        },
        userToken
      )
      setChannel(newChannel)
      setChatClient(client)
    }

    initChat()
    // getUsers()
  }, [])

  const disconnect = () => {
    chatClient.disconnect()
  }

  if (!chatClient) {
    return <LoadingIndicator />
  }

  return (
    <Chat client={chatClient} theme="messaging light">
      <ChannelList filters={filters} sort={sort} />
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
      <button type="button" onClick={disconnect}>
        disconnect
      </button>
    </Chat>
  )
}

export default App
