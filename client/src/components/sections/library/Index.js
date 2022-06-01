/* eslint-disable no-unused-vars */
import React, { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Main from "../../layout/Main";
import MainLibraryContent from "./MainLibraryContent";
import LibraryContentLeft from "./LibraryContentLeft";
import { getAllFilesFromLibrary } from "../../../redux/actions/libraryActions";
import LibraryContentRight from "./LibraryContentRight";

const Index = () => {
  const library = useSelector((state) => state.library.allFiles);
  const singleFile = useSelector((state) => state.library.singleFile);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [theCategoryToColor, setTheCategoryToColor] = useState("");

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    dispatch(getAllFilesFromLibrary());
  }, [dispatch]);

  const libraryMemo = useMemo(() => library, [library]);

  return (
    <div className="">
      <Main
        main={
          <MainLibraryContent
            library={libraryMemo}
            showModal={showModal}
            handleShowModal={handleShowModal}
            setTheCategoryToColor={setTheCategoryToColor}
            theCategoryToColor={theCategoryToColor}
          />
        }
        contentLeft={
          <LibraryContentLeft
            library={libraryMemo}
            handleShowModal={handleShowModal}
            setTheCategoryToColor={setTheCategoryToColor}
            theCategoryToColor={theCategoryToColor}
          />
        }
        contentRight={
          <LibraryContentRight
            singleFile={singleFile}
            handleShowModal={handleShowModal}
          />
        }
      />
    </div>
  );
};

export default Index;
