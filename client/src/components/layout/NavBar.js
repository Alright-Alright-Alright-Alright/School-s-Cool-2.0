/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { StreamChat } from "stream-chat";
import { useTranslation } from "react-i18next";
import { logoutUser } from "../../redux/actions/userActions";
import SearchBar from "../core/SearchBar";
import LargeLogo from "./LargeLogo";
import SmallLogo from "./SmallLogo";

const STREAM_API = process.env.REACT_APP_STREAM_API_SECRET;

const client = new StreamChat(STREAM_API);

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const { t } = useTranslation();
  const user = useSelector((state) => state.user.singleUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    client.disconnectUser();
    dispatch(logoutUser());
    navigate("/login");
  };

  const navItems = [
    {
      id: "navItemTopics",
      ref: "navItemTopicRef",
      title: `${t("navbar.navbar_topics")}`,
      href: "/topics",
      color: "aqua",
    },
    {
      id: "navItemCourses",
      ref: "navItemCoursesRef",
      title: `${t("navbar.navbar_courses")}`,
      href: "/courses",
      color: "yellow",
    },
    {
      id: "navItemEvents",
      ref: "navItemEventsRef",
      title: `${t("navbar.navbar_events")}`,
      href: "/events",
      color: "sky",
    },
    {
      id: "navItemLibrary",
      ref: "navItemLibraryRef",
      title: `${t("navbar.navbar_library")}`,
      href: "/library",
      color: "pink",
    },
  ];

  return (
    <nav className="grid grid-cols-12 bg-grey-super_light shadow-md sticky top-0 z-50 p-5">
      {/* Large icon left */}
      <div className="col-span-0 lg:col-span-3">
        <Link to="/home">
          <LargeLogo />
        </Link>

        {/* Hamburger menu on mobile */}
        {isOpen && (
          <div className="lg:hidden" id="mobile-menu">
            <div className="px-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  to={item.href}
                  key={item.id}
                  className={`block px-2 mt-4 lg:inline-block lg:mt-0 hover:text-${item.color} `}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {item.title}
                </Link>
              ))}
              <div className="">
                <button
                  type="button"
                  className=""
                  onClick={() => {
                    setIsOpen(!isOpen);
                    handleLogout();
                  }}
                >
                  {t("navbar.navbar_logout")}
                </button>
              </div>
              {user?.role === "admin" && (
                <Link
                  to="/admin"
                  onClick={() => setIsOpen(!isOpen)}
                  className="block mt-4 lg:inline-block lg:mt-0  mr-4"
                >
                  Admin
                </Link>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Hamburger Menu */}
      <div className="sm:col-span-1 lg:hidden flex items-center text-right">
        {!isOpen && (
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to={`/profile/${user?._id}`}>
              <img
                alt="profile"
                src={user?.imageUrl}
                className="rounded-full object-fill h-7 w-7"
              />
            </Link>
          </div>
        )}
        <div className="flex flex-col">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-end justify-end p-2 rounded-md"
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
        </div>
      </div>

      {/* Nav items on desktop */}
      <div className="sm:col-span-0 lg:col-span-6 flex items-center">
        <div className="hidden lg:block">
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

      {/* Search bar */}
      <div className="flex md:col-span-3 justify-around items-center">
        <SearchBar placeholder={t("search_bar_placeholder")} />
        <div className="hidden lg:block">
          <button
            type="button"
            className="flex items-center"
            data-dropdown-toggle="dropdown"
            onClick={() => setShowDropDown(!showDropDown)}
          >
            <img
              alt="profile"
              src={user?.imageUrl}
              className="rounded-full h-12 w-12 border-2 border-sky object-cover"
            />
          </button>
          {showDropDown && (
            <div
              id="dropdown"
              className="w-fit list-none divide-y shadow-xl absolute right-2 top-164 bg-grey-super_light py-3 rounded-tr-md rounded-b-md  "
            >
              <ul className="py-1" aria-labelledby="dropdownButton">
                {user?.role === "ADMIN" && (
                  <li>
                    <Link
                      to="/admin"
                      onClick={() => setShowDropDown(false)}
                      className="block px-4 py-2 text-grey-darker text-base text-sky hover:underline hover:text-grey-darkest"
                    >
                      Admin
                    </Link>
                  </li>
                )}
                <li>
                  <Link
                    to={`/profile/${user?._id}`}
                    onClick={() => setShowDropDown(false)}
                    className="block px-4 py-2 text-grey-darker text-base text-sky hover:underline hover:text-grey-darkest"
                  >
                    {t("navbar.navbar_profile")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faq"
                    onClick={() => setShowDropDown(false)}
                    className="block px-4 py-2 text-grey-darker text-base text-sky hover:underline hover:text-grey-darkest"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <button
                    type="button"
                    className=" w-full block py-2 px-4 text-base text-pink bg-grey-super_light hover:underline"
                    onClick={() => {
                      setShowDropDown(false);
                      handleLogout();
                    }}
                  >
                    {t("navbar.navbar_logout")}
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
