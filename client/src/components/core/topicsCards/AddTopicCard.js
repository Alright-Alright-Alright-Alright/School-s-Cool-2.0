import React from "react"

const cardStyle = {
  position: "static",
  width: "203px",
  height: "290px",
  background: "#FFFFFF",
  boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.25)",
  borderRadius: "0px 20px 20px 20px",
  flex: "none",
  order: "0",
  flexGrow: "0",
  margin: "0px 32px",
}

const textStyle = {
  fontFamily: "Karla",
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "26px",
  letterSpacing: "0.05em",
  textAlign: "center",
}

const TopicsCard = () => (
  <div style={cardStyle}>
    <div>
      <section style={{ margin: "51px 32px 15px" }}>
        <svg
          width="138"
          height="138"
          viewBox="0 0 138 138"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="59.7998" width="18.4" height="138" fill="#18C7BB" />
          <rect
            y="78.2001"
            width="18.4"
            height="138"
            transform="rotate(-90 0 78.2001)"
            fill="#18C7BB"
          />
        </svg>
      </section>
      <section style={textStyle}>New Topic</section>
    </div>
  </div>
)

export default TopicsCard
