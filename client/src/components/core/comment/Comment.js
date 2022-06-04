/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import Icon from "../Icon";
import { deleteComment } from "../../../redux/actions/postActions";
// import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";

function Comment({ comment, id }) {
  const user = useSelector((state) => state.user.singleUser);
  const dispatch = useDispatch();
  return (
    <div className="flex px-5 pb-1 pt-3 gap-2">
      <img
        className="w-10 h-10 rounded-full shadow-sm border-2 border-grey-light"
        src={`${comment?.owner?.imageUrl}`}
        alt="profile"
      />
      <div className="flex justify-between w-full rounded-md items-center p-2">
        <p className="text-base text-grey-dark pl-1">{comment?.body}</p>
        {user?._id === comment?.owner?._id || user?.role === "ADMIN" ? (
          <button
            type="button"
            onClick={() => dispatch(deleteComment(comment?._id, id))}
          >
            <Icon iconName="close" iconStyle="text-grey-dark" />
          </button>
        ) : null}
      </div>
    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
};

export default Comment;
