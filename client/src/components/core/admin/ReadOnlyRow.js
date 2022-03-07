/* eslint-disable no-underscore-dangle */
import React from "react"
import PropTypes from "prop-types"
import Icon from "../Icon"
import "./AdminPanelContent.css"

const truncate = (str) => (str.length > 25 ? `${str.substring(0, 25)}...` : str)

function ReadOnlyRow({ user, handleEditClick, handleDeleteClick }) {
  return (
    <tr
      key={user._id}
      className="flex flex-col flex-no wrap sm:table-row mb-3 sm:mb-0"
    >
      <td className="border-grey-light border-t-2 hover:bg-gray-100 p-3 ">
        {user.firstName} {user.lastName}
      </td>
      <td className="border-grey-light border-t-2 hover:bg-gray-100 p-3 ">
        {truncate(user.email)}
      </td>
      <td className="border-grey-light border-t-2 hover:bg-gray-100 p-3 ">
        {user.role}
      </td>
      <td className="border-grey-light border-t-2 hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
        <div className="flex justify-start lg:justify-around">
          <button
            type="button"
            className="pr-2 hover:bg-grey-light h-6 w-6 rounded-full "
            onClick={(event) => handleEditClick(event, user)}
          >
            <Icon iconName="member" />
          </button>
          <button
            type="button"
            className="pr-2 hover:bg-grey-light h-6 w-6 rounded-full "
            onClick={() => handleDeleteClick(user._id)}
          >
            <Icon iconName="trash" />
          </button>
        </div>
      </td>
    </tr>
  )
}

ReadOnlyRow.propTypes = {
  user: PropTypes.shape.isRequired,
  handleEditClick: PropTypes.func.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
}

export default ReadOnlyRow
