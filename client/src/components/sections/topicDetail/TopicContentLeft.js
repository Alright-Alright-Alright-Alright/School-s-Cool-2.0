import React from "react"
import Dashcard from "../../core/dashcard/Dashcard"

function ContentLeft() {
  return (
    <div className="flex flex-col place-items-end">
      <div className="p-3">
        <img
          className="rounded-r-3xl rounded-b-3xl"
          src="https://via.placeholder.com/320"
          alt="placeholder"
        />
        <div className="p-3 flex-col  place-items-end content-end max-w-xs">
          <h1 className="text-xl pb-2">Algebra Help</h1>
          <p className="text-lg pb-2">Schoolwork: Math</p>
          <p className="text-sm">
            This is a topic created to help mentors to share resources relating
            to teahcing Algebra to school kids. Please add any study guides and
            resources that you may have along with any helpful tips.
          </p>
        </div>
        <div className="place-items-end">
          <Dashcard
            dashCardTitle="Resources"
            dashCardStyle="bg-aqua"
            dashCardData={[]}
          />
        </div>
      </div>

      <div className="p-3">
        <p>Topic created by</p>
        <div className="flex items-center py-3">
          <img
            className="w-10 h-10 rounded-full mr-2"
            src="https://via.placeholder.com/40x40"
            alt="profile"
          />
          <p className="text-base">User name</p>
          <p className="text-base pl-3 text-grey-medium_light">Commented on</p>
          <a href="/" className="text-base pl-3">
            Topic name
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContentLeft
