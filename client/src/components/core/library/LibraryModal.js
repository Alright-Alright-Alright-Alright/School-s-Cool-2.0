/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { t } from "i18next";
import { useParams } from "react-router-dom";
import fileUploadHandler from "../../../middleware/UploadFile";
import Button from "../Button";
import SwitchButton from "../SwitchButton";
import Icon from "../Icon";
import { addFileToLibrary } from "../../../redux/actions/libraryActions";
import { getAlltopics, getOneTopic } from "../../../redux/actions/topicActions";
import TagsInput from "../TagsInput";
import MessageHandler from "../MessageHandler";

const Modal = ({ handleShowModal, singleTopic }) => {
  const [title, seTitle] = useState("");
  const [category, setCategory] = useState("");
  const [subject, setSubject] = useState("");
  const [fileUrl, setFilUrl] = useState("");
  const [imgPreview, setImgPreview] = useState("");
  const [privacy, setPrivacy] = useState(false);
  const [tags, setTags] = useState([]);
  const hiddenFileInput = useRef(null);
  const topics = useSelector((state) => state.topics.allTopics);
  const UI = useSelector((state) => state.UI);
  const selectedTags = (tagsFromInput) => setTags(tagsFromInput);
  const dispatch = useDispatch();
  const { topicId } = useParams();

  useEffect(() => {
    dispatch(getAlltopics());
  }, [dispatch]);

  const filterCategory = () => {
    const arr = [];
    topics.map(
      (item) => arr.indexOf(item.category) === -1 && arr.push(item.category)
    );
    return arr;
  };

  const findFunction = (cat) =>
    topics.filter((topic) => topic.category === cat);

  const filterSubject = (cat) => {
    const arr = [];
    findFunction(cat).map(
      (item) => arr.indexOf(item.subject) === -1 && arr.push(item.subject)
    );
    return arr;
  };

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleImagePreview = async (img) => {
    const image = await fileUploadHandler(img);
    setImgPreview(image);
  };

  const chooseTitle = (e) => {
    seTitle(e.target.value);
  };

  const chooseBannerImage = async (e) => {
    setFilUrl(e.target.files[0]);
    handleImagePreview(e.target.files[0]);
  };

  const chooseCategory = (e) => {
    setCategory(e.target.value);
  };

  const chooseSubject = (e) => {
    setSubject(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const image = await fileUploadHandler(fileUrl);
    const fileData = {
      title,
      category: singleTopic ? singleTopic.category : category,
      subject: singleTopic ? singleTopic.subject : subject,
      fileUrl: image,
      isPrivate: privacy,
      tags,
    };
    if (
      fileData.tags.length > 0 &&
      fileData.category.length > 0 &&
      fileData.subject.length > 0
    )
      handleShowModal();
    dispatch(addFileToLibrary(fileData));

    setTimeout(() => topicId && dispatch(getOneTopic(topicId)), 1000);
  };

  return (
    <div className="absolute inset-0 flex justify-center mt-12 z-50">
      <form
        className=" h-80 lg:h-72 w-6/7 rounded-md bg-white flex flex-col justify-evenly shadow-2xl"
        onSubmit={handleFormSubmit}
      >
        {UI.errors && <MessageHandler error={UI.errors} />}
        <section className="flex justify-between px-1 border-b-2 border-grey-super_light py-3 mx-5">
          <input
            type="text"
            name=""
            id=""
            placeholder={t("library.modal_choose_file_name")}
            className="w-2/3 placeholder-grey-medium text-md"
            onChange={chooseTitle}
            required
          />
          <button type="button" onClick={handleShowModal}>
            <Icon iconName="close" />
          </button>
        </section>
        <section className="px-1 mx-5">
          <TagsInput selectedTags={selectedTags} />
        </section>
        <section className="lg:flex justify-between border-b-2 border-grey-super_light px-1 py-3 mx-5">
          {singleTopic ? (
            <div>
              <p className="text-sm">
                {t("library.modal_choose_category_new_file")}:
              </p>
              <p>{singleTopic.category}</p>
            </div>
          ) : (
            <select
              required
              onChange={chooseCategory}
              name="category"
              id=""
              className="bg-grey-super_light rounded-md  w-2/7 text-sm py-3 pl-3"
            >
              <option disabled selected>
                {t("library.modal_choose_category_new_file")}
              </option>
              {filterCategory().map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          )}
          {singleTopic ? (
            <div className="py-3 lg:py-0">
              <p className="text-sm">Subject:</p>
              <p>{singleTopic.subject}</p>
            </div>
          ) : (
            <select
              required
              onChange={chooseSubject}
              name="subject"
              id=""
              className=" bg-grey-super_light rounded-md  w-2/7 text-sm py-2 pl-3 "
            >
              <option disabled selected>
                {t("library.modal_choose_subject_new_file")}
              </option>
              {filterSubject(category).map((sub) => (
                <option key={sub} value={sub}>
                  {sub}
                </option>
              ))}
            </select>
          )}
          <div className="flex lg:justify-end items-center lg:w-2/7 py-3 lg:py-0">
            <div>
              <button
                type="button"
                onClick={handleClick}
                className="flex items-center"
              >
                <span className="text-sm pr-3">
                  {imgPreview
                    ? `${t("library.button_upload_file_modal_success")}`
                    : `${t("library.button_upload_file_modal_description")}`}
                </span>
                <Icon iconName="add" iconStyle="fill-inactive text-pink" />
              </button>
              <input
                type="file"
                name="file"
                size="60"
                className="hidden"
                ref={hiddenFileInput}
                onChange={chooseBannerImage}
                required
              />
            </div>
          </div>
        </section>
        <section className="flex justify-between px-5">
          <SwitchButton
            nameLeft={t("library.modal_public_toggle_new_file")}
            nameRight={t("library.modal_private_toggle_new_file")}
            toogle={() => setPrivacy(!privacy)}
          />
          <Button
            buttonName={t("library.button_upload_file_modal_button")}
            buttonStyle="btnLibraryStyle"
            buttonSubmit
          />
        </section>
      </form>
    </div>
  );
};

export default Modal;
