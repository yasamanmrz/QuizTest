import type {QuizQuestion}  from "../types/quiz"

export const reactQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What is React?",
    options: [
      "A CSS framework",
      "A JavaScript library for building user interfaces",
      "A database",
      "A programming language",
    ],
    correctAnswer: 1,
    explanation:
      "React is a JavaScript library developed by Meta for building fast and reusable user interfaces using components.",
  },
  {
    id: 2,
    question: "What is JSX?",
    options: [
      "A CSS preprocessor",
      "A JavaScript extension that allows writing HTML inside JavaScript",
      "A database query language",
      "A package manager",
    ],
    correctAnswer: 1,
    explanation:
      "JSX stands for JavaScript XML. It allows developers to write HTML-like syntax inside JavaScript code.",
  },
  {
    id: 3,
    question: "Which hook is used to manage state in a functional component?",
    options: [
      "useEffect",
      "useState",
      "useRef",
      "useMemo",
    ],
    correctAnswer: 1,
    explanation:
      "The useState hook allows functional components to store and update state.",
  },
  {
    id: 4,
    question: "Which hook is used for side effects?",
    options: [
      "useEffect",
      "useState",
      "useContext",
      "useReducer",
    ],
    correctAnswer: 0,
    explanation:
      "useEffect is used for side effects such as fetching data, timers, or interacting with the DOM.",
  },
  {
    id: 5,
    question: "Props are used to...",
    options: [
      "Store local state",
      "Pass data from parent to child component",
      "Create routes",
      "Handle CSS",
    ],
    correctAnswer: 1,
    explanation:
      "Props allow data to be passed from a parent component to its child components.",
  },
  {
    id: 6,
    question: "What is a React component?",
    options: [
      "A CSS file",
      "A reusable piece of UI",
      "A database table",
      "A JavaScript package",
    ],
    correctAnswer: 1,
    explanation:
      "Components are reusable building blocks that define parts of the user interface.",
  },
  {
    id: 7,
    question: "Which attribute is used instead of 'class' in JSX?",
    options: [
      "cssClass",
      "class",
      "className",
      "classname",
    ],
    correctAnswer: 2,
    explanation:
      "Because 'class' is a reserved keyword in JavaScript, React uses className instead.",
  },
  {
    id: 8,
    question: "Why should each item in a list have a unique key?",
    options: [
      "To improve styling",
      "To improve React's rendering performance",
      "To make JavaScript faster",
      "To reduce file size",
    ],
    correctAnswer: 1,
    explanation:
      "Keys help React identify which items have changed, been added, or removed during rendering.",
  },
  {
    id: 9,
    question: "What does React.Fragment do?",
    options: [
      "Creates a new page",
      "Groups multiple elements without adding extra DOM nodes",
      "Creates a CSS container",
      "Stores state",
    ],
    correctAnswer: 1,
    explanation:
      "React.Fragment allows multiple elements to be returned without creating an unnecessary wrapper element.",
  },
  {
    id: 10,
    question: "How do you update state created with useState?",
    options: [
      "Modify the variable directly",
      "Use the setter function returned by useState",
      "Reload the page",
      "Use useEffect",
    ],
    correctAnswer: 1,
    explanation:
      "State should always be updated using the setter function returned by useState to trigger a re-render.",
  },
    {
    id: 11,
    question: "Which hook is used to access a DOM element directly?",
    options: [
      "useMemo",
      "useRef",
      "useState",
      "useEffect",
    ],
    correctAnswer: 1,
    explanation:
      "The useRef hook creates a mutable reference that can be attached to a DOM element or used to store mutable values.",
  },
  {
    id: 12,
    question: "What is the purpose of useMemo?",
    options: [
      "To manage state",
      "To memoize expensive calculations",
      "To fetch data",
      "To create routes",
    ],
    correctAnswer: 1,
    explanation:
      "useMemo caches the result of an expensive calculation and only recomputes it when its dependencies change.",
  },
  {
    id: 13,
    question: "What is the purpose of useCallback?",
    options: [
      "To cache a function",
      "To update state",
      "To create a component",
      "To access the DOM",
    ],
    correctAnswer: 0,
    explanation:
      "useCallback memoizes a function reference, helping prevent unnecessary re-renders when passing callbacks to child components.",
  },
  {
    id: 14,
    question: "What is the Context API mainly used for?",
    options: [
      "Creating animations",
      "Managing global state without prop drilling",
      "Styling components",
      "Fetching data",
    ],
    correctAnswer: 1,
    explanation:
      "The Context API allows data to be shared across components without passing props through every level of the component tree.",
  },
  {
    id: 15,
    question: "Which library is commonly used for routing in React?",
    options: [
      "Redux",
      "Axios",
      "React Router",
      "Lodash",
    ],
    correctAnswer: 2,
    explanation:
      "React Router is the standard library used for navigation and routing in React applications.",
  },
  {
    id: 16,
    question: "What is a Controlled Component?",
    options: [
      "A component controlled by CSS",
      "A form element whose value is controlled by React state",
      "A component with multiple children",
      "A component that uses Context API",
    ],
    correctAnswer: 1,
    explanation:
      "In a controlled component, form inputs are controlled by React state using the value and onChange props.",
  },
  {
    id: 17,
    question: "What is a Custom Hook?",
    options: [
      "A hook provided by the browser",
      "A reusable function that uses React hooks",
      "A React component",
      "A CSS utility",
    ],
    correctAnswer: 1,
    explanation:
      "A custom hook is a JavaScript function that starts with 'use' and allows you to reuse stateful logic between components.",
  },
  {
    id: 18,
    question: "What is the Virtual DOM?",
    options: [
      "A copy of the real DOM used to optimize updates",
      "A browser extension",
      "A database",
      "A CSS framework",
    ],
    correctAnswer: 0,
    explanation:
      "The Virtual DOM is a lightweight copy of the real DOM. React compares changes in the Virtual DOM before updating the real DOM efficiently.",
  },
  {
    id: 19,
    question: "What is the purpose of React.StrictMode?",
    options: [
      "It makes the application faster in production",
      "It helps detect potential problems during development",
      "It automatically fixes bugs",
      "It replaces TypeScript",
    ],
    correctAnswer: 1,
    explanation:
      "React.StrictMode is a development tool that highlights potential problems and unsafe lifecycle usage without affecting production.",
  },
  {
    id: 20,
    question: "Which technique helps improve React application performance?",
    options: [
      "Using useMemo and React.memo when appropriate",
      "Reloading the page after every state update",
      "Writing all code in one component",
      "Avoiding functional components",
    ],
    correctAnswer: 0,
    explanation:
      "Performance can be improved by reducing unnecessary renders with tools such as React.memo, useMemo, and useCallback where appropriate.",
  },
];