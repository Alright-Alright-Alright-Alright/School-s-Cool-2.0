/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { EditorState } from "draft-js"
import { useParams } from "react-router-dom"
import { Editor } from "react-draft-wysiwyg"
import { convertToHTML } from "draft-convert"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import { t } from "i18next"
import Button from "../Button"
import Icon from "../Icon"
import LibraryModal from "../library/LibraryModal"
import { createPost, getAllPosts } from "../../../redux/actions/postActions"
import "./RichTextToolbar.css"

const RichTextToolbar = () => {
  const singleTopic = useSelector((state) => state.topics.singleTopic)
  const user = useSelector((state) => state.user.singleUser)
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  )
  const [convertedContent, setConvertedContent] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const params = useParams()
  const dispatch = useDispatch()

  const newPost = {
    body: convertedContent,
    topicId: params.topicId,
    owner: user?._id,
  }
  const handleShowModal = () => {
    setShowModal(!showModal)
  }

  const convertContentToHTML = () => {
    const currentContentAsHTML = convertToHTML(editorState.getCurrentContent())
    setConvertedContent(currentContentAsHTML)
  }

  const handleEditorChange = (state) => {
    setEditorState(state)
    convertContentToHTML()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createPost(newPost))
    setEditorState(EditorState.createEmpty())
  }

  return (
    <>
      <div className="rounded-bl-2xl rounded-br-2xl rounded-r-2xl bg-white shadow-lg m-3">
        <div className="flex justify-between p-3">
          <div className=" flex items-end">
            <img
              className="w-10 h-10 rounded-full mr-2 "
              src={`${user?.imageUrl}`}
              alt="profile"
            />
          </div>
          <div className="w-full">
            <Editor
              editorState={editorState}
              onEditorStateChange={handleEditorChange}
              wrapperClassName="flex-col "
              editorClassName=" bg-grey-super_light text-center text-base pl-3 rounded-l-2xl rounded-b-2xl rounded-r-2xl"
              toolbarClassName="flex"
              placeholder={t("topics.header_card_placeholder")}
              toolbar={{
                options: ["inline", "list", "emoji"],
                inline: {
                  options: ["bold", "italic", "underline"],
                },
                list: {
                  inDropdown: false,
                  className: undefined,
                  component: undefined,
                  dropdownClassName: undefined,
                  options: ["unordered", "ordered"],
                },
                // link: { options: ["link"] },
              }}
            />
          </div>
        </div>

        <div className="flex justify-between p-3 relative">
          <div className="flex items-center">
            <button type="button" onClick={handleShowModal} className="flex">
              <Icon iconName="add" iconStyle="fill-inactive text-aqua" />
              <p className="pl-3">{t("topics.header_card_add_resource")}</p>
            </button>
            {showModal && (
              <LibraryModal
                handleShowModal={handleShowModal}
                singleTopic={singleTopic}
              />
            )}
          </div>
          <Button
            buttonName={t("topics.header_card_add_button")}
            buttonStyle="btnTopicStyle"
            buttonSubmit
            onClick={handleSubmit}
          />
        </div>
      </div>
    </>
  )
}

export default RichTextToolbar
