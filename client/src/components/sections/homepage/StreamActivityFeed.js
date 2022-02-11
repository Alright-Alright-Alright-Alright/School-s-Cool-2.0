/* eslint-disable no-unused-vars */
import React from "react"
import { useSelector } from "react-redux"

import {
  StreamApp,
  StatusUpdateForm,
  FlatFeed,
  NotificationDropdown,
  Activity,
  ActivityFooter,
  LikeButton,
  CommentField,
  CommentList,
  CommentItem,
  InfiniteScrollPaginator,
} from "react-activity-feed"
import "react-activity-feed/dist/index.css"
// import "./app.css"

const apiKey = process.env.REACT_APP_STREAM_API_KEY
const appId = "1159140"
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYmF0bWFuIn0.8aYd7O_fx-1YMx28DXG1n274o4pa3SjHnRM8AIHLqkE"

// "7xwzhecaee37",
//   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoibHVja3ktcmljZS0wIn0.A-VXOFZD7YuUJmnnRprKi3kZOKtG0to7yztaofjzWDg",
//   "1159140"

function App() {
  const streamToken = useSelector((state) => state.user.streamToken)

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <StreamApp apiKey="7xwzhecaee37" appId="1159140" token={streamToken}>
        <div className="wrapper box">
          <h3>React Activity Feed</h3>
          <NotificationDropdown right />
        </div>
        {/* <StatusUpdateForm
          emojiI18n={{
            search: "Type here to search...",
            categories: { recent: "Recent Emojis" },
          }}
        /> */}
        <FlatFeed
          notify
          feedGroup="user"
          options={{
            limit: 6,
            withOwnChildren: true,
            withRecentReactions: true,
          }}
          Paginator={InfiniteScrollPaginator}
          Activity={({ activity, feedGroup, userId }) => (
            <Activity
              activity={activity}
              feedGroup={feedGroup}
              userId={userId}
              Footer={() => (
                <>
                  <ActivityFooter
                    activity={activity}
                    feedGroup={feedGroup}
                    userId={userId}
                  />
                  <CommentField activity={activity} />
                  <CommentList
                    activityId={activity.id}
                    CommentItem={({ comment }) => (
                      <div className="wrapper">
                        <CommentItem comment={comment} />
                        <LikeButton reaction={comment} />
                      </div>
                    )}
                  />
                </>
              )}
            />
          )}
        />
      </StreamApp>
    </div>
  )
}
export default App
