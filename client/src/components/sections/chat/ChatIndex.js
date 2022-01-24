import React from "react"
import { useSelector } from "react-redux"
import ChatMainContent from "./ChatMainContent"

function ChatIndex() {
  const user = useSelector((state) => state.user.singleUser)

  return (
    <div className="flex">
      <div className="w-1/2">
        <h1>Users</h1>
        <ul>
          <li>{user.firstName}</li>
          <li>{user.firstName}</li>
          <li>{user.firstName}</li>
        </ul>
      </div>
      <div className="w-1/2">
        <ChatMainContent user={user} />
      </div>
    </div>
  )
}

export default ChatIndex

// /* eslint-disable no-unused-vars */
// /* eslint-disable react/no-unused-state */
// /* eslint-disable react/destructuring-assignment */
// /* eslint-disable react/no-access-state-in-setstate */
// import React, { Component, useState, useEffect } from "react"
// import { useSelector, useDispatch } from "react-redux"
// // import axios from "axios"
// import Pusher from "pusher-js"
// import ChatList from "../../core/chat/ChatList"
// import ChatBox from "../../core/chat/ChatBox"
// import { service, configHeaders } from "../../../redux/api/axios"

// // import logo from "./logo.svg"
// // import "./App.css"

// // function ChatIndex() {
// //   const [chats, setChats] = useState([])
// //   const [text, setText] = useState("")
// //   const username = useSelector((state) => state.user.singleUser.firstName)

// //   const dispatch = useDispatch()

// //   useEffect(() => {
// //     const pusher = new Pusher("9c1aa92fafb85a22cab5", {
// //       cluster: "eu",
// //       forceTLS: true,
// //     })

// //     const channel = pusher.subscribe("chat")
// //     channel.bind("new-message", (data) => {
// //       console.log(data)
// //       setChats([...chats, data])
// //     })

// //     return () => {
// //       //   channel.unbind_all()
// //       channel.unsubscribe()
// //     }
// //   }, [chats])

// //   const handleTextChange = (e) => {
// //     if (e.keyCode === 13) {
// //       const payload = {
// //         username,
// //         message: text,
// //       }
// //       service.post(
// //         "http://localhost:5000/api/message",
// //         payload,
// //         configHeaders()
// //       )
// //     } else {
// //       setText(e.target.value)
// //     }
// //   }

// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img
// //           src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/SL_Benfica_logo.svg/1200px-SL_Benfica_logo.svg.png"
// //           className=" w-1/8"
// //           alt="logo"
// //         />
// //         <h1 className="App-title">Welcome to React-Pusher Chat</h1>
// //       </header>
// //       <section>
// //         <ChatList chats={chats} />
// //         <ChatBox
// //           text={text}
// //           username={username}
// //           handleTextChange={handleTextChange}
// //         />
// //       </section>
// //     </div>
// //   )
// // }

// // export default ChatIndex

// class ChatIndex extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       text: "",
//       username: "",
//       chats: [],
//     }
//   }

//   componentDidMount() {
//     const username = "Dirk"
//     this.setState({ username })
//     const pusher = new Pusher("9c1aa92fafb85a22cab5", {
//       cluster: "eu",
//       encrypted: true,
//     })
//     const channel = pusher.subscribe("chat")
//     channel.bind("message", (data) => {
//       this.setState({ chats: [...this.state.chats, data], test: "" })
//     })
//     this.handleTextChange = this.handleTextChange.bind(this)
//   }

//   handleTextChange(e) {
//     if (e.keyCode === 13) {
//       const payload = {
//         username: this.state.username,
//         message: this.state.text,
//       }
//       service.post(
//         "http://localhost:5000/api/message",
//         payload,
//         configHeaders()
//       )
//     } else {
//       this.setState({ text: e.target.value })
//     }
//   }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img
//             src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/SL_Benfica_logo.svg/1200px-SL_Benfica_logo.svg.png"
//             className=" w-1/8"
//             alt="logo"
//           />
//           <h1 className="App-title">Welcome to React-Pusher Chat</h1>
//         </header>
//         <section>
//           <ChatList chats={this.state.chats} />
//           <ChatBox
//             text={this.state.text}
//             username={this.state.username}
//             handleTextChange={this.handleTextChange}
//           />
//         </section>
//       </div>
//     )
//   }
// }

// export default ChatIndex
