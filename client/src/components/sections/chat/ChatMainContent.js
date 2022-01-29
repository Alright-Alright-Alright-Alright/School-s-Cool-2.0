import React, { useEffect, useState } from "react"
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
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoic2hyaWxsLXRydXRoLTEifQ.zpfEkTCCJmPFj7GAOZ4EtMpUxmjsN-4jMX81D2Wc85E"

const filters = { type: "messaging", members: { $in: ["shrill-truth-1"] } }
const sort = { last_message_at: -1 }

const App = () => {
  const [chatClient, setChatClient] = useState(null)

  useEffect(() => {
    const initChat = async () => {
      const client = StreamChat.getInstance("4gr5arqkjs4r")

      await client.connectUser(
        {
          id: "shrill-truth-1",
          name: "shrill-truth-1",
          image:
            "https://getstream.io/random_png/?id=shrill-truth-1&name=shrill-truth-1",
        },
        userToken
      )

      setChatClient(client)
    }

    initChat()

    return () => chatClient.disconnectUser()
  }, [])

  if (!chatClient) {
    return <LoadingIndicator />
  }

  return (
    <Chat client={chatClient} theme="messaging light">
      <ChannelList filters={filters} sort={sort} />
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
