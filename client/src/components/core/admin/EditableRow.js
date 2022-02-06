/* eslint-disable no-underscore-dangle */
import React from "react"
import PropTypes from "prop-types"
import Icon from "../Icon"

function EditableRow({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) {
  return (
    <tr
      key={editFormData._id}
      className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0"
    >
      <td className="border-grey-light border-t-2 hover:bg-gray-100 p-3">
        {editFormData.firstName} {editFormData.lastName}
      </td>
      <td className="border-grey-light border-t-2 p-3">
        <input
          type="email"
          required="required"
          placeholder="Enter an email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
          className="border-b-2 border-grey-light w-full bg-grey-super_light rounded-xl pl-2 my-1"
        />
      </td>
      <td className="border-grey-light border-t-2 p-3">
        <select
          id="roles"
          name="role"
          onChange={handleEditFormChange}
          value={editFormData.role}
          className="border-b-2 border-grey-light w-full bg-grey-super_light rounded-xl pl-2 my-1"
        >
          <option value="ADMIN">Admin</option>
          <option value="USER">User</option>
        </select>
      </td>
      <td className="border-grey-light border-t-2  p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
        <div className="flex justify-start lg:justify-around ">
          <button
            type="submit"
            className="pr-2 hover:bg-grey-light h-6 w-6 rounded-full "
          >
            <Icon
              iconName="select"
              viewbox="-1 -1 14 14"
              iconStyle="fill-active"
            />
          </button>
          <button
            type="button"
            className="pr-2 hover:bg-grey-light h-6 w-6 rounded-full "
            onClick={handleCancelClick}
          >
            <Icon iconName="close" />
          </button>
        </div>
      </td>
    </tr>
  )
}

EditableRow.propTypes = {
  editFormData: PropTypes.shape.isRequired,
  handleEditFormChange: PropTypes.func.isRequired,
  handleCancelClick: PropTypes.func.isRequired,
}

export default EditableRow
