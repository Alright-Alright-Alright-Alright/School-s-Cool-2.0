/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker"
import nl from "date-fns/locale/nl"
import { useTranslation } from "react-i18next"
import PropTypes from "prop-types"
import fileUploadHandler from "../../../middleware/UploadFile"
import { createNewEvent } from "../../../redux/actions/eventActions"
import Button from "../Button"
import SwitchButton from "../SwitchButton"
import Icon from "../Icon"
import "react-datepicker/dist/react-datepicker.css"
import TagsInput from "../TagsInput"
import MessageHandler from "../MessageHandler"

registerLocale("nl", nl)

const Modal = ({ handleShowModal }) => {
  const [title, seTitle] = useState("")
  const [location, setLocation] = useState("")
  const [description, setDescription] = useState("")
  const [bannerImage, setBannerImage] = useState("")
  const [privacy, setPrivacy] = useState(false)
  const [tags, setTags] = useState([])
  const selectedTags = (tagsFromInput) => setTags(tagsFromInput)
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [startTime, setStartTime] = useState(null)
  const hiddenFileInput = useRef(null)
  const UI = useSelector((state) => state.UI)
  const { t } = useTranslation()

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

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    const image = await fileUploadHandler(bannerImage)
    const eventData = {
      title,
      description,
      dateStart: startDate,
      dateEnd: endDate,
      timeStart: startTime,
      location,
      bannerImage:
        image ||
        "https://cdn.eventplanner.be/imgs/xr10330_test-event-in-hasselt-met-1000-jongeren@2x.jpg",
      isPrivate: privacy,
      tags,
    }
    if (eventData.title.length > 0 && eventData.location.length > 0)
      handleShowModal()
    dispatch(createNewEvent(eventData))
  }

  return (
    <div className="flex justify-center content-center">
      <form
        className="w-5/6 lg:w-3/7 rounded-2xl bg-white flex flex-col justify-evenly absolute z-50 inset-1/7 md:inset-y-1/4 shadow-2xl py-3"
        onSubmit={handleFormSubmit}
      >
        {UI.errors && <MessageHandler error={UI.errors.data.message} />}
        <section className="flex justify-between border-b-2 border-grey-super_light py-3 mx-5">
          <input
            type="text"
            name=""
            id=""
            placeholder={t("events.modal_title_new_event")}
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
            minDate={startDate}
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
              placeholderText={t("events.modal_time_new_event")}
              // placeholderText={t("events.modal_date_new_event")}
              withPortal
              locale="nl"
              timeCaption="Time"
              dateFormat="hh:mm"
              className="py-3 mx-5 w-52 placeholder-grey-medium_light text-base"
            />
          </div>
        </section>
        <section className="lg:flex justify-between border-b-2 border-grey-super_light py-3 mx-5">
          <div className="">
            <input
              type="text"
              placeholder={t("events.modal_location_new_event")}
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
            placeholder={t("events.modal_description_new_event")}
            className="w-full placeholder-grey-medium_light text-base h-10"
            onChange={chooseDescription}
          />
        </section>
        <section className="flex justify-center border-t-2 border-grey-super_light py-3 mx-5">
          <TagsInput selectedTags={selectedTags} />
        </section>
        <section className="lg:flex justify-between px-5">
          <SwitchButton
            nameLeft={t("events.modal_public_toggle_new_event")}
            nameRight={t("events.modal_private_toggle_new_event")}
            toogle={() => setPrivacy(!privacy)}
          />
          <div className="py-3 lg:pt-0">
            <Button
              buttonName={t("events.modal_button_create_event")}
              buttonStyle="btnEventStyle"
              buttonSubmit
            />
          </div>
        </section>
      </form>
    </div>
  )
}

Modal.propTypes = {
  handleShowModal: PropTypes.func.isRequired,
}

export default Modal
