import React from "react";

function ActivityCardSkeleton() {
  return (
    <div className="rounded-bl-sm rounded-br-sm rounded-r-sm bg-white shadow-md m-3 animate-pulse">
      <div className="p-3">
        <div className="w-full bg-grey-light h-40 rounded-bl-sm rounded-br-sm rounded-r-sm " />
      </div>
      <div>
        <div className="flex pl-3 pr-3 items-center">
          <div className="w-10 h-10 bg-grey-light rounded-full" />
          <div className="flex-col">
            <div className="w-40 ml-5 mb-1 h-4 items-center bg-grey-light rounded-full" />
            <div className="w-60 ml-5 h-4 items-center bg-grey-light rounded-full" />
          </div>
        </div>
      </div>
      <div className="">
        <div className="border-b-2 border-grey-light m-3 pb-3 text-base" />
      </div>
      <div className="flex pl-3 pr-3 pb-3 items-center">
        <div className="w-10 h-10 bg-grey-light rounded-full" />
        <div className="flex-col">
          <div className="w-20 ml-5 mb-1 h-4 items-center bg-grey-light rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default ActivityCardSkeleton;
