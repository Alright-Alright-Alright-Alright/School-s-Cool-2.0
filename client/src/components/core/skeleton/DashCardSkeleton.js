/* eslint-disable no-unused-vars */
import React from "react"

function DashcardSkeleton() {
  return (
    <div className="w-full py-3 animate-pulse">
      <div className="flex relative flex-col w-full shadow-lg rounded-bl-3xl rounded-br-3xl bg-white rounded-r-3xl">
        <div className="w-full h-10 bg-grey-light rounded-r-full rounded-bl-full">
          <div className="flex justify-between pt-3 text-white">
            <div className="w-40 ml-5 mb-1 h-4 items-center bg-grey-light rounded-full" />
          </div>
        </div>
        <div className="flex-col pr-4 overflow-y-auto">
          <div className="flex justify-between items-center">
            <div className="w-40 mt-3 ml-5 mb-1 h-4 items-center bg-grey-light rounded-full" />
            <div className="w-5 h-5 bg-grey-light rounded-full" />
            <div className="w-5 h-5 bg-grey-light rounded-full" />
          </div>
          <div className="flex justify-between items-center">
            <div className="w-40 mt-3 ml-5 mb-1 h-4 items-center bg-grey-light rounded-full" />
            <div className="w-5 h-5 bg-grey-light rounded-full" />
            <div className="w-5 h-5 bg-grey-light rounded-full" />
          </div>
          <div className="flex pb-5 justify-between items-center">
            <div className="w-40 mt-3 ml-5 mb-1 h-4 items-center bg-grey-light rounded-full" />
            <div className="w-5 h-5 bg-grey-light rounded-full" />
            <div className="w-5 h-5 bg-grey-light rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashcardSkeleton
