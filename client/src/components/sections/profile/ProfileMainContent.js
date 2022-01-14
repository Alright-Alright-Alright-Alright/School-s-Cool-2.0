import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import Dashcard from "../../core/dashcard/Dashcard"
import dashcardDropdownMenu from "../../../data/dashcardDropdownMenu.json"
import { getAlltopics } from "../../../redux/actions/topicActions"
import { getAllEvents } from "../../../redux/actions/eventActions"
import { getAllCourses } from "../../../redux/actions/courseActions"
import { getAllFilesFromLibrary } from "../../../redux/actions/libraryActions"
import Button from "../../core/Button"

function ProfileMainContent() {
  const user = useSelector((state) => state.user.singleUser)
  const topics = useSelector((state) => state.topics.allTopics)
  const courses = useSelector((state) => state.courses.allCourses)
  const events = useSelector((state) => state.events.allEvents)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAlltopics())
    dispatch(getAllFilesFromLibrary())
    dispatch(getAllEvents())
    dispatch(getAllCourses())
  }, [dispatch])

  return (
    <div className="flex flex-col items-center ">
      <img className="p-6 w-2/7" src={user.imageUrl} alt="profile" />
      <div className="flex bg-white shadow-xl rounded-br-3xl rounded-bl-3xl rounded-tr-3xl m-3 p-6 w-6/7 lg:w-2/3 ">
        <div className="flex flex-col items-start w-full lg:w-1/5">
          <p className="border-b-2 border-grey-light w-full">First name:</p>
          <p className="border-b-2 border-grey-light w-full">Last name:</p>
          <p className="border-b-2 border-grey-light w-full">E-mail:</p>
        </div>

        <div className="flex flex-col items-start pl-6 w-full">
          <p className="border-b-2 border-grey-light w-full ">
            {user.firstName}
          </p>
          <p className="border-b-2 border-grey-light w-full">{user.lastName}</p>
          <p className="border-b-2 border-grey-light w-full">{user.email}</p>
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

      <div className="p-3">
        <Button
          buttonName="Edit Profile"
          buttonStyle="btnSecondaryStyle"
          onClick={() => {
            console.log("edit profile")
          }}
        />
      </div>
    </div>
  )
}

export default ProfileMainContent
