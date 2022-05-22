/* eslint-disable arrow-body-style */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { PlusIcon } from "@heroicons/react/solid";

const AddCourseCard = () => {
  return (
    <div className="flex flex-col justify-between h-72 bg-white hover:shadow-md rounded-br-xl rounded-bl-xl rounded-tr-xl">
      <Link to="create">
        <section className="h-48">
          <PlusIcon className="w-24 h-full m-auto text-sky" />
        </section>
        <section className="border-b-2 border-grey-light ml-3 mr-3 h-12 flex items-center">
          <h1 className="text-lg">New Course</h1>
        </section>
      </Link>
    </div>
  );
};

export default AddCourseCard;