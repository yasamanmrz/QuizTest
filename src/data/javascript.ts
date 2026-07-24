import type { QuizQuestion } from "../types/quiz"

export const javascriptQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What is JavaScript primarily used for?",
    options: [
      "Styling web pages",
      "Building interactive web applications",
      "Managing databases",
      "Creating operating systems",
    ],
    correctAnswer: 1,
    explanation:
      "JavaScript is mainly used to add interactivity and dynamic behavior to web pages.",
  },
  {
    id: 2,
    question: "Which keyword declares a block-scoped variable?",
    options: [
      "var",
      "let",
      "const",
      "Both let and const",
    ],
    correctAnswer: 3,
    explanation:
      "Both let and const are block-scoped. The difference is that const cannot be reassigned.",
  },
  {
    id: 3,
    question: "Which keyword declares a constant variable?",
    options: [
      "let",
      "const",
      "var",
      "static",
    ],
    correctAnswer: 1,
    explanation:
      "The const keyword creates a variable whose reference cannot be reassigned.",
  },
  {
    id: 4,
    question: "Which method is used to add an item to the end of an array?",
    options: [
      "pop()",
      "push()",
      "shift()",
      "unshift()",
    ],
    correctAnswer: 1,
    explanation:
      "push() adds one or more elements to the end of an array.",
  },
  {
    id: 5,
    question: "Which method removes the last item from an array?",
    options: [
      "shift()",
      "pop()",
      "splice()",
      "slice()",
    ],
    correctAnswer: 1,
    explanation:
      "pop() removes and returns the last element of an array.",
  },
  {
    id: 6,
    question: "Which operator checks both value and type?",
    options: [
      "==",
      "=",
      "===",
      "!=",
    ],
    correctAnswer: 2,
    explanation:
      "The === operator performs a strict comparison, checking both value and data type.",
  },
  {
    id: 7,
    question: "Which function converts a JSON string into a JavaScript object?",
    options: [
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.convert()",
      "JSON.object()",
    ],
    correctAnswer: 1,
    explanation:
      "JSON.parse() converts a JSON string into a JavaScript object.",
  },
  {
    id: 8,
    question: "Which method converts a JavaScript object into a JSON string?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.encode()",
      "JSON.object()",
    ],
    correctAnswer: 1,
    explanation:
      "JSON.stringify() converts a JavaScript object into a JSON string.",
  },
  {
    id: 9,
    question: "Which loop is commonly used to iterate over arrays?",
    options: [
      "while",
      "for",
      "for...of",
      "Both for and for...of",
    ],
    correctAnswer: 3,
    explanation:
      "Both for and for...of are commonly used to iterate through array elements.",
  },
  {
    id: 10,
    question: "Which array method creates a new array by applying a function to each element?",
    options: [
      "filter()",
      "find()",
      "map()",
      "reduce()",
    ],
    correctAnswer: 2,
    explanation:
      "map() returns a new array where each element is the result of the callback function.",
  },
  {
    id: 11,
    question: "Which array method returns a new array containing only elements that pass a condition?",
    options: [
      "map()",
      "find()",
      "filter()",
      "reduce()",
    ],
    correctAnswer: 2,
    explanation:
      "The filter() method creates a new array containing only the elements that satisfy the provided condition.",
  },
  {
    id: 12,
    question: "Which array method returns the first element that matches a condition?",
    options: [
      "filter()",
      "find()",
      "map()",
      "reduce()",
    ],
    correctAnswer: 1,
    explanation:
      "The find() method returns the first element that satisfies the condition or undefined if none is found.",
  },
  {
    id: 13,
    question: "Which array method is commonly used to calculate a single value from an array?",
    options: [
      "reduce()",
      "map()",
      "filter()",
      "forEach()",
    ],
    correctAnswer: 0,
    explanation:
      "The reduce() method combines all array elements into a single value such as a sum, average, or object.",
  },
  {
    id: 14,
    question: "Which keyword is used to define an asynchronous function?",
    options: [
      "await",
      "promise",
      "async",
      "defer",
    ],
    correctAnswer: 2,
    explanation:
      "The async keyword declares an asynchronous function that automatically returns a Promise.",
  },
  {
    id: 15,
    question: "What does the await keyword do?",
    options: [
      "Stops JavaScript completely",
      "Waits for a Promise to resolve",
      "Creates a Promise",
      "Loops through an array",
    ],
    correctAnswer: 1,
    explanation:
      "The await keyword pauses execution inside an async function until the Promise is resolved.",
  },
  {
    id: 16,
    question: "What is a Promise in JavaScript?",
    options: [
      "A type of loop",
      "An object representing the eventual completion or failure of an asynchronous operation",
      "A CSS feature",
      "A JavaScript framework",
    ],
    correctAnswer: 1,
    explanation:
      "A Promise represents the future result of an asynchronous operation and can be pending, fulfilled, or rejected.",
  },
  {
    id: 17,
    question: "What is hoisting in JavaScript?",
    options: [
      "Moving variables and function declarations to the top of their scope during compilation",
      "Sorting arrays automatically",
      "Converting objects into arrays",
      "Creating asynchronous code",
    ],
    correctAnswer: 0,
    explanation:
      "Hoisting is JavaScript's behavior of processing variable and function declarations before executing code.",
  },
  {
    id: 18,
    question: "What is a closure in JavaScript?",
    options: [
      "A function that remembers variables from its outer scope",
      "A way to close the browser",
      "A type of loop",
      "A CSS property",
    ],
    correctAnswer: 0,
    explanation:
      "A closure allows a function to access variables from its outer lexical scope even after the outer function has finished executing.",
  },
  {
    id: 19,
    question: "Which operator is used to spread elements of an array or object?",
    options: [
      "...",
      "&&",
      "??",
      "::",
    ],
    correctAnswer: 0,
    explanation:
      "The spread operator (...) expands the elements of an array or the properties of an object.",
  },
  {
    id: 20,
    question: "What is object destructuring used for?",
    options: [
      "Deleting object properties",
      "Extracting values from objects into variables",
      "Creating arrays",
      "Converting objects to JSON",
    ],
    correctAnswer: 1,
    explanation:
      "Object destructuring allows you to extract properties from an object into individual variables using a concise syntax.",
  },
];