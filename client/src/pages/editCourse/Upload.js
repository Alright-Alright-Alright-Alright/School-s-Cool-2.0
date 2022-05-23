/* eslint-disable no-unused-vars */
/* eslint-disable react/no-string-refs */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import PropTypes from "prop-types";
import {
  QuestionMarkCircleIcon,
  PhotographIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/solid";
import utils from "./_utils";

export default function Upload(props) {
  const { showModal, setShowModal, addItems } = props;

  const handleUpload = async (e) => {
    if (e?.target?.files?.length) {
      const newFiles = Array.from(e.target.files);
      const pdf = newFiles[0];
      const images = await utils.convertPdfToImages(pdf);
      addItems(images);
    }
  };

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-auto max-w-3xl">
              {/* content */}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/* header */}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    What do you want to add?
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                    type="button"
                  />
                </div>
                {/* Upload Multiple choice */}
                <div className="relative p-6 grid grid-cols-1 gap-2">
                  <button
                    type="button"
                    className="flex gap-2 bg-sky rounded-md text-white px-4 py-2 items-center hover:shadow-md"
                  >
                    <QuestionMarkCircleIcon className="w-5 h-5" />
                    Multiple Choice Question
                  </button>

                  {/* Upload Image */}
                  <button
                    type="button"
                    className="flex gap-2 bg-pink rounded-md text-white px-4 py-2 items-center hover:shadow-md"
                  >
                    <PhotographIcon className="w-5 h-5" />
                    Image
                  </button>

                  {/* Upload Powerpoint / PDF */}
                  <div className="overflow-hidden relative w-64">
                    <button
                      type="button"
                      className="bg-green rounded-md hover:bg-blue-light text-white font-bold py-2 px-4 w-full inline-flex items-center"
                    >
                      <PresentationChartBarIcon className="w-5 h-5" />
                      <span className="ml-2">Upload Powerpoint (PDF)</span>
                    </button>
                    <input
                      className="cursor-pointer absolute block py-2 px-4 w-full opacity-0 pin-r pin-t -mt-12"
                      type="file"
                      accept="pdf/*"
                      onChange={handleUpload}
                    />
                  </div>
                </div>
                {/* footer */}
                <div className="flex items-center justify-end p-4 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 font-bold uppercase px-6 py-2 text-md outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black" />
        </>
      ) : null}
    </>
  );
}

Upload.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  addItems: PropTypes.func.isRequired,
};
