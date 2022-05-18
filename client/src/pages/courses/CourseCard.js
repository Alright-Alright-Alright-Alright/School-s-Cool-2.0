/* eslint-disable arrow-body-style */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../components/core/Icon";

const CourseCard = ({
  id,
  joined,
  topics,
  image,
  members,
  completed,
  title,
}) => {
  return (
    <div className="flex flex-col justify-between h-72 bg-white hover:shadow-md rounded-br-xl rounded-bl-xl rounded-tr-xl">
      <Link to={id}>
        <section className="">
          <img
            src={image}
            alt="topic_Image"
            className="object-cover h-48 w-full rounded-tr-xl"
          />
        </section>
        <section className="border-b-2 border-grey-light ml-3 mr-3 h-12 flex items-center">
          <h1 className="text-lg">{title}</h1>
        </section>
      </Link>
      <section>
        <div className="flex justify-between">
          <div className="flex p-3 space-x-2">
            <span className="flex ">
              <Icon
                iconName="member"
                iconStyle="fill-inactive text-grey-dark"
              />
              <span>{members}</span>
            </span>
            <span className="flex ">
              <Icon iconName="file" iconStyle="fill-inactive text-grey-dark" />
              <span>{topics}</span>
            </span>
          </div>
          <div className="p-3">
            {joined ? (
              <button type="button" onClick={() => {}}>
                <Icon
                  iconName="follow"
                  iconStyle="fill-active text-grey-dark"
                />
              </button>
            ) : (
              <button type="button" onClick={() => {}}>
                <Icon
                  iconName="follow"
                  iconStyle={
                    completed
                      ? "fill-active text-grey-dark"
                      : "fill-inactive text-grey-dark"
                  }
                />
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseCard;
