/* eslint-disable no-shadow */
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
import Dropdown from "../../Dropdown";

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

  const categories = React.useMemo(() => {
    const uniqueCategories = [];
    library.map(
      (item) =>
        uniqueCategories.indexOf(item.category) === -1 &&
        uniqueCategories.push(item.category)
    );

    const categories = uniqueCategories.map((item) => ({
      label: item,
      value: item.toLowerCase().replaceAll(" ", "_"),
      handler: () => handleFilter(item),
    }));

    categories.push({
      label: "Mijn bestanden",
      value: "mijn_bestanden",
      handler: handleMyFiles,
    });

    categories.push({
      label: "Alle bestanden",
      value: "all_files",
      handler: getFiles,
    });

    return categories;
  }, [library, handleFilter, handleMyFiles, getFiles]);

  return (
    <div className="pl-5 pt-10">
      <button
        type="button"
        className="text-lg flex gap-2 bg-sky text-white rounded-md hover:shadow-md px-4 py-2 hover:bg-sky-dark"
        onClick={handleShowModal}
      >
        <PlusIcon className="h-5" /> <p>{t("library.button_upload_file")}</p>
      </button>
      <hr className="my-8 w-52 text-grey-light" />

      {/* Filters */}
      <section>
        <Dropdown options={categories} label="Filter categorie" />
      </section>
    </div>
  );
};

export default LibraryContentLeft;
