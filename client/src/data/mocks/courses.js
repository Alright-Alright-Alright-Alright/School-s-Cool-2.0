import image from "./assets/preview.png";
import lorem from "./lorem";
import slide1 from "./assets/Machine Learning Infographics by Slidesgo-geconverteerd-01.jpg";
import slide2 from "./assets/Machine Learning Infographics by Slidesgo-geconverteerd-02.jpg";
import slide3 from "./assets/Machine Learning Infographics by Slidesgo-geconverteerd-03.jpg";

export default [
  {
    _id: "1",
    title: "Machine Learning",
    likedBy: "42",
    comments: "42",
    image,
    lessons: [
      {
        _id: "1",
        completed: true,
        duration: "1h 15m 0s",
        title: "Introduction",
        items: [
          {
            type: "infographic",
            image: slide1,
          },
          {
            type: "infographic",
            image: slide2,
          },
          {
            type: "infographic",
            image: slide3,
          },
        ],
      },
      {
        _id: "2",
        completed: true,
        duration: "0h 0m 0s",
        title: "Gathering data",
        items: [],
      },
      {
        _id: "3",
        completed: false,
        duration: "0h 0m 0s",
        title: "Feature extraction",
        items: [],
      },
      {
        _id: "4",
        completed: false,
        duration: "0h 0m 0s",
        title: "AWS",
        items: [],
      },
      {
        _id: "5",
        completed: false,
        duration: "0h 0m 0s",
        title: "Azure",
        items: [],
      },
    ],
    members: "42",
    completed: true,
    lorem,
  },
  {
    _id: "2",
    title: "Ethics",
    likedBy: "42",
    comments: "42",
    image,
    lessons: [
      { _id: 1, completed: true, duration: "1h 15m 0s" },
      { _id: 2, completed: false, duration: "1h 15m 0s" },
      { _id: 3, completed: false, duration: "1h 15m 0s" },
    ],
    members: "42",
    completed: false,
    lorem,
  },
  {
    _id: "3",
    title: "Math",
    likedBy: "42",
    comments: "42",
    image,
    lessons: [
      { _id: 1, completed: false, duration: "1h 15m 0s" },
      { _id: 2, completed: false, duration: "1h 15m 0s" },
      { _id: 3, completed: false, duration: "1h 15m 0s" },
    ],
    members: "42",
    completed: false,
    lorem,
  },
  {
    _id: "4",
    title: "History",
    likedBy: "42",
    comments: "42",
    image,
    lessons: [
      { _id: 1, completed: false, duration: "1h 15m 0s" },
      { _id: 2, completed: false, duration: "1h 15m 0s" },
      { _id: 3, completed: false, duration: "1h 15m 0s" },
    ],
    members: "42",
    completed: false,
    lorem,
  },
];