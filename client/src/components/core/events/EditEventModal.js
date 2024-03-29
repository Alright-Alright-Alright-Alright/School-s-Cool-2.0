import React, { useState, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import DatePicker, { registerLocale } from "react-datepicker"
import nl from "date-fns/locale/nl"
import { useTranslation } from "react-i18next"
import dayjs from "dayjs"
import { useParams, useNavigate } from "react-router-dom"
import PropTypes from "prop-types"
import fileUploadHandler from "../../../middleware/UploadFile"
import { editEvent, deleteEvent } from "../../../redux/actions/eventActions"
import SwitchButton from "../SwitchButton"
import Icon from "../Icon"
import "react-datepicker/dist/react-datepicker.css"
import TagsInput from "../TagsInput"
import MessageHandler from "../MessageHandler"
import Button from "../Button"

registerLocale("nl", nl)

const EditEventModal = ({ handleShowModal, event }) => {
  const [title, seTitle] = useState(event?.title)
  const [location, setLocation] = useState(event?.location)
  const [description, setDescription] = useState(event?.description)
  const [bannerImage, setBannerImage] = useState("")
  const [privacy, setPrivacy] = useState(event ? event.isPrivate : false)
  const [tags, setTags] = useState(event?.tags)
  const selectedTags = (tagsFromInput) => setTags(tagsFromInput)
  const [startDate, setStartDate] = useState(dayjs(event?.dateStart).toDate())
  const [endDate, setEndDate] = useState(dayjs(event?.dateEnd).toDate())
  const [startTime, setStartTime] = useState(dayjs(event?.timeStart).toDate())
  const [confirmDelete, setConfirmDelete] = useState(false)
  const hiddenFileInput = useRef(null)
  const UI = useSelector((state) => state.UI)
  const { t } = useTranslation()
  const { eventId } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleClick = () => {
    hiddenFileInput.current.click()
  }

  const chooseTitle = (e) => {
    seTitle(e.target.value)
  }

  const chooseDescription = (e) => {
    setDescription(e.target.value)
  }

  const chooseBannerImage = (e) => {
    setBannerImage(e.target.files[0])
  }

  const chooseLocation = (e) => {
    setLocation(e.target.value)
  }

  const handleStartDateSelect = (date) => {
    setStartDate(date)
  }

  const handleEndDateSelect = (date) => {
    setEndDate(date)
  }

  const deleteEventHandler = () => {
    dispatch(deleteEvent(eventId))
    navigate("/events")
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    const image = await fileUploadHandler(bannerImage)
    const eventData = {
      title: title || (typeof event.title === "undefined" ? "" : event.title),
      description:
        description ||
        (typeof event.description === "undefined" ? "" : event.description),
      dateStart:
        startDate ||
        (typeof event.dateStart === "undefined" ? "" : event.dateStart),
      dateEnd:
        endDate || (typeof event.dateEnd === "undefined" ? "" : event.dateEnd),
      timeStart:
        startTime ||
        (typeof event.timeStart === "undefined" ? "" : event.timeStart),
      location:
        location ||
        (typeof event.location === "undefined" ? "" : event.location),
      bannerImage: image || event.bannerImage,
      isPrivate:
        privacy ||
        (typeof event?.privacy === "undefined" ? false : event.privacy),
      tags: tags || event.tags,
    }
    if (eventData.title.length > 0 && eventData.location.length > 0)
      handleShowModal()
    dispatch(editEvent(eventId, eventData))
  }

  return (
    <div className="flex justify-center content-center">
      <form
        className="w-5/6 lg:w-3/7 rounded-2xl bg-white flex flex-col justify-evenly absolute z-50 inset-1/7 md:inset-y-1/4 shadow-xl py-3"
        onSubmit={handleFormSubmit}
      >
        {UI.errors && <MessageHandler error={UI.errors.data.message} />}
        <section className="flex justify-between border-b-2 border-grey-super_light py-3 mx-5">
          <input
            type="text"
            name=""
            id=""
            value={title}
            className="w-full placeholder-grey-medium text-lg"
            onChange={chooseTitle}
          />
          <button type="button" onClick={handleShowModal}>
            <Icon iconName="close" />
          </button>
        </section>
        <section className="flex-col lg:flex-row flex justify-start  ">
          <DatePicker
            selected={startDate}
            onSelect={handleStartDateSelect}
            placeholderText={t("events.modal_date_new_event")}
            withPortal
            locale="nl"
            dateFormat="dd/MM/yyyy"
            className="py-3 mx-5 w-52 placeholder-grey-medium_light text-base"
            minDate={new Date()}
          />
          <DatePicker
            selected={endDate}
            onSelect={handleEndDateSelect}
            placeholderText={t("events.modal_date_new_event")}
            withPortal
            locale="nl"
            dateFormat="dd/MM/yyyy"
            className="py-3 mx-5 w-52 placeholder-grey-medium_light text-base"
            minDate={new Date()}
          />
        </section>
        <section className="">
          <div className="text-base">
            <DatePicker
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              selected={startTime}
              onChange={(update) => {
                setStartTime(update)
              }}
              placeholderText={dayjs(event.timeStart).format("HH:mm")}
              withPortal
              locale="nl"
              timeCaption="Time"
              dateFormat="HH:mm"
              className="py-3 mx-5 w-52 placeholder-grey-medium_light text-base"
            />
          </div>
        </section>
        <section className="lg:flex justify-between border-b-2 border-grey-super_light py-3 mx-5">
          <div className="">
            <input
              type="text"
              value={location}
              onChange={chooseLocation}
              className=" placeholder-grey-medium_light text-base h-10"
            />
          </div>
          <div className="pt-5 lg:pt-0">
            <button
              type="button"
              onClick={handleClick}
              className="flex justify-around items-center "
            >
              <span className="text-base pr-3 ">
                {bannerImage
                  ? "File successfully uploaded"
                  : t("events.modal_cover_image_new_event")}
              </span>
              <Icon iconName="add" iconStyle="fill-inactive text-sky" />
            </button>
            <input
              type="file"
              size="60"
              className="hidden"
              ref={hiddenFileInput}
              onChange={chooseBannerImage}
            />
          </div>
        </section>

        <section className="py-3 mx-5">
          <input
            type="text"
            value={description}
            className="w-full placeholder-grey-medium_light text-base h-10"
            onChange={chooseDescription}
          />
        </section>
        <section className="flex justify-center border-t-2 border-grey-super_light py-3 mx-5">
          <TagsInput selectedTags={selectedTags} />
          {event?.tags.map((tag) => (
            <span
              key={tag}
              className="mr-2 bg-grey-super_light rounded-full px-3 py-1 text-base text-grey-medium"
            >
              {tag}
            </span>
          ))}
        </section>
        <section className="lg:flex justify-between px-5">
          <SwitchButton
            nameLeft={t("events.modal_public_toggle_new_event")}
            nameRight={t("events.modal_private_toggle_new_event")}
            toogle={() => setPrivacy(!privacy)}
            privacy={privacy}
          />
          <Button buttonName="Save" buttonStyle="btnEventStyle" buttonSubmit />
        </section>
        <div className="flex">
          <button
            className="flex mx-5 "
            type="button"
            onClick={() => setConfirmDelete(!confirmDelete)}
          >
            <Icon iconName="trash" /> Delete topic
          </button>
          {confirmDelete && (
            <div className="flex justify-around w-20">
              <button
                type="button"
                onClick={deleteEventHandler}
                className="text-pink font-bold transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => setConfirmDelete(false)}
                className="text-sky font-bold transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
              >
                No
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  )
}

EditEventModal.propTypes = {
  event: PropTypes.shape.isRequired,
  handleShowModal: PropTypes.func.isRequired,
}

export default EditEventModal
