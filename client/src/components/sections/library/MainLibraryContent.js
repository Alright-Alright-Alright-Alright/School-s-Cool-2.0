/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DocumentIcon, PhotographIcon, FilmIcon } from "@heroicons/react/solid";
import { TrashIcon } from "@heroicons/react/outline";
import Button from "../../core/Button";
import {
  getSingleFile,
  filterLibraryBySubject,
} from "../../../redux/actions/libraryActions";
import LibraryModal from "../../core/library/LibraryModal";

const RowIcon = (props) => {
  const { fileUrl, size } = props;
  const split = fileUrl.split(".");
  const extension = split[split.length - 1];
  const style = `h-${size} my-auto`;

  switch (extension) {
    case "png":
      return <PhotographIcon className={`${style} text-sky`} />;
    case "pdf":
      return <DocumentIcon className={`${style} text-orange-400`} />;
    case "gif":
      return <FilmIcon className={`${style} text-yellow-400`} />;
    default:
      console.error("uknown format", extension);
      return <DocumentIcon className={style} />;
  }
};

const HighlightedFile = (props) => {
  const { filename, modifiedOn, fileUrl } = props;
  return (
    <li>
      <button
        type="button"
        className="grid grid-cols-6 bg-white rounded-sm shadow-sm hover:shadow-md p-4"
      >
        <div className="col-span-4 text-left">
          <p className="font-bold text-grey-medium">{filename}</p>
          <p className="font-normal text-grey-medium_light">{modifiedOn}</p>
        </div>
        <RowIcon fileUrl={fileUrl} size={16} />
      </button>
    </li>
  );
};

const LibraryRow = (props) => {
  const { filename, modifiedOn, category, fileUrl, onClick } = props;
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <ul onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <button
        onClick={onClick}
        type="button"
        className="grid grid-cols-12 font-bold text-grey-medium rounded-sm hover:bg-white hover:shadow-md px-4 py-4 border-b-2 w-full text-left"
      >
        <li className="col-span-5 flex gap-2 font-normal">
          <RowIcon fileUrl={fileUrl} size={5} />
          <p>{filename}</p>
        </li>
        <li className="col-span-3 font-normal h-full align-middle">
          {modifiedOn}
        </li>
        <li className="col-span-3 font-normal">{category}y</li>
        {isHovering && <TrashIcon className="w-5 h-5 text-red-600" />}
      </button>
    </ul>
  );
};

const MainLibraryContent = ({
  library,
  showModal,
  handleShowModal,
  theCategoryToColor,
  setTheCategoryToColor,
}) => {
  const dispatch = useDispatch();
  const filteredLibrary = useSelector((state) => state.library.filteredFiles);
  const handleFilter = (item) => {
    dispatch(filterLibraryBySubject(item));
    setTheCategoryToColor(item);
  };

  const uniqueBySubject = () => {
    const arr = [];

    if (filteredLibrary?.length > 0) {
      filteredLibrary?.map(
        (item) => arr.indexOf(item.subject) === -1 && arr.push(item.subject)
      );
    } else {
      library.map(
        (item) => arr.indexOf(item.subject) === -1 && arr.push(item.subject)
      );
    }
    const subjects = arr.map((item) => (
      <span key={item} className="pr-3">
        <Button
          buttonName={item}
          buttonStyle={
            theCategoryToColor === item
              ? "btnLibraryStyleActive"
              : "btnLibraryStyle"
          }
          onClick={() => handleFilter(item)}
        />
      </span>
    ));
    return subjects;
  };

  return (
    <>
      {showModal && (
        <div className="relative">
          <LibraryModal handleShowModal={handleShowModal} />
        </div>
      )}
      <div className={`h-screen mt-8 flex flex-col gap-6 blur-md z-50`}>
        {/* Header */}
        <div>
          <div className="flex flex-col">
            <h1 className="font-bold text-grey-dark text-xl">File library</h1>
            <h2 className="font-normal text-grey-medium">Schoolscool</h2>
          </div>
        </div>

        {/* Recent files */}
        <ul className="flex gap-8 justify-between w-full my-4">
          {library.slice(0, 3).map((item) => {
            return (
              <HighlightedFile
                filename={item.title}
                modifiedOn={item.updatedAt.substring(0, 10)}
                fileUrl={item.fileUrl}
              />
            );
          })}
        </ul>

        {/* Header of library items */}
        <ul className="grid grid-cols-12 font-bold text-grey-medium">
          <li className="col-span-5">Name</li>
          <li className="col-span-3">Modified On</li>
          <li className="col-span-3">Category</li>
          <li className="col-span-1" />
        </ul>

        {/* List of library items */}
        <ul className="flex flex-col">
          {library.map((item) => {
            return (
              <LibraryRow
                filename={item.title}
                modifiedOn={item.updatedAt.substring(0, 10)}
                category={item.category}
                fileUrl={item.fileUrl}
                onClick={() => dispatch(getSingleFile(item._id))}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default MainLibraryContent;
