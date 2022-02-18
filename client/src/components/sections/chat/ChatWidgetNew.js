/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import ChatIndex from "./ChatIndex"
import Icon from "../../core/Icon"
// import MessageHandler from "../MessageHandler"
import ChatIcon from "./community-chat.png"

function ChatWidgetNew() {
  const [showChatWidget, setShowChatWidget] = useState(false)

  const handleShowModal = () => {
    setShowChatWidget(!showChatWidget)
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setShowChatWidget(!showChatWidget)}
        className="fixed bottom-0 right-0 mr-5 mb-5"
      >
        <div>
          <img src={ChatIcon} alt="chat" className="h-20 w-20" />
        </div>
      </button>
      {showChatWidget && (
        <>
          <div className=" h-5/6 w-5/7 rounded-2xl bg-white justify-evenly absolute inset-y-0 right-0 top-20 mb-20 shadow-xl ">
            {/* {UI.errors && <MessageHandler error={UI.errors.data.message} />} */}
            <ChatIndex handleShowModal={handleShowModal} />
          </div>
        </>
      )}
    </>
  )
}

export default ChatWidgetNew
