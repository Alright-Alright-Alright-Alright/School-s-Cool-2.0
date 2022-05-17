/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getAllTheUsers, updateUser } from "../../../redux/actions/userActions"
import ReadOnlyRow from "../../core/admin/ReadOnlyRow"
import EditableRow from "../../core/admin/EditableRow"

function AdminPanelMainContent() {
  const allUsers = useSelector((state) => state.user.users.users)
  const [sortedUsers, setSortedUsers] = useState([])
  const [toggleSorting, setToggleSorting] = useState(false)
  const [editUserId, setEditUserId] = useState(null)
  const [editFormData, setEditFormData] = useState({
    firstName: "",
    lastName: "",
    role: "",
    email: "",
  })
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllTheUsers())
  }, [dispatch])

  const handleCancelClick = () => {
    setEditUserId(null)
  }

  const handleEditClick = (event, user) => {
    event.preventDefault()
    setEditUserId(user._id)
    const formValues = {
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      email: user.email,
    }
    setEditFormData(formValues)
  }

  const handleEditFormChange = (event) => {
    event.preventDefault()

    const fieldName = event.target.getAttribute("name")
    const fieldValue = event.target.value

    const newFormData = { ...editFormData }
    newFormData[fieldName] = fieldValue

    setEditFormData(newFormData)
  }

  const handleEditFormSubmit = (event) => {
    event.preventDefault()

    const editedContact = {
      id: editUserId,
      firstName: editFormData.firstName,
      lastName: editFormData.lastName,
      role: editFormData.role,
      email: editFormData.email,
    }
    dispatch(updateUser(editedContact))
    setEditUserId(null)
  }

  const handleDeleteClick = () => {}

  const sortUsers = (filter) => {
    if (filter === "firstName") {
      if (toggleSorting) {
        setSortedUsers(
          allUsers.sort((a, b) => {
            if (a.firstName < b.firstName) return -1
            if (a.firstName > b.firstName) return 1
            return 0
          })
        )
        setToggleSorting(!toggleSorting)
      } else {
        setSortedUsers(
          allUsers.sort((a, b) => {
            if (a.firstName > b.firstName) return -1
            if (a.firstName < b.firstName) return 1
            return 0
          })
        )
        setToggleSorting(!toggleSorting)
      }
    } else if (filter === "lastName") {
      if (toggleSorting) {
        setSortedUsers(
          allUsers.sort((a, b) => {
            if (a.lastName < b.lastName) return -1
            if (a.lastName > b.lastName) return 1
            return 0
          })
        )
        setToggleSorting(!toggleSorting)
      } else {
        setSortedUsers(
          allUsers.sort((a, b) => {
            if (a.lastName > b.lastName) return -1
            if (a.lastName < b.lastName) return 1
            return 0
          })
        )
        setToggleSorting(!toggleSorting)
      }
    } else if (filter === "email") {
      if (toggleSorting) {
        setSortedUsers(
          allUsers.sort((a, b) => {
            if (a.email < b.email) return -1
            if (a.email > b.email) return 1
            return 0
          })
        )
        setToggleSorting(!toggleSorting)
      } else {
        setSortedUsers(
          allUsers.sort((a, b) => {
            if (a.email > b.email) return -1
            if (a.email < b.email) return 1
            return 0
          })
        )
        setToggleSorting(!toggleSorting)
      }
    } else {
      setSortedUsers(allUsers)
    }
  }

  const sortedUsersList = sortedUsers?.map((user) =>
    editUserId === user._id ? (
      <EditableRow
        key={user._id}
        editFormData={editFormData}
        handleEditFormChange={handleEditFormChange}
        handleCancelClick={handleCancelClick}
      />
    ) : (
      <ReadOnlyRow
        key={user._id}
        user={user}
        handleEditClick={handleEditClick}
        handleDeleteClick={handleDeleteClick}
      />
    )
  )

  const usersList = allUsers?.map((user) =>
    editUserId === user._id ? (
      <EditableRow
        key={user._id}
        editFormData={editFormData}
        handleEditFormChange={handleEditFormChange}
        handleCancelClick={handleCancelClick}
      />
    ) : (
      <ReadOnlyRow
        key={user._id}
        user={user}
        handleEditClick={handleEditClick}
        handleDeleteClick={handleDeleteClick}
      />
    )
  )

  return (
    <div>
      <h1 className=" text-xl text-left pt-3">Admin Panel</h1>
      <div>
        <body className="flex items-center justify-center">
          <div className="container">
            <form onSubmit={handleEditFormSubmit}>
              <table className="w-full flex flex-row flex-no-wrap  rounded-lg overflow-hidden  my-5">
                <thead className="">
                  {allUsers?.map((user) => (
                    <tr
                      key={user._id}
                      className="flex flex-col flex-no wrap sm:table-row rounded-l-lg bg-grey-medium_light lg:bg-grey-super_light  sm:rounded-none mb-2 sm:mb-0 border-b-3 border-grey-light"
                    >
                      <th className="p-3 text-left">
                        <button
                          type="button"
                          className="w-full text-left font-bold"
                          onClick={() => sortUsers("firstName")}
                        >
                          Name
                        </button>
                      </th>
                      <th className="p-3 text-left">
                        <button
                          type="button"
                          className="w-full text-left font-bold"
                          onClick={() => sortUsers("email")}
                        >
                          Email
                        </button>
                      </th>
                      <th className="p-3 text-left">
                        <button
                          type="button"
                          className="w-full text-left font-bold"
                        >
                          Role
                        </button>
                      </th>
                      <th className="p-3 text-left" width="110px">
                        Actions
                      </th>
                    </tr>
                  ))}
                </thead>
                <tbody className="flex-1 sm:flex-none">
                  {usersList || sortedUsersList}
                </tbody>
              </table>
            </form>
          </div>
        </body>
      </div>
    </div>
  )
}

export default AdminPanelMainContent
