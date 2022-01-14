/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import Dashcard from "../../core/dashcard/Dashcard"
import dashcardDropdownMenu from "../../../data/dashcardDropdownMenu.json"
import { getAlltopics } from "../../../redux/actions/topicActions"
import { getAllEvents } from "../../../redux/actions/eventActions"
import { getAllCourses } from "../../../redux/actions/courseActions"
import { getAllFilesFromLibrary } from "../../../redux/actions/libraryActions"
import { updateUser } from "../../../redux/actions/userActions"
import Button from "../../core/Button"

function ProfileMainContent() {
  const [showEditForm, setShowEditForm] = useState(false)
  const user = useSelector((state) => state.user.singleUser)
  const topics = useSelector((state) => state.topics.allTopics)
  const courses = useSelector((state) => state.courses.allCourses)
  const events = useSelector((state) => state.events.allEvents)
  const dispatch = useDispatch()
  const { userId } = useParams()

  const [firstName, setFirstName] = useState(user.firstName)
  const [lastName, setLastName] = useState(user.lastName)
  const [email, setEmail] = useState(user.email)

  useEffect(() => {
    dispatch(getAlltopics())
    dispatch(getAllFilesFromLibrary())
    dispatch(getAllEvents())
    dispatch(getAllCourses())
  }, [dispatch])

  const handleSubmit = (e) => {
    e.preventDefault()
    const userData = {
      id: user._id,
      firstName,
      lastName,
      email,
    }
    dispatch(updateUser(userData))
    setShowEditForm(false)
  }

  return (
    <div className="flex flex-col items-center ">
      <img className="p-6 w-2/7" src={user.imageUrl} alt="profile" />
      <div className="flex">
        {user._id === userId ? (
          <div className="p-3">
            <Button
              buttonName="Edit Profile"
              buttonStyle="btnSecondaryStyle"
              onClick={() => {
                setShowEditForm(!showEditForm)
              }}
            />
          </div>
        ) : null}

        <div className="p-3">
          <Button
            buttonName="Follow user"
            buttonStyle="btnPrimaryStyle"
            onClick={() => {
              console.log("follow user")
            }}
          />
        </div>
      </div>
      <div className="flex bg-white shadow-xl rounded-br-3xl rounded-bl-3xl rounded-tr-3xl m-3 p-6 w-6/7 lg:w-2/3 ">
        <div className="flex flex-col items-start w-full lg:w-2/5">
          <p className="border-b-2 border-grey-light w-full my-1">
            First name:
          </p>
          <p className="border-b-2 border-grey-light w-full my-1">Last name:</p>
          <p className="border-b-2 border-grey-light w-full my-1">E-mail:</p>
        </div>

        <div className="flex flex-col items-start pl-6 w-full">
          {showEditForm ? (
            <form onSubmit={handleSubmit}>
              <input
                className="border-b-2 border-grey-light w-full bg-grey-super_light rounded-xl pl-2 my-1"
                placeholder={user.firstName}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                className="border-b-2 border-grey-light w-full bg-grey-super_light rounded-xl pl-2 my-1"
                placeholder={user.lastName}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <input
                className="border-b-2 border-grey-light w-full bg-grey-super_light rounded-xl pl-2 my-1"
                placeholder={user.email}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="flex justify-end pt-3">
                <Button
                  buttonName="Save changes"
                  buttonStyle="btnPrimaryStyle"
                  onClick={handleSubmit}
                />
              </div>
            </form>
          ) : (
            <>
              <p className="border-b-2 border-grey-light w-full pl-2 my-1">
                {user.firstName}
              </p>
              <p className="border-b-2 border-grey-light w-full pl-2 my-1">
                {user.lastName}
              </p>
              <p className="border-b-2 border-grey-light w-full pl-2 my-1">
                {user.email}
              </p>
            </>
          )}
        </div>
      </div>

      <div className="block lg:flex w-full justify-center items-center ">
        <div className="w-6/7 lg:w-1/3 lg:pr-3">
          <Dashcard
            dashCardData={topics}
            dashCardTitle="Topics"
            dashCardStyle="bg-aqua"
            dropdownMenuData={dashcardDropdownMenu.topics}
          />
        </div>
        <div className="w-6/7 lg:w-1/3 lg:pr-3">
          <Dashcard
            dashCardData={courses}
            dashCardTitle="Courses"
            dashCardStyle="bg-yellow"
            dropdownMenuData={dashcardDropdownMenu.courses}
          />
        </div>
      </div>
      <div className="block lg:flex w-full justify-center ">
        <div className="w-6/7 lg:w-1/3 lg:pr-3">
          <Dashcard
            dashCardData={events}
            dashCardTitle="Events"
            dashCardStyle="bg-sky"
            dropdownMenuData={dashcardDropdownMenu.events}
          />
        </div>
        <div className="w-6/7 lg:w-1/3 lg:pr-3">
          <Dashcard
            dashCardData={events}
            dashCardTitle="Files"
            dashCardStyle="bg-pink"
            dropdownMenuData={dashcardDropdownMenu.events}
          />
        </div>
      </div>
    </div>
  )
}

export default ProfileMainContent
