/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"
import Dashcard from "../../core/dashcard/Dashcard"
import { getAlltopics } from "../../../redux/actions/topicActions"
import { getAllEvents } from "../../../redux/actions/eventActions"
import { getAllCourses } from "../../../redux/actions/courseActions"
import { getUserProfile } from "../../../redux/actions/userActions"
import dashcardDropdownMenu from "../../../data/dashcardDropdownMenu.json"
import { getAllFilesFromLibrary } from "../../../redux/actions/libraryActions"
import DashcardSkeleton from "../../core/skeleton/DashCardSkeleton"

function DashCardsLeft() {
  const topics = useSelector((state) => state.topics.allTopics)
  const courses = useSelector((state) => state.courses.allCourses)
  const events = useSelector((state) => state.events.allEvents)
  const user = useSelector((state) => state.user.singleUser)
  const { t } = useTranslation()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAlltopics())
    dispatch(getAllFilesFromLibrary())
    dispatch(getAllEvents())
    dispatch(getAllCourses())
    return user?._id && dispatch(getUserProfile(user?._id))
  }, [dispatch, user?._id])

  if (topics.length === 0 || courses.length === 0 || events.length === 0) {
    return (
      <div>
        <DashcardSkeleton />
        <DashcardSkeleton />
        <DashcardSkeleton />
      </div>
    )
  }

  const checkIfIsPrivate = () => {
    const topicsCurrentUserCanSee = []
    topics.forEach((topic) => {
      if (topic.isPrivate === false) {
        topicsCurrentUserCanSee.push(topic)
      }
    })
    const privateTopics = topics.filter((member) => member.isPrivate === true)
    privateTopics
      .map((topic) =>
        topic.members.map((member) => member._id === user._id && topic)
      )
      .flat(Infinity)
      .forEach((item) => {
        if (typeof item === "object") {
          topicsCurrentUserCanSee.push(item)
        }
      })
    return topicsCurrentUserCanSee
  }

  return (
    <div className="max-w-md float-right px-6 hidden lg:block">
      <Dashcard
        dashCardData={checkIfIsPrivate()}
        dashCardTitle="Topics"
        dashCardStyle="bg-aqua"
        dropdownMenuData={dashcardDropdownMenu.topics}
      />
      <Dashcard
        dashCardData={courses}
        dashCardTitle="Courses"
        dashCardStyle="bg-yellow"
        dropdownMenuData={dashcardDropdownMenu.courses}
      />{" "}
      <Dashcard
        dashCardData={events}
        dashCardTitle="Events"
        dashCardStyle="bg-sky"
        dropdownMenuData={dashcardDropdownMenu.events}
      />{" "}
    </div>
  )
}

export default DashCardsLeft
