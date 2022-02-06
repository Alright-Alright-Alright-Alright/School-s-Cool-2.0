import { SEARCHING, NOT_SEARCHING } from "../types/searchBar"

const initialState = {
  searching: false,
}

const searchBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCHING:
      return {
        searching: action.payload,
      }
    case NOT_SEARCHING:
      return {
        searching: action.payload,
      }
    default:
      return state
  }
}

export default searchBarReducer
