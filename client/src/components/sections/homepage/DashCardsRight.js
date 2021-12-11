import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
// import Dashcard from "../../core/dashcard/Dashcard"
import TopicDashCard from "../../core/topicDashCard/TopicDashcard"
import dashcardDropdownMenu from "../../../data/dashcardDropdownMenu.json"
import { getAllTheUsers } from "../../../redux/actions/userActions"

function DashCardsRight() {
  const allUsers = useSelector((state) => state.user.users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllTheUsers())
  }, [dispatch])

  return (
    <div>
      <TopicDashCard
        topicDashCardTitle="Community"
        topicDashCardStyle="bg-pink"
        // topicDashCardData={topic?.members}
        users={allUsers.users}
        dropdownMenuData={dashcardDropdownMenu.topicMembers}
      />
      {/* <Dashcard
        dashCardData={dummyData}
        dashCardTitle="Testing"
        dashCardStyle="bg-pink"
        dropdownMenuData={dashcardDropdownMenu.users}
      /> */}
    </div>
  )
}

export default DashCardsRight
