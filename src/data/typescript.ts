import type {QuizQuestion} from "../types/quiz"

export const typescriptQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What is TypeScript?",
    options: [
      "A JavaScript library",
      "A superset of JavaScript",
      "A CSS framework",
      "A database",
    ],
    correctAnswer: 1,
    explanation:
      "TypeScript is a superset of JavaScript that adds static typing, making code easier to maintain and helping catch errors during development.",
  },
  {
    id: 2,
    question: "Which keyword is used to define an interface?",
    options: ["class", "type", "interface", "implements"],
    correctAnswer: 2,
    explanation:
      "The 'interface' keyword defines the shape of an object, including its properties and methods.",
  },
  {
    id: 3,
    question: "Which file extension is used for TypeScript files?",
    options: [".js", ".jsx", ".ts", ".json"],
    correctAnswer: 2,
    explanation:
      "Standard TypeScript files use the .ts extension. React TypeScript components use .tsx.",
  },
  {
    id: 4,
    question: "Which command compiles TypeScript into JavaScript?",
    options: ["npm start", "tsc", "node", "ts-node"],
    correctAnswer: 1,
    explanation:
      "The TypeScript compiler (tsc) converts TypeScript code into JavaScript.",
  },
  {
    id: 5,
    question: "Which type represents true or false values?",
    options: ["string", "boolean", "number", "object"],
    correctAnswer: 1,
    explanation:
      "The boolean type only accepts two values: true and false.",
  },
  {
    id: 6,
    question: "Which keyword declares a constant variable?",
    options: ["let", "const", "var", "static"],
    correctAnswer: 1,
    explanation:
      "The const keyword creates a variable whose reference cannot be reassigned.",
  },
  {
    id: 7,
    question: "Which type disables type checking?",
    options: ["unknown", "never", "any", "void"],
    correctAnswer: 2,
    explanation:
      "The any type disables TypeScript's type checking and should generally be avoided when possible.",
  },
  {
    id: 8,
    question: "Which type is considered safer than 'any'?",
    options: ["unknown", "never", "null", "object"],
    correctAnswer: 0,
    explanation:
      "The unknown type requires you to perform type checks before using the value, making it safer than any.",
  },
  {
    id: 9,
    question: "Which keyword creates a custom type alias?",
    options: ["type", "interface", "alias", "extends"],
    correctAnswer: 0,
    explanation:
      "The type keyword is used to create custom type aliases for primitive types, objects, unions, and more.",
  },
  {
    id: 10,
    question: "What does the 'readonly' modifier do?",
    options: [
      "Makes a property optional",
      "Prevents a property from being modified",
      "Deletes a property",
      "Makes a property private",
    ],
    correctAnswer: 1,
    explanation:
      "A readonly property can only be assigned once and cannot be modified afterward.",
  },
  {
    id: 11,
    question: "Which symbol is used for optional properties?",
    options: ["!", "*", "?", "&"],
    correctAnswer: 2,
    explanation:
      "The '?' symbol marks a property as optional, meaning it doesn't have to be provided when creating an object.",
  },
  {
    id: 12,
    question: "Which type represents a function that does not return a value?",
    options: ["never", "void", "null", "undefined"],
    correctAnswer: 1,
    explanation:
      "The void type indicates that a function does not return a value.",
  },
  {
    id: 13,
    question: "Which operator is used to create a union type?",
    options: ["&", "|", "||", "+"],
    correctAnswer: 1,
    explanation:
      "The '|' operator creates a union type, allowing a value to be one of several types.",
  },
  {
    id: 14,
    question: "Which operator is used to create an intersection type?",
    options: ["&", "|", "&&", "*"],
    correctAnswer: 0,
    explanation:
      "The '&' operator combines multiple types into one, requiring all properties from each type.",
  },
  {
    id: 15,
    question: "Which utility type makes all properties optional?",
    options: ["Readonly", "Required", "Partial", "Pick"],
    correctAnswer: 2,
    explanation:
      "Partial<T> creates a new type where every property from T becomes optional.",
  },
  {
    id: 16,
    question: "Which utility type makes all properties required?",
    options: ["Partial", "Readonly", "Required", "Record"],
    correctAnswer: 2,
    explanation:
      "Required<T> creates a new type where every optional property becomes required.",
  },
  {
    id: 17,
    question: "Which keyword is used when one interface extends another?",
    options: ["extends", "implements", "inherits", "super"],
    correctAnswer: 0,
    explanation:
      "The extends keyword allows one interface to inherit properties from another interface.",
  },
  {
    id: 18,
    question: "Which type represents values that never occur?",
    options: ["void", "never", "unknown", "any"],
    correctAnswer: 1,
    explanation:
      "The never type is used for functions that never finish normally, such as those that always throw an error or run infinitely.",
  },
  {
    id: 19,
    question: "What is the default access modifier for class members in TypeScript?",
    options: ["private", "protected", "public", "internal"],
    correctAnswer: 2,
    explanation:
      "Class members are public by default, meaning they can be accessed from outside the class.",
  },
  {
    id: 20,
    question: "What is the main benefit of using TypeScript?",
    options: [
      "Faster internet connection",
      "Static type checking",
      "Smaller HTML files",
      "Automatic CSS generation",
    ],
    correctAnswer: 1,
    explanation:
      "TypeScript performs static type checking before your code runs, helping you catch bugs early and improving code quality.",
  },
];