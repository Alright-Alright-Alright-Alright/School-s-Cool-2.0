/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Trans, withTranslation, useTranslation } from "react-i18next";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import DashCardListItem from "./DashCardListItem";
import DropDownMenu from "../DropDownMenu";

function Dashcard({
  dashCardData,
  dashCardTitle,
  dashCardStyle,
  dropdownMenuData,
}) {
  const [expandDashCard, setExpandDashCard] = useState(false);
  const [filter, setFilter] = useState(dropdownMenuData?.dropDownItems[0]);
  const { t } = useTranslation();
  const user = useSelector((state) => state.user.singleUser);

  let filterRule;
  switch (filter) {
    case "my_topics":
      /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
      filterRule = (item) => item.owner === user._id;
      break;
    case "my_events":
      /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
      filterRule = (item) => item.owner === user._id;
      break;
    case "followed_topics":
      filterRule = (item) =>
        item.members.find((member) => member._id === user._id);
      break;
    case "attended_events":
      filterRule = (item) =>
        item.attendees.find((attendee) => attendee._id === user._id);
      break;
    default:
      filterRule = (item) => item;
  }

  console.log("here", { dashCardData });

  const filteredItems = dashCardData.filter(filterRule);

  const firstThreeItems = filteredItems
    .slice(0, 3)
    .map((item) => (
      <DashCardListItem
        key={item?._id || item?.sys?.id}
        linkId={item?._id || item?.sys?.id}
        listItemTitle={item?.title}
        listItemDate={item?.dateStart}
        listItemComments={item?.posts}
        listItemUsers={item?.members || item?.attendees}
        listItemType={dashCardTitle}
      />
    ));

  const allItems = filteredItems.map((item) => (
    <DashCardListItem
      key={item?._id || item?.sys?.id}
      linkId={item?._id || item?.sys?.id}
      listItemTitle={item?.title}
      listItemDate={item?.dateStart}
      listItemComments={item?.posts}
      listItemUsers={item?.members || item?.attendees}
      listItemType={dashCardTitle}
    />
  ));

  const onSelectFilter = (item) => {
    setFilter(item);
  };

  return (
    <div className="w-full rounded-t-md shadow-md rounded-md">
      <div className="flex relative flex-col w-full rounded-md bg-white">
        <div className={`w-full ${dashCardStyle} h-dashcardtitle rounded-t-md`}>
          <div className="flex justify-between pt-3 text-white">
            <p className="text-lg pl-4">
              <Trans i18nKey={`dash_card_title_${dashCardTitle.toLowerCase()}`}>
                <Link to={`/${dashCardTitle.toLowerCase()}`}>
                  {dashCardTitle}
                </Link>
              </Trans>
            </p>
            <div className="flex flex-row">
              <h2 className="text-base pr-4">{t(`dropdownmenu.${filter}`)}</h2>
              <DropDownMenu
                data={dropdownMenuData}
                filter={filter}
                selectFilter={onSelectFilter}
              />
            </div>
          </div>
        </div>
        <div className="flex-col pl-4 pr-4 max-h-96 overflow-y-auto">
          <div className="divide-y-2 divide-primary">
            {expandDashCard ? allItems : firstThreeItems}
            <div />
          </div>
        </div>
        <div className="min-h-dashcardrow flex justify-center my-2">
          <button
            type="button"
            onClick={() => setExpandDashCard(!expandDashCard)}
            className="rounded-full hover:bg-grey-super_light text-grey-medium"
          >
            {expandDashCard ? (
              <ChevronUpIcon className="h-8" />
            ) : (
              <ChevronDownIcon className="h-8" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

Dashcard.defaultProps = {
  dashCardData: [],
};

Dashcard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  dashCardData: PropTypes.array,
  dashCardTitle: PropTypes.string.isRequired,
  dashCardStyle: PropTypes.string.isRequired,
  dropdownMenuData: PropTypes.shape({
    bgColorOnHover: PropTypes.string,
    dropDownItems: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default withTranslation()(Dashcard);
