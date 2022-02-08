/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { StreamChat } from "stream-chat"
import { logoutUser } from "../../redux/actions/userActions"
import SearchBar from "../core/SearchBar"

const STREAM_API = process.env.REACT_APP_STREAM_API_SECRET

const client = new StreamChat(STREAM_API)

const navItems = [
  {
    id: "navItemTopics",
    ref: "navItemTopicRef",
    title: "Topics",
    href: "/topics",
    color: "aqua",
  },
  {
    id: "navItemCourses",
    ref: "navItemCoursesRef",
    title: "Courses",
    href: "/courses",
    color: "yellow",
  },
  {
    id: "navItemEvents",
    ref: "navItemEventsRef",
    title: "Events",
    href: "/events",
    color: "sky",
  },
  {
    id: "navItemLibrary",
    ref: "navItemLibraryRef",
    title: "Library",
    href: "/library",
    color: "pink",
  },
]

function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showDropDown, setShowDropDown] = useState(false)
  const user = useSelector((state) => state.user.singleUser)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    client.disconnectUser()
    dispatch(logoutUser())
    navigate("/login")
  }

  return (
    <nav className="flex justify-between bg-grey-super_light shadow-md sticky top-0 z-50 p-5">
      <div>
        <div className="flex-shrink-0">
          <Link to="/home">
            <svg
              width="175"
              height="40"
              viewBox="0 0 175 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 21H30.3651C35.5365 21 39.7287 25.1922 39.7287 30.3636C39.7287 35.535 35.5361 39.7272 30.3647 39.7272C25.1929 39.7272 21 35.5346 21 30.3628V21Z"
                fill="#F5A70F"
              />
              <path
                d="M21 18.7272V9.36433C21 4.19255 25.1929 -7.62939e-06 30.3647 -7.62939e-06C35.5361 -7.62939e-06 39.7287 4.19222 39.7287 9.36358C39.7287 14.5349 35.5365 18.7272 30.3651 18.7272H21Z"
                fill="#18C7BB"
              />
              <path
                d="M18.7286 18.7272V9.36434C18.7286 4.19255 14.5357 -7.62939e-06 9.36392 -7.62939e-06C4.19256 -7.62939e-06 -4.00543e-05 4.19222 -4.00543e-05 9.36358C-4.00543e-05 14.5349 4.19218 18.7272 9.36355 18.7272H18.7286Z"
                fill="#DE2F6E"
              />
              <path
                d="M18.7289 21.2727H9.36379C4.19243 21.2727 0.000204086 25.4649 0.000204086 30.6363C0.000204086 35.8077 4.1928 39.9999 9.36417 39.9999C14.5359 39.9999 18.7289 35.8073 18.7289 30.6355V21.2727Z"
                fill="#27A8DF"
              />
              <path
                d="M52.1853 9H57.3933L63.0328 21.2342H62.7246L68.364 9H73.3871V29H69.72V13.1911H70.2747L64.0497 26.812H61.6768L55.4827 13.2527H55.8217V29H52.1853V9Z"
                fill="#0F2331"
              />
              <path
                d="M79.7617 29L86.5722 9H91.1331L97.6662 29H93.845L92.4582 24.6857H85.0314L83.6138 29H79.7617ZM85.9559 21.943H91.5953L88.791 13.3451L85.9559 21.943Z"
                fill="#0F2331"
              />
              <path
                d="M115.626 9H120.619L107.429 22.4977V17.5362L115.626 9ZM111.189 17.2589L121.173 29H116.489L108.662 19.6317L111.189 17.2589ZM104.07 9H107.737V29H104.07V9Z"
                fill="#0F2331"
              />
              <path
                d="M130.7 9V25.8259H138.928V29H127.063V9H130.7Z"
                fill="#0F2331"
              />
              <path d="M145.121 29V9H148.757V29H145.121Z" fill="#0F2331" />
              <path
                d="M168.897 9H173.889L160.7 22.4977V17.5362L168.897 9ZM164.459 17.2589L174.444 29H169.76L161.932 19.6317L164.459 17.2589ZM157.341 9H161.008V29H157.341V9Z"
                fill="#0F2331"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className="flex items-center">
        <div className="hidden md:block">
          <div className="ml-10 flex items-center space-x-20">
            {navItems.map((item) => (
              <Link
                to={item.href}
                key={item.id}
                className={`block mt-4 lg:inline-block lg:mt-0 hover:text-${item.color} mr-4`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="items-center hidden md:block">
          {/* <div className="flex place-content-between border-2 border-grey-light rounded-r-full rounded-l-full py-2 px-4 text-grey-darker leading-tight ">
            <input
              className="focus:outline-none bg-grey-super_light focus:border-teal-500 w-60"
              type="text"
              placeholder="What are you looking for?"
            />

            <svg
              className="fill-current text-grey-darker h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
            </svg>
          </div> */}
          <SearchBar placeholder="What are you looking for?" />
        </div>
        <div className="hidden md:block pl-2 relative z-20 top-2">
          <button
            type="button"
            className=""
            data-dropdown-toggle="dropdown"
            onClick={() => setShowDropDown(!showDropDown)}
          >
            <img
              alt="profile"
              src={user?.imageUrl}
              width="36"
              height="36"
              className="rounded-full"
            />
          </button>
          {showDropDown && (
            <div
              id="dropdown"
              className="w-fit list-none divide-y shadow absolute right-1 top-8 bg-grey-super_light py-3 rounded-tr-xl rounded-b-xl  "
            >
              <ul className="py-1" aria-labelledby="dropdownButton">
                <li>
                  <Link
                    to={`/profile/${user?._id}`}
                    onClick={() => setShowDropDown(false)}
                    className="block px-4 py-2 text-grey-darker text-base text-sky hover:underline hover:text-grey-darkest"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <button
                    type="button"
                    className=" w-full block py-2 px-4 text-base text-pink bg-grey-super_light hover:underline"
                    onClick={() => {
                      setShowDropDown(false)
                      handleLogout()
                    }}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="-mr-2 flex md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <button
            type="button"
            className=""
            data-dropdown-toggle="dropdown"
            onClick={() => setShowDropDown(!showDropDown)}
          >
            <img
              alt="profile"
              src={user?.imageUrl}
              width="36"
              height="36"
              className="rounded-full"
            />
          </button>
          {showDropDown && (
            <div
              id="dropdown"
              className="w-44 list-none  divide-y shadow absolute right-1/5 bg-grey-super_light py-3 rounded-tr-xl rounded-b-xl  "
            >
              <ul className="py-1" aria-labelledby="dropdownButton">
                <li>
                  <Link
                    to={`/profile/${user._id}`}
                    onClick={() => setShowDropDown(false)}
                    className="block px-4 py-2 text-grey-darker text-base hover:bg-grey-light hover:text-grey-darkest"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <button
                    type="button"
                    className=" w-full text-left block py-2 px-4 text-base bg-grey-super_light hover:bg-grey-light"
                    onClick={() => {
                      setShowDropDown(false)
                      handleLogout()
                    }}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center justify-center p-2 rounded-md"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          {!isOpen ? (
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
        {isOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  to={item.href}
                  key={item.id}
                  className={`block mt-4 lg:inline-block lg:mt-0 hover:text-${item.color} mr-4`}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <div className="flex items-center ">
              <div className="flex place-content-between border-2 border-grey-light rounded-r-full rounded-l-full py-2 px-4 text-grey-darker leading-tight ">
                <input
                  className="focus:outline-none bg-grey-super_light focus:border-teal-500 w-60"
                  type="text"
                  placeholder="What are you looking for?"
                />

                <svg
                  className="fill-current text-grey-darker h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
