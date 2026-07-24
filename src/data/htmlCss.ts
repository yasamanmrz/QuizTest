import type {QuizQuestion}  from "../types/quiz"

export const htmlCssQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlink Text Management Language",
      "Home Tool Markup Language",
    ],
    correctAnswer: 0,
    explanation:
      "HTML stands for Hyper Text Markup Language and is used to structure web pages.",
  },
  {
    id: 2,
    question: "Which HTML element is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    correctAnswer: 1,
    explanation:
      "The <a> (anchor) element is used to create hyperlinks between web pages.",
  },
  {
    id: 3,
    question: "Which CSS property changes the text color?",
    options: ["font-color", "text-color", "color", "foreground"],
    correctAnswer: 2,
    explanation:
      "The color property is used to change the color of text in CSS.",
  },
  {
    id: 4,
    question: "Which HTML element is used to display an image?",
    options: ["<image>", "<img>", "<picture>", "<src>"],
    correctAnswer: 1,
    explanation:
      "The <img> element is used to display images on a web page.",
  },
  {
    id: 5,
    question: "Which CSS property controls the space outside an element?",
    options: ["padding", "border", "margin", "spacing"],
    correctAnswer: 2,
    explanation:
      "Margin controls the space outside an element, while padding controls the space inside it.",
  },
  {
    id: 6,
    question: "Which CSS property controls the space inside an element?",
    options: ["margin", "padding", "gap", "border-spacing"],
    correctAnswer: 1,
    explanation:
      "Padding creates space between the content and the border of an element.",
  },
  {
    id: 7,
    question: "Which HTML element is used for the largest heading?",
    options: ["<heading>", "<h6>", "<h1>", "<head>"],
    correctAnswer: 2,
    explanation:
      "<h1> represents the most important and largest heading on a page.",
  },
  {
    id: 8,
    question: "Which CSS property is used to make text bold?",
    options: [
      "font-style",
      "font-weight",
      "text-bold",
      "font-size",
    ],
    correctAnswer: 1,
    explanation:
      "The font-weight property controls the thickness of text. A value like bold makes text bold.",
  },
  {
    id: 9,
    question: "Which CSS property is used to change the background color?",
    options: [
      "background-color",
      "bg-color",
      "color",
      "background-style",
    ],
    correctAnswer: 0,
    explanation:
      "The background-color property changes the background color of an element.",
  },
  {
    id: 10,
    question: "Which HTML element is commonly used to create an unordered list?",
    options: ["<ol>", "<li>", "<ul>", "<list>"],
    correctAnswer: 2,
    explanation:
      "The <ul> element creates an unordered (bulleted) list, while <li> defines each list item.",
  },
  {
    id: 11,
    question: "Which CSS layout model is designed for one-dimensional layouts?",
    options: [
      "Grid",
      "Flexbox",
      "Float",
      "Position",
    ],
    correctAnswer: 1,
    explanation:
      "Flexbox is ideal for arranging items in a single row or column.",
  },
  {
    id: 12,
    question: "Which CSS layout model is best for two-dimensional layouts?",
    options: [
      "Flexbox",
      "Grid",
      "Float",
      "Inline-block",
    ],
    correctAnswer: 1,
    explanation:
      "CSS Grid is designed for creating layouts with rows and columns.",
  },
  {
    id: 13,
    question: "Which CSS property changes the size of text?",
    options: [
      "font-size",
      "text-size",
      "font-style",
      "size",
    ],
    correctAnswer: 0,
    explanation:
      "The font-size property controls the size of text.",
  },
  {
    id: 14,
    question: "Which HTML element is used to create a form?",
    options: [
      "<input>",
      "<form>",
      "<label>",
      "<fieldset>",
    ],
    correctAnswer: 1,
    explanation:
      "The <form> element groups form controls for collecting user input.",
  },
  {
    id: 15,
    question: "Which HTML input type hides typed characters?",
    options: [
      "text",
      "email",
      "password",
      "hidden",
    ],
    correctAnswer: 2,
    explanation:
      "The password input type masks characters entered by the user.",
  },
  {
    id: 16,
    question: "Which CSS property is used to round the corners of an element?",
    options: [
      "corner-radius",
      "border-radius",
      "radius",
      "round",
    ],
    correctAnswer: 1,
    explanation:
      "border-radius creates rounded corners on an element.",
  },
  {
    id: 17,
    question: "Which CSS property controls the stacking order of positioned elements?",
    options: [
      "position",
      "z-index",
      "layer",
      "stack",
    ],
    correctAnswer: 1,
    explanation:
      "The z-index property determines which positioned element appears on top.",
  },
  {
    id: 18,
    question: "Which HTML element is used to define semantic navigation links?",
    options: [
      "<menu>",
      "<nav>",
      "<section>",
      "<header>",
    ],
    correctAnswer: 1,
    explanation:
      "The <nav> element is a semantic HTML element used for navigation links.",
  },
  {
    id: 19,
    question: "Which CSS property changes the transparency of an element?",
    options: [
      "visibility",
      "opacity",
      "display",
      "alpha",
    ],
    correctAnswer: 1,
    explanation:
      "The opacity property controls how transparent an element appears, from 0 to 1.",
  },
  {
    id: 20,
    question: "What is the main purpose of semantic HTML?",
    options: [
      "To make websites load faster only",
      "To give meaningful structure to web content",
      "To replace CSS",
      "To write JavaScript code",
    ],
    correctAnswer: 1,
    explanation:
      "Semantic HTML uses meaningful elements like <header>, <main>, <article>, and <footer>, improving accessibility and SEO.",
  },
];