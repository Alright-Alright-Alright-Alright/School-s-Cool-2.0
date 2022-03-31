/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react"
import { Avatar, useChatContext } from "stream-chat-react"

// import { InviteIcon } from "../assets"

const ListContainer = ({ children }) => (
  <div className="">
    <div className="h-1/2 overflow-auto">
      <div className="w-full bg-grey-medium rounded-r-full rounded-bl-full">
        <div className="flex justify-between py-3 text-white">
          <p className="text-lg px-4"> Current Chats</p>
        </div>
      </div>
      {children}
    </div>
  </div>
)

const UserItem = ({ user, setSelectedUsers }) => {
  const [selected, setSelected] = useState(false)

  const handleSelect = () => {
    if (selected) {
      setSelectedUsers((prevUsers) =>
        prevUsers.filter((prevUser) => prevUser !== user.id)
      )
    } else {
      setSelectedUsers((prevUsers) => [...prevUsers, user.id])
    }

    setSelected((prevSelected) => !prevSelected)
  }

  return (
    <div className="flex" onClick={handleSelect}>
      <div className="flex">
        <Avatar image={user.image} name={user.name || user.id} size={32} />
        <p className="">{user.name || user.id}</p>
      </div>
      {selected ? <h1>invite</h1> : <div className="user-item__invite-empty" />}
    </div>
  )
}

const UserList = ({ setSelectedUsers }) => {
  const { client } = useChatContext()
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [listEmpty, setListEmpty] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const getUsers = async () => {
      if (loading) return

      setLoading(true)

      try {
        const response = await client.queryUsers(
          { id: { $ne: client.userID } },
          { id: 1 },
          { limit: 8 }
        )

        if (response.users.length) {
          setUsers(response.users)
        } else {
          setListEmpty(true)
        }
      } catch (error) {
        setError(true)
      }
      setLoading(false)
    }

    if (client) getUsers()
  }, [])

  if (error) {
    return (
      <ListContainer>
        <div className="user-list__message">
          Error loading, please refresh and try again.
        </div>
      </ListContainer>
    )
  }

  if (listEmpty) {
    return (
      <ListContainer>
        <div className="user-list__message">No users found.</div>
      </ListContainer>
    )
  }

  return (
    <ListContainer>
      {loading ? (
        <div className="user-list__message">Loading users...</div>
      ) : (
        <div className="h-full">
          <button type="button" onClick={() => console.log("handleCloseModal")}>
            {/* <Icon iconName="close" /> */}
          </button>
          {/* <ChannelSearch /> */}
          <div className="h-full">
            <div className=" h-2/5 overflow-auto mb-3">
              <div className="w-full bg-grey-medium rounded-r-full rounded-bl-full">
                <div className="flex justify-between py-3 text-white">
                  <p className="text-lg px-4"> Other users</p>
                </div>
              </div>
              {users?.map((user, i) => (
                <UserItem
                  index={i}
                  key={user.id}
                  user={user}
                  setSelectedUsers={setSelectedUsers}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </ListContainer>
  )
}

export default UserList
