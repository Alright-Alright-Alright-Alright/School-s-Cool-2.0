import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { t } from "i18next";
import Button from "../../Button";
import Icon from "../../Icon";
import LibraryModal from "../../library/LibraryModal";

function EventHeaderCard({ onClick, postBody }) {
  const user = useSelector((state) => state.user.singleUser);
  const singleTopic = useSelector((state) => state.topics.singleTopic);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="rounded-bl-sm rounded-br-sm rounded-r-sm bg-white shadow-md m-3">
      <div className="flex justify-between p-3">
        <img
          className="w-10 h-10 rounded-full mr-2"
          src={`${user?.imageUrl}`}
          alt="profile"
        />
        <input
          className="bg-grey-super_light w-full rounded-full text-base pl-3"
          type="text"
          placeholder={t("events.header_card_placeholder")}
          onChange={(e) => postBody(e.target.value)}
          required
        />
      </div>

      <div className="flex justify-between p-3 relative">
        <div className="flex items-center">
          <button type="button" onClick={handleShowModal} className="flex">
            <Icon iconName="add" iconStyle="fill-inactive text-sky" />
            <p className="pl-3">{t("events.header_card_add_resource")}</p>
          </button>
          {showModal && (
            <LibraryModal
              handleShowModal={handleShowModal}
              singleTopic={singleTopic}
            />
          )}
        </div>
        <Button
          buttonName={t("events.header_card_add_button")}
          buttonStyle="btnEventStyle"
          buttonSubmit
          onClick={onClick}
        />
      </div>
    </div>
  );
}

EventHeaderCard.propTypes = {
  onClick: PropTypes.func.isRequired,
  postBody: PropTypes.func.isRequired,
};

export default EventHeaderCard;
