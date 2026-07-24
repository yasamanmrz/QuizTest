import type {QuizQuestion}  from "../types/quiz"

export const nextQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What is Next.js?",
    options: [
      "A CSS framework",
      "A React framework",
      "A database",
      "A JavaScript runtime",
    ],
    correctAnswer: 1,
    explanation:
      "Next.js is a React framework that provides features like routing, server-side rendering, static site generation, and API routes.",
  },
  {
    id: 2,
    question: "Which company created Next.js?",
    options: [
      "Google",
      "Meta",
      "Vercel",
      "Microsoft",
    ],
    correctAnswer: 2,
    explanation:
      "Next.js is developed and maintained by Vercel.",
  },
  {
    id: 3,
    question: "Which folder is commonly used for routing in the App Router?",
    options: [
      "src",
      "pages",
      "app",
      "public",
    ],
    correctAnswer: 2,
    explanation:
      "In modern versions of Next.js (13+), the app folder is used for the App Router.",
  },
  {
    id: 4,
    question: "Which folder stores static assets such as images and icons?",
    options: [
      "assets",
      "static",
      "public",
      "images",
    ],
    correctAnswer: 2,
    explanation:
      "Files inside the public folder are served directly by Next.js.",
  },
  {
    id: 5,
    question: "Which component is recommended for navigation between pages?",
    options: [
      "<a>",
      "<Link>",
      "<Navigate>",
      "<Route>",
    ],
    correctAnswer: 1,
    explanation:
      "The Link component enables client-side navigation without reloading the page.",
  },
  {
    id: 6,
    question: "Which component is used to optimize images in Next.js?",
    options: [
      "<img>",
      "<Image>",
      "<Picture>",
      "<Photo>",
    ],
    correctAnswer: 1,
    explanation:
      "The Image component automatically optimizes images for better performance.",
  },
  {
    id: 7,
    question: "What does SSR stand for?",
    options: [
      "Static Site Rendering",
      "Server Side Rendering",
      "Secure Server Response",
      "System Side Rendering",
    ],
    correctAnswer: 1,
    explanation:
      "Server Side Rendering renders pages on the server before sending them to the browser.",
  },
  {
    id: 8,
    question: "What does SSG stand for?",
    options: [
      "Server Side Generation",
      "Static Site Generation",
      "Simple Site Generator",
      "System Static Generation",
    ],
    correctAnswer: 1,
    explanation:
      "Static Site Generation creates HTML pages at build time for improved speed and SEO.",
  },
  {
    id: 9,
    question: "Which command starts the development server in Next.js?",
    options: [
      "next serve",
      "npm run dev",
      "npm start",
      "next start dev",
    ],
    correctAnswer: 1,
    explanation:
      "After creating a Next.js project, npm run dev starts the local development server.",
  },
  {
    id: 10,
    question: "Which file is commonly used to define global styles in the App Router?",
    options: [
      "style.css",
      "globals.css",
      "index.css",
      "app.css",
    ],
    correctAnswer: 1,
    explanation:
      "Global CSS is typically imported from the globals.css file inside the app folder.",
  },
{
  id: 11,
  question: 'What is the purpose of the "use client" directive?',
  options: [
    "To make a component run on the client side",
    "To create API routes",
    "To optimize images",
    "To enable server-side rendering",
  ],
  correctAnswer: 0,
  explanation:
    '"use client" marks a component as a Client Component, allowing it to use hooks like useState and useEffect.',
},
{
  id: 12,
  question: "By default, components inside the app directory are...",
  options: [
    "Client Components",
    "Server Components",
    "Static Components",
    "API Components",
  ],
  correctAnswer: 1,
  explanation:
    "Components inside the app directory are Server Components by default in Next.js.",
},
{
  id: 13,
  question: "What is a Dynamic Route in Next.js?",
  options: [
    "A route created with JavaScript",
    "A route with dynamic parameters like [id]",
    "A route that changes CSS",
    "A route that only works on mobile",
  ],
  correctAnswer: 1,
  explanation:
    "Dynamic routes use square brackets (e.g. [id]) to match different URL parameters.",
},
{
  id: 14,
  question: "Which file is used to display a loading UI in the App Router?",
  options: [
    "loading.tsx",
    "loader.tsx",
    "spinner.tsx",
    "pending.tsx",
  ],
  correctAnswer: 0,
  explanation:
    "loading.tsx automatically displays a loading state while the route is loading.",
},
{
  id: 15,
  question: "Which file is used to handle route-level errors?",
  options: [
    "error.tsx",
    "errors.tsx",
    "404.tsx",
    "catch.tsx",
  ],
  correctAnswer: 0,
  explanation:
    "The error.tsx file is used to display a fallback UI when an error occurs within a route segment.",
},
{
  id: 16,
  question: "What is Metadata API mainly used for?",
  options: [
    "Managing API requests",
    "Setting SEO information such as title and description",
    "Creating animations",
    "Managing state",
  ],
  correctAnswer: 1,
  explanation:
    "The Metadata API allows you to define page titles, descriptions, Open Graph tags, and other SEO-related metadata.",
},
{
  id: 17,
  question: "Where are API Routes commonly created in the App Router?",
  options: [
    "app/api",
    "public/api",
    "src/routes",
    "pages/data",
  ],
  correctAnswer: 0,
  explanation:
    "API Routes are created inside the app/api directory using route.ts files.",
},
{
  id: 18,
  question: "What is Middleware in Next.js used for?",
  options: [
    "Creating React components",
    "Running code before a request is completed",
    "Managing CSS",
    "Optimizing images",
  ],
  correctAnswer: 1,
  explanation:
    "Middleware runs before a request reaches a route, making it useful for authentication, redirects, and request rewriting.",
},
{
  id: 19,
  question: "Why is Next.js considered SEO-friendly?",
  options: [
    "Because it only uses CSS",
    "Because it supports Server-Side Rendering and Static Site Generation",
    "Because it doesn't use JavaScript",
    "Because it automatically writes meta tags for every page",
  ],
  correctAnswer: 1,
  explanation:
    "SSR and SSG allow search engines to receive fully rendered HTML, improving SEO performance.",
},
{
  id: 20,
  question: "Which feature is one of the biggest advantages of Next.js over plain React?",
  options: [
    "Built-in routing and rendering strategies",
    "Automatic Redux setup",
    "Built-in database",
    "Built-in Tailwind CSS",
  ],
  correctAnswer: 0,
  explanation:
    "Next.js provides built-in routing, Server Components, SSR, SSG, API Routes, image optimization, and many other features that are not included in plain React.",
},
];