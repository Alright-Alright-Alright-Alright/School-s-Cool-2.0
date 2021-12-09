/* eslint-disable no-underscore-dangle */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React from "react"

const libraryItem = ({ library }) => (
  <div className="flex justify-center content-center bg- w-full">
    <table className="w-full table-fixed border-solid border-2">
      <thead>
        <tr className="border-solid border-2">
          <th className="border-solid border-2">Name</th>
          <th className="border-solid border-2">Topic</th>
          <th className="border-solid border-2">Date added</th>
          <th className="border-solid border-2">User</th>
        </tr>
      </thead>
      {library.map((item) => (
        <tbody className="border-solid border-2">
          <tr key={item._id}>
            <td>{item.fileName}</td>
            <td>{item.category}</td>
            <td>
              {JSON.stringify(
                `${new Date().getDate()}/${
                  new Date().getMonth() + 1
                }/${new Date().getFullYear()}`
              )}
            </td>
            <td>
              {item.owner.firstName} {item.owner.lastName}
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  </div>
)

export default libraryItem
