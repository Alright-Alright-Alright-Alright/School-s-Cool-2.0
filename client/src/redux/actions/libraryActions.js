/* eslint-disable import/prefer-default-export */
import { GET_LIBRARY, POST_FILE } from "../types/library"
import { SET_ERRORS, CLEAR_ERRORS, LOADING_UI } from "../types/ui"
import { addFile, getLibraryFiles } from "../services/libraryServices"

export const getAllFilesFromLibrary = () => async (dispatch) => {
  dispatch({ type: LOADING_UI })

  const libraryFilesFromDB = await getLibraryFiles()
  try {
    dispatch({ type: CLEAR_ERRORS })
    dispatch({ type: GET_LIBRARY, payload: libraryFilesFromDB })
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response,
    })
  }
}

export const addFileToLibrary = (fileData) => async (dispatch) => {
  dispatch({ type: LOADING_UI })

  const addAFile = await addFile(fileData)
  try {
    dispatch({ type: CLEAR_ERRORS })
    dispatch({ type: POST_FILE, payload: addAFile })
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response,
    })
  }
}
