/* eslint-disable  */
/* eslint-disable react/forbid-prop-types */
import React from "react"
import PropTypes from "prop-types"
import Icon from "../Icon"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import {getSingleFile} from '../../../redux/actions/libraryActions'

export default function TopicDashCardListItem({
  listItemName,
  listItemLikes,
  listItemComments,
  id
}) {
  const dispatch = useDispatch()
  return (
    <>
    <div className="pt-3 flex justify-between">
      <div className="flex-col">
        <Link to={`/library`} onClick={()=> dispatch(getSingleFile(id))}>{listItemName}</Link>
      </div>
      <div className="flex gap-1 w-20 grid-cols-2 pb-1 items-center">
        <div className="flex gap-1 w-20">
          <button type="button">
            <Icon
              iconName="like"
              iconStyle="fill-inactive text-grey-dark"
            />
          </button>
          <p>{listItemLikes?.length}</p>
        </div>
        <button type="button">
          <Icon iconName="message" iconStyle="fill-inactive text-grey-dark" />
        </button>
        <p>{listItemComments?.length}</p>
      </div>
    </div>
  </>
  )
}

TopicDashCardListItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  listItemFirstName: PropTypes.string.isRequired,
  listItemLastName: PropTypes.string.isRequired,
  topicDashCardData: PropTypes.arrayOf.isRequired,
}
