/* eslint-disable import/prefer-default-export */
import { GET_LIBRARY } from "../types/library"
import { SET_ERRORS, CLEAR_ERRORS, LOADING_UI } from "../types/ui"
import { getLibraryFiles } from "../services/libraryServices"

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
