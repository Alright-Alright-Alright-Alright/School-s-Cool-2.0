import React from "react"

function TopicPost() {
  return (
    <div className="rounded-bl-2xl rounded-br-2xl rounded-r-2xl bg-white shadow-lg m-3">
      <div>
        <div className="flex justify-between p-3">
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
      <div className="flex justify-end pt-1 pr-3">
        <p className="text-base">Icons</p>
      </div>
      <div className="flex px-5 pb-5 pt-3">
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

export default TopicPost
