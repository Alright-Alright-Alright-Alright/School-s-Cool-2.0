import React from "react"

const libraryItem = () => (
  <div className="flex justify-center content-center">
    <table className="table-fixed">
      <thead>
        <tr>
          <th className="w-1/2 ">Name</th>
          <th className="w-1/4 ">Topic</th>
          <th className="w-1/4 ">Date added</th>
          <th className="w-1/4 ">User</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Resource Name</td>
          <td>Topic Name</td>
          <td>{JSON.stringify(new Date())}</td>
          <td>User Name</td>
        </tr>
      </tbody>
    </table>
  </div>
)

export default libraryItem
