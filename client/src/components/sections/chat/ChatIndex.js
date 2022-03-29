/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from "react"
import { StreamChat } from "stream-chat"
import {
  Avatar,
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
  ChannelSearch,
} from "stream-chat-react"
import { useSelector } from "react-redux"
import ChatUserList from "./ChatUserList"

import "stream-chat-react/dist/css/index.css"
import "./ChatIndexStyles.css"
import UserItem from "../../core/chat/UserItem"
import Icon from "../../core/Icon"

const STREAM_API = process.env.REACT_APP_STREAM_API_KEY

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

const CustomMessage = () => {
  const { message } = useMessageContext()

  return (
    <div>
      <b style={{ marginRight: "4px" }}>{message.user.name}</b> {message.text}
    </div>
  )
}

const CustomErrorIndicator = (props) => {
  const { text } = props

  return <div>{text}</div>
}

const CustomLoadingIndicator = () => <div>Loading, loading, loading...</div>

const ChatIndex = ({ handleShowModal }) => {
  const [chatClient, setChatClient] = useState(null)
  const [users, setUsers] = useState(null)
  const currentUser = useSelector((state) => state.user.singleUser)
  const chatToken = useSelector((state) => state.user.chatToken)

  const id = currentUser?._id
  const name = currentUser?.firstName
  const image = currentUser?.imageUrl

  const filters = { type: "messaging", members: { $in: [id] } }
  const sort = { last_message_at: -1 }

  const handleCloseModal = () => {
    handleShowModal()
  }

  const createChannel = async (event) => {
    // event.preventDefault()
    try {
      const newChannel = await chatClient.channel("messaging", {
        members: [id, event.id],
      })

      await newChannel.watch()

      //   setChannelName("")
      //   setIsCreating(false)
      //   setSelectedUsers([client.userID])
      //   setActiveChannel(newChannel)
    } catch (err) {
      console.log(err)
    }
  }

  const CustomList = (props) => {
    const {
      children,
      error,
      loading,
      LoadingErrorIndicator,
      showChannelSearch,
      onMessageNew,
    } = props

    console.log(children.props?.children)

    // const channel = children.channel("messaging", "test")

    // console.log(channel)

    if (error) {
      return <LoadingErrorIndicator type="connection" />
    }

    if (loading) {
      return <LoadingIndicator />
    }

    return (
      <div className="h-full">
        <button type="button" onClick={handleCloseModal}>
          <Icon iconName="close" />
        </button>
        <ChannelSearch />
        <div className="h-full">
          <div className="h-1/2 overflow-auto">
            <div className="w-full bg-grey-medium rounded-r-full rounded-bl-full">
              <div className="flex justify-between py-3 text-white">
                <p className="text-lg px-4"> Current Chats</p>
              </div>
            </div>
            {children}
          </div>
          <div className=" h-2/5 overflow-auto mb-3">
            <div className="w-full bg-grey-medium rounded-r-full rounded-bl-full">
              <div className="flex justify-between py-3 text-white">
                <p className="text-lg px-4"> Other users</p>
              </div>
            </div>
            {users.users.map((user) => (
              <UserItem user={user} createChannel={createChannel} />
            ))}
          </div>
        </div>
      </div>
    )
  }

  useEffect(() => {
    const initChat = async () => {
      const client = new StreamChat(STREAM_API)

      // await client.connectUser({ id, name, image }, client.devToken(id))

      await client.connectUser({ id, name, image }, chatToken)

      const allUsers = await client.queryUsers(
        { id: { $ne: client.userID } },
        { id: 1 },
        { limit: 8 }
      )

      setUsers(allUsers)
      setChatClient(client)
    }

    initChat()
    // return () => chatClient.disconnectUser()
  }, [])

  if (!chatClient) {
    return <LoadingIndicator />
  }

  const customOnMessageNew = async (setChannels, event) => {
    const eventChannel = event.channel

    const client = new StreamChat(STREAM_API)

    await client.connectUser({ id, name, image }, client.devToken(id))

    // If the channel isn't frozen, then don't add it to the list.
    if (!eventChannel?.id || !eventChannel.frozen) return

    try {
      const newChannel = client.channel(eventChannel.type, eventChannel.id)
      await newChannel.watch()
      setChannels((channels) => [newChannel, ...channels])
      console.log(newChannel)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Chat client={chatClient} theme="messaging light">
      <ChannelList
        allowNewMessagesFromUnfilteredChannels
        showChannelSearch
        filters={filters}
        sort={sort}
        // onChannelUpdated={(channel) => console.log(channel)}
        // onMessageNew={customOnMessageNew}
        // List={CustomList}
        // LoadingErrorIndicator={() => (
        //   <CustomErrorIndicator
        //     text="Loading Error - check your connection."
        //     type="connection"
        //   />
        // )}
        // LoadingIndicator={CustomLoadingIndicator}
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

export default ChatIndex
