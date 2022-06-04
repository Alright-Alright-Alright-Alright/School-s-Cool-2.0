/* eslint-disable no-underscore-dangle */
import React from "react";
import { Link } from "react-router-dom";
import { t } from "i18next";
import PropTypes from "prop-types";
import ResourceDashcard from "../../core/resourceDashCard/ResourceDashcard";
import data from "../../../data/dashcardDropdownMenu.json";
import Icon from "../../core/Icon";

function TopicContentLeft({ topic, showEditModal, user }) {
  return (
    <div className="flex flex-col max-w-sm float-right">
      <div className="p-3">
        <img
          className="rounded-r-md rounded-b-md object-cover h-72"
          src={topic?.bannerImage}
          alt="placeholder"
          width="400"
        />
        <div className=" flex-col  place-items-end content-end  py-5">
          <div className="flex justify-between">
            <h1 className="text-xl pb-2">{topic?.title}</h1>
            {topic?.owner?._id === user?._id || user?.role === "ADMIN" ? (
              <button type="button" onClick={showEditModal}>
                <Icon iconName="edit" iconStyle="text-grey-dark" />
              </button>
            ) : null}
          </div>
          <p className="text-lg pb-2">
            {topic?.category}: {topic?.subject}
          </p>
          <p className="text-sm">{topic?.description} </p>
        </div>
        <div className="place-items-end">
          <ResourceDashcard
            resourceDashCardTitle={t("dash_card_title_files")}
            resourceDashCardStyle="bg-aqua"
            resourceDashCardData={topic?.resources}
            dropdownMenuData={data.resources}
          />
        </div>
        <div className="p-3 w-full">
          <p>
            {topic?.isPrivate
              ? `${t("topics.private_topic_created_by")}`
              : `${t("topics.public_topic_created_by")}`}
          </p>
          <Link to={`/profile/${topic?.owner?._id}`}>
            <div className="flex items-center py-3">
              <img
                className="w-10 h-10 rounded-full mr-2"
                src={`${topic?.owner?.imageUrl}`}
                alt="profile"
              />
              <p className="text-base">
                {topic?.owner?.firstName} {topic?.owner?.lastName}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

TopicContentLeft.propTypes = {
  topic: PropTypes.shape.isRequired,
  showEditModal: PropTypes.func.isRequired,
  user: PropTypes.shape.isRequired,
};

export default TopicContentLeft;
