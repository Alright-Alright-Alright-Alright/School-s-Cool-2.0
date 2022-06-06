/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import React from "react";
import PropTypes from "prop-types";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { Link, useLocation } from "react-router-dom";

function Navigation(props) {
  const { currentPage, pageCount } = props;

  const loc = useLocation();
  const [base] = loc.pathname.split("/item/");
  const nextLoc = `${base}/item/${Math.min(currentPage + 1, pageCount - 1)}`;
  const prevLoc = `${base}/item/${Math.max(currentPage - 1, 0)}`;
  return (
    <div className="flex gap-x-8 m-auto mt-12 justify-center">
      <Link to={prevLoc}>
        <ChevronLeftIcon className="w-8 h-w-8 text-sky" />
      </Link>
      <ul className="flex">
        {Array.from(Array(pageCount).keys()).map((index) => (
          <li key={index}>
            <button type="button">
              <p
                className={`${
                  index === currentPage ? "bg-sky text-white rounded-md" : ""
                }  text-md text-grey-medium_light px-4 py-2 align-bottom`}
              >
                {index + 1}
              </p>
            </button>
          </li>
        ))}
      </ul>
      <Link to={nextLoc}>
        <ChevronRightIcon className="w-8 h-w-8 text-sky" />
      </Link>
    </div>
  );
}

Navigation.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
};

export default Navigation;
