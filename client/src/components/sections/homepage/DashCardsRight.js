import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import TopicDashcard from "../../core/topicDashCard/TopicDashcard"
import dashcardDropdownMenu from "../../../data/dashcardDropdownMenu.json"
import { getAllTheUsers } from "../../../redux/actions/userActions"

function DashCardsRight() {
  const users = useSelector((state) => state.user.users.users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllTheUsers())
  }, [dispatch])

  return (
    <div>
      <TopicDashcard
        topicDashCardTitle="Community"
        topicDashCardStyle="bg-pink"
        // topicDashCardData={users}
        users={users}
        dropdownMenuData={dashcardDropdownMenu.users}
      />
    </div>
  )
}

export default DashCardsRight
