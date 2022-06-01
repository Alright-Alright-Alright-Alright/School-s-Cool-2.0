/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import React from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { PlusIcon } from "@heroicons/react/solid";
import {
  filterLibraryByCategory,
  getAllFilesFromLibrary,
  getUserFilesFromLibrary,
} from "../../../redux/actions/libraryActions";

const LibraryContentLeft = ({
  library,
  handleShowModal,
  theCategoryToColor,
  setTheCategoryToColor,
}) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleFilter = (item) => {
    dispatch(filterLibraryByCategory(item));
    setTheCategoryToColor(item);
  };

  const handleMyFiles = () => {
    dispatch(getUserFilesFromLibrary());
    setTheCategoryToColor("");
  };

  const getFiles = () => {
    dispatch(getAllFilesFromLibrary());
    setTheCategoryToColor("");
  };

  const uniqueCatergories = () => {
    const arr = [];
    library.map(
      (item) => arr.indexOf(item.category) === -1 && arr.push(item.category)
    );

    const categories = arr.map((item) => (
      <div
        key={item}
        className={`text-xl py-2 hover:text-pink ${
          theCategoryToColor === item && "text-pink"
        }`}
      >
        <button type="button" onClick={() => handleFilter(item)}>
          {item}
        </button>
      </div>
    ));

    categories.push(
      <div
        className={`text-xl py-2 hover:text-pink ${
          theCategoryToColor === "" && "text-pink"
        }`}
      >
        <button type="button" onClick={handleMyFiles}>
          Mijn bestanden
        </button>
      </div>
    );

    return categories;
  };

  return (
    <div className="pl-5 pt-10">
      <button
        type="button"
        className="text-lg flex gap-2 bg-sky text-white rounded-md hover:shadow-md px-4 py-2 hover:bg-sky-dark"
        onClick={handleShowModal}
      >
        <PlusIcon className="h-5" /> <p>{t("library.button_upload_file")}</p>
      </button>
      <hr className="mt-8 w-52 text-grey-light" />
      <section className="pt-6">{uniqueCatergories()}</section>
      <section>
        <button
          className="text-xl py-2 hover:text-pink"
          type="button"
          onClick={getFiles}
        >
          {t("library.button_all_files")}
        </button>
      </section>
    </div>
  );
};

export default LibraryContentLeft;
