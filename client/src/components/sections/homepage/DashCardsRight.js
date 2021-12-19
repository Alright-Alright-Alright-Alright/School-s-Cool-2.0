import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
// import Dashcard from "../../core/dashcard/Dashcard"
import TopicDashCard from "../../core/topics/topicDashCard/TopicDashcard"
import dashcardDropdownMenu from "../../../data/dashcardDropdownMenu.json"
import { getAllTheUsers } from "../../../redux/actions/userActions"

function DashCardsRight() {
  const allUsers = useSelector((state) => state.user.users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllTheUsers())
  }, [dispatch])

  return (
    <div className="max-w-xs hidden lg:block">
      <TopicDashCard
        topicDashCardTitle="Community"
        topicDashCardStyle="bg-pink"
        users={allUsers.users}
        dropdownMenuData={dashcardDropdownMenu.topicMembers}
      />
    </div>
  )
}

export default DashCardsRight
