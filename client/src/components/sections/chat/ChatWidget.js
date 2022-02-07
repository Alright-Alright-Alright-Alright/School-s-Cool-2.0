/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-return-await */
import React, { useEffect, useCallback, useRef, useState } from "react"
import { useSelector } from "react-redux"
import {
  Widget,
  addUserMessage,
  renderCustomComponent,
  addResponseMessage,
} from "react-chat-widget"
import { StreamChat } from "stream-chat"
import ChatLogo from "./community-chat.png"
import CustomChatComponent from "./CustomChatComponent"

// Import default styles for the react-chat-widget
import "react-chat-widget/lib/styles.css"
import "./ChatWidgetStyles.css"

// import { DEFAULT_USER } from "./constants"

const DEFAULT_USER = {
  id: "dirkkelderman",
  name: "dirkkelderman",
}

// Use our API secret from env file
const STREAM_API = process.env.REACT_APP_STREAM_API_SECRET

function ChatWidget({ user }) {
  const [newChannel, setNewChannel] = useState(null)
  const [messages, setMessages] = useState(null)
  const currentUser = useSelector((state) => state.user.singleUser)

  console.log(currentUser)

  // Create client variable from StreamChat using the api
  const client = new StreamChat(STREAM_API)
  //   const { id, name } = user

  const id = currentUser?._id
  const name = currentUser?.firstName

  const channel = useRef(null)

  // Method - Set the user with the strean chat client variable
  const setUser = useCallback(async () => {
    await client.connectUser(
      { id: currentUser?._id, name: currentUser?.firstName },
      client.devToken(id)
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, name])

  const setChannel = useCallback(async () => {
    channel.current = client.channel("messaging", "General", {
      name: "School's cool chat",
    })

    const channelWatch = await channel.current.watch()
    setMessages(channelWatch.messages)
    console.log(channelWatch)

    return async () => {
      await channelWatch.stopWatching()
    }
  }, [])

  const handleNewUserMessage = useCallback(
    async (message) =>
      await channel.current.sendMessage({
        text: message,
      }),
    []
  )

  const handleNewChannel = useCallback(async (userToChatWith) => {
    channel.current = client.channel("messaging", {
      members: [userToChatWith._id, currentUser._id],
    })

    const channelWatch = await channel.current.watch()
    setMessages(channelWatch.messages)

    console.log(channelWatch)

    return async () => {
      await channelWatch.stopWatching()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const customComponent = () => (
    <CustomChatComponent
      messages={messages}
      handleNewChannel={handleNewChannel}
    />
  )

  // Effect - Set the user and channel on first render
  useEffect(() => {
    setTimeout(() => {
      setUser()
    }, 1000)

    setTimeout(() => {
      setChannel()
    }, 2000)

    // setChannel()
    renderCustomComponent(customComponent)
  }, [setUser, setChannel, handleNewChannel])

  // Effect - Map through the messages and add them to the widget using 'addUserMessage'
  useEffect(
    () => messages?.map((message) => addUserMessage(message.text)),
    [messages]
  )

  useEffect(() => {
    messages?.map(
      (message) =>
        // if (message.user.id === currentUser?._id) {
        //   addResponseMessage(message.text)
        // }
        message.user.id !== currentUser?._id && addResponseMessage(message.text)
    )
    // addResponseMessage("Welcome to this chat!")
  }, [messages])

  console.log(messages)

  return (
    <div className="Chatwidget">
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        title="School's cool Amsterdam"
        subtitle=""
        profileClientAvatar={currentUser?.imageUrl}
        launcherOpenImg={ChatLogo}
        emojis
        showBadge
        addResponseMessage={addResponseMessage}
        resizable
      />
    </div>
  )
}

ChatWidget.defaultProps = {
  user: DEFAULT_USER,
}

export default ChatWidget
