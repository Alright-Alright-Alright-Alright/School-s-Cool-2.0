import React from "react";
import PropTypes from "prop-types";
import {
  QuestionMarkCircleIcon,
  PhotographIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/solid";

export default function Upload(props) {
  const { showModal, setShowModal } = props;
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
                {/* body */}
                <div className="relative p-6 grid grid-cols-1 gap-2">
                  <button
                    type="button"
                    className="flex gap-2 bg-sky rounded-md text-white px-4 py-2 items-center hover:shadow-md"
                  >
                    <QuestionMarkCircleIcon className="w-5 h-5" />
                    Multiple Choice Question
                  </button>
                  <button
                    type="button"
                    className="flex gap-2 bg-yellow rounded-md text-white px-4 py-2 items-center hover:shadow-md"
                  >
                    <PhotographIcon className="w-5 h-5" />
                    Image
                  </button>
                  <button
                    type="button"
                    className="flex gap-2 bg-green rounded-md text-white px-4 py-2 items-center hover:shadow-md"
                  >
                    <PresentationChartBarIcon className="w-5 h-5" />
                    Powerpoint
                  </button>
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
};
