import { SEARCHING, NOT_SEARCHING } from "../types/searchBar"

export const searching = () => (dispatch) =>
  dispatch({ type: SEARCHING, payload: true })

export const notSearching = () => (dispatch) =>
  dispatch({ type: NOT_SEARCHING, payload: false })
