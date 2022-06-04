/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-underscore-dangle */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  DocumentIcon,
  PhotographIcon,
  FilmIcon,
  DownloadIcon,
} from "@heroicons/react/solid";
import { TrashIcon } from "@heroicons/react/outline";
import { getSingleFile } from "../../../redux/actions/libraryActions";
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

RowIcon.propTypes = {
  fileUrl: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

const HighlightedFile = (props) => {
  const { filename, modifiedOn, fileUrl, onClick } = props;
  return (
    <li>
      <button
        type="button"
        className="grid grid-cols-6 bg-white rounded-md shadow-md hover:shadow-lg p-4"
        onClick={onClick}
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

HighlightedFile.propTypes = {
  filename: PropTypes.string.isRequired,
  fileUrl: PropTypes.string.isRequired,
  modifiedOn: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
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
    <ul
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onFocus={handleMouseOver}
      onBlur={handleMouseOut}
    >
      <button
        onClick={onClick}
        type="button"
        className="grid grid-cols-12 font-bold text-grey-medium rounded-md hover:bg-white hover:shadow-md px-4 py-4 border-b-2 w-full text-left"
      >
        <li className="col-span-5 flex gap-2 font-normal">
          <RowIcon fileUrl={fileUrl} size={5} />
          <p>{filename}</p>
        </li>
        <li className="col-span-3 font-normal h-full align-middle">
          {modifiedOn}
        </li>
        <li className="col-span-3 font-normal">{category}y</li>
        {isHovering && (
          <div className="flex gap-4">
            <DownloadIcon className="w-5 h-5 text-sky" />
            <TrashIcon className="w-5 h-5 text-red-600" />
          </div>
        )}
      </button>
    </ul>
  );
};

LibraryRow.propTypes = {
  filename: PropTypes.string.isRequired,
  fileUrl: PropTypes.string.isRequired,
  modifiedOn: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const MainLibraryContent = (props) => {
  const { library, showModal, handleShowModal } = props;
  const dispatch = useDispatch();

  return (
    <>
      {showModal && (
        <div className="relative">
          <LibraryModal handleShowModal={handleShowModal} />
        </div>
      )}
      <div className="h-screen mt-8 flex flex-col gap-6 blur-md z-50">
        {/* Header */}
        <div className="flex flex-col">
          <h1 className="font-bold text-grey-dark text-xl">File library</h1>
          <h2 className="font-normal text-grey-medium">Schoolscool</h2>
        </div>

        {/* Recent files */}
        <ul className="flex gap-8 justify-between w-full my-4">
          {library.slice(0, 3).map((item) => (
            <HighlightedFile
              filename={item.title}
              modifiedOn={item.updatedAt.substring(0, 10)}
              fileUrl={item.fileUrl}
              onClick={() => dispatch(getSingleFile(item._id))}
            />
          ))}
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
          {library.map((item) => (
            <LibraryRow
              filename={item.title}
              modifiedOn={item.updatedAt.substring(0, 10)}
              category={item.category}
              fileUrl={item.fileUrl}
              onClick={() => dispatch(getSingleFile(item._id))}
              onDownload={() => {
                window.location.href = item.fileUrl;
              }}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

MainLibraryContent.propTypes = {
  library: PropTypes.arrayOf(PropTypes.object).isRequired,
  showModal: PropTypes.bool.isRequired,
  handleShowModal: PropTypes.bool.isRequired,
};

export default MainLibraryContent;
