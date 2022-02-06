/* eslint-disable no-underscore-dangle */
import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"

import coursesReducer from "./reducers/courseReducer"
import libraryReducer from "./reducers/libraryReducer"
import topicsReducer from "./reducers/topicReducer"
import uiReducer from "./reducers/uiReducer"
import userReducer from "./reducers/userReducer"
import eventsReducer from "./reducers/eventReducer"
import postsReducer from "./reducers/postReducer"
import activitiesReducer from "./reducers/activityReducer"
import searchBarReducer from "./reducers/searchBarReducer"

const initialState = {}

const middleware = [thunk]

const reducers = combineReducers({
  user: userReducer,
  courses: coursesReducer,
  library: libraryReducer,
  topics: topicsReducer,
  events: eventsReducer,
  UI: uiReducer,
  posts: postsReducer,
  activities: activitiesReducer,
  searchBar: searchBarReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
)

export default store
