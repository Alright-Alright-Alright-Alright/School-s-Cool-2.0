import image from "./assets/preview.png";
import historyImage from "./assets/whystudyhistory.jpg";
import ethicsImage from "./assets/Ethics-Blog-760x550-760x550.png";
import geographyImage from "./assets/171720729-58b9d1473df78c353c38c2b1.jpg";
import mathImages from "./assets/math-curriculum.webp";
import lorem from "./lorem";
import slide1 from "./assets/Machine Learning Infographics by Slidesgo-geconverteerd-01.jpg";
import slide2 from "./assets/Machine Learning Infographics by Slidesgo-geconverteerd-02.jpg";
import slide3 from "./assets/Machine Learning Infographics by Slidesgo-geconverteerd-03.jpg";
import slide4 from "./assets/Machine Learning Infographics by Slidesgo-geconverteerd-04.jpg";
import slide5 from "./assets/Machine Learning Infographics by Slidesgo-geconverteerd-05.jpg";

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
            _id: "52435",
            type: "multiplechoice",
            question: "What is the disadvantage of decision trees?",
            options: [
              "Factor analysis",
              "Decision trees are robust to outliers",
              "Decision trees are prone to be overfit",
              "All of the above",
            ],
            answer: 2,
          },
          {
            _id: "232131",
            type: "multiplechoice",
            question:
              " What is the most significant phase in a genetic algorithm?",
            options: [
              "Selection",
              "Mutation",
              "Crossover",
              "Fitness function",
              "None of the above",
            ],
            answer: 3,
          },
          {
            type: "infographic",
            image: slide3,
          },
          {
            type: "infographic",
            image: slide4,
          },
          {
            type: "infographic",
            image: slide5,
          },
          { type: "summary" },
        ],
      },
      {
        _id: "2",
        completed: true,
        duration: "0h 0m 0s",
        title: "Gathering data",
        items: [{ type: "summary" }],
      },
      {
        _id: "3",
        completed: false,
        duration: "0h 0m 0s",
        title: "Feature extraction",
        items: [{ type: "summary" }],
      },
      {
        _id: "4",
        completed: false,
        duration: "0h 0m 0s",
        title: "AWS",
        items: [{ type: "summary" }],
      },
      {
        _id: "5",
        completed: false,
        duration: "0h 0m 0s",
        title: "Azure",
        items: [{ type: "summary" }],
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
    image: ethicsImage,
    lessons: [
      {
        _id: "1",
        completed: true,
        duration: "1h 15m 0s",
        items: [{ type: "summary" }],
        title: "Placeholder title",
      },
      {
        _id: "2",
        completed: false,
        duration: "1h 15m 0s",
        items: [{ type: "summary" }],
        title: "Placeholder title",
      },
      {
        _id: "3",
        completed: false,
        duration: "1h 15m 0s",
        items: [{ type: "summary" }],
        title: "Placeholder title",
      },
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
    image: mathImages,
    lessons: [
      {
        _id: "1",
        completed: false,
        duration: "1h 15m 0s",
        items: [{ type: "summary" }],
        title: "Placeholder title",
      },
      {
        _id: "2",
        completed: false,
        duration: "1h 15m 0s",
        items: [{ type: "summary" }],
        title: "Placeholder title",
      },
      {
        _id: "3",
        completed: false,
        duration: "1h 15m 0s",
        items: [{ type: "summary" }],
        title: "Placeholder title",
      },
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
    image: historyImage,
    lessons: [
      {
        _id: "1",
        completed: false,
        duration: "1h 15m 0s",
        items: [{ type: "summary" }],
        title: "Placeholder title",
      },
      {
        _id: "2",
        completed: false,
        duration: "1h 15m 0s",
        items: [{ type: "summary" }],
        title: "Placeholder title",
      },
      {
        _id: "3",
        completed: false,
        duration: "1h 15m 0s",
        items: [{ type: "summary" }],
        title: "Placeholder title",
      },
    ],
    members: "42",
    completed: false,
    lorem,
  },
  {
    _id: "5",
    title: "Geography",
    likedBy: "42",
    comments: "42",
    image: geographyImage,
    lessons: [
      {
        _id: "1",
        completed: false,
        duration: "1h 15m 0s",
        items: [{ type: "summary" }],
        title: "Placeholder title",
      },
      {
        _id: "2",
        completed: false,
        duration: "1h 15m 0s",
        items: [{ type: "summary" }],
        title: "Placeholder title",
      },
      {
        _id: "3",
        completed: false,
        duration: "1h 15m 0s",
        items: [{ type: "summary" }],
        title: "Placeholder title",
      },
    ],
    members: "42",
    completed: false,
    lorem,
  },
];
