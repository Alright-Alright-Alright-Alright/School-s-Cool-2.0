import React from "react"
import Icon from "../Icon"

function ActivityCard() {
  return (
    <div className="rounded-bl-2xl rounded-br-2xl rounded-r-2xl bg-white shadow-lg m-3">
      <div className="p-3">
        <img
          className="object-cover w-full max-h-40 rounded-bl-2xl rounded-br-2xl rounded-r-2xl"
          src="https://via.placeholder.com/390x184"
          alt="banner"
        />
      </div>
      <div>
        <div className="flex justify-between pl-3 pr-3">
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-2"
              src="https://via.placeholder.com/40x40"
              alt="profile"
            />
            <p className="text-base">User name</p>
            <p className="text-base pl-3 text-grey-medium_light">
              Commented on
            </p>
            <a href="/" className="text-base pl-3">
              Topic name
            </a>
          </div>
          <div className="flex items-center">
            <p className="text-base">Date</p>
          </div>
        </div>
      </div>
      <div className="">
        <p className="border-b-2 border-grey-light m-3 pb-3 text-base">
          Olore de volut audae velitiori ipsuntiate litatur secuptatias iunturi
          osandeliquis reni as debissit hit ommossequi dis a quid untis quist
          dolor sandist inciminctet ut officiu ntiam, eliatis anducit alit fuga.
          Olore de volut audae velitiori ipsuntiate litatur secuptatias iunturi
          osandeliquis reni as debissit hit ommossequi dis a quid untis quist
          dolor sandist inciminctet ut officiu ntiam, eliatis anducit alit fuga.
        </p>
      </div>
      <div className="flex justify-end items-center pt-1 pr-3 space-x-2">
        <div className="flex">
          <Icon iconName="file" />
          <span>00</span>
        </div>
        <div className="flex">
          <Icon iconName="like" iconStyle="fill-inactive" />
          <span>00</span>
        </div>
        <div className="flex">
          <Icon iconName="message" />
          <span>3</span>
        </div>
      </div>
      <div className="flex p-3">
        <img
          className="w-10 h-10 rounded-full mr-2"
          src="https://via.placeholder.com/30x30"
          alt="profile"
        />
        <input
          className="bg-grey-super_light w-full rounded-full text-base pl-3"
          type="text"
          placeholder="Add a comment"
        />
      </div>
    </div>
  )
}

export default ActivityCard
