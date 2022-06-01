import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TopicDashCard from "../../core/topics/topicDashCard/TopicDashcard";
import dashcardDropdownMenu from "../../../data/dashcardDropdownMenu.json";
import { getAllTheUsers } from "../../../redux/actions/userActions";
import DashcardSkeleton from "../../core/skeleton/DashCardSkeleton";

function DashCardsRight() {
  const allUsers = useSelector((state) => state.user.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTheUsers());
  }, [dispatch]);

  if (allUsers.length === 0) {
    return (
      <div>
        <DashcardSkeleton />
      </div>
    );
  }

  return (
    <div className="max-w-md px-6 mt-16 hidden lg:block ">
      <TopicDashCard
        topicDashCardTitle="Community"
        topicDashCardStyle="bg-pink"
        users={allUsers.users}
        dropdownMenuData={dashcardDropdownMenu.topicMembers}
      />
    </div>
  );
}

export default DashCardsRight;
