import React from "react"

// eslint-disable-next-line react/prop-types
const TopicCards = ({ topics }) => {
  const cardStyle = {
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
    padding: "3px 13px",
    fontFamily: "Karla",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "26px",
    letterSpacing: "0.05em",
    marginLeft: "12px",
  }

  const imgOfTheCard = {
    height: "184px",
    borderRadius: "0px 20px 0px 0px",
    background:
      "url(https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1140180560)",
    backgroundPosition: "center",
    backgroundSize: "cover",
  }

  const hrStyle = {
    width: "175.5px",
    border: "1px solid #DEE5EA",
    position: "relative",
    top: "30px",
    left: "12px",
  }

  // eslint-disable-next-line react/prop-types
  const topicsData = topics.map((topic) => (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <div style={cardStyle}>
        <section>
          <div style={imgOfTheCard} />
        </section>
        <section style={{ height: "106px" }}>
          <div style={textStyle}>{topic.title}</div>
          <hr style={hrStyle} />
        </section>
      </div>
    </div>
  ))

  return <div>{topicsData}</div>
}

export default TopicCards
