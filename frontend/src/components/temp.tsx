export const result = {
    "jobDescription": "Frontend Developer with practical experience in developing high-performance Single Page Applications (SPA) using React.js and TypeScript. Proficient in implementing dynamic routing, authentication, global state management with Redux Toolkit, and REST API integration using Axios.\n\nExperienced in building AI-integrated applications using Groq LLM API, Supabase, and Hugging Face models. Strong understanding of responsive web design, reusable component architecture, and modern UI development using Tailwind CSS and shadcn/ui.\n\nDemonstrated ability to deliver end-to-end frontend solutions with clean code structure and optimized performance.",
    "resume": "\n\nMUNNA KUMAR\nNajafgarh, New delhi | +91 97171 14992 \nmkcodes.in@gmail.com | Portfolio | Github \nSUMMARY\nFrontend Developer with hands-on experience in building responsive single-page applications using React, TypeScript,\nand modern frontend tools. Skilled in API integration, authentication, state management with Redux Toolkit, and UI\ndevelopment using Tailwind CSS.\nEDUCATION\nBachelor of computer applications (BCA)\nIndira gandhi national open university (IGNOU)\nPROJECTS\nSKILLS\nLanguages: HTML5, CSS3, JavaScript (ES6+), TypeScript\nFrameworks & Libraries: React.js, Vite, Redux Toolkit (RTK), Context API, Axios\nStyling: Tailwind CSS, Bootstrap, shadcn/ui, Responsive Web Design\nTools: Git, GitHub, VS Code, NPM, Chrome DevTools\nSNAPCART E-Commerce Web Application\nChat2PDF : AI Powered Chat Application \nGenZ Al Crafter: Al Powered Website Generator (Hackathon Project)\nLive\n(2024-2027)\nCreated a real-world Single Page Application (SPA) with React, TypeScript, and Vite. Implemented product listing\nand product details pages with dynamic routing using React Router DOM. Integrated product data using a Dummy\nREST API and rendered dynamic content on the front-end. \nAdded functionality to the Cart, Wishlist, and Order management. Managed global application state using Redux\nToolkit (RTK). Implemented persistent cart wishlist and orders using Local Storage.\nDesigned a clean, responsive, and modern UI using Tailwind CSS. Built reusable Ul components using shadcn/ui\ncomponent library. Responsive design for all screen sizes.\nDeveloped an Al-powered chat application using React and Vite. Implemented user authentication and session\nhandling using Supabase Auth. Integrated Supabase database and APIs_that handle users, chats, and messages.\nIntegrated Groq LLM API to generate Al-based conversational responses.\nImplemented dynamic routing and protected routes using React Router DOM. Designed a responsive and modern\nUl using Tailwind CSS.\nCreated a generative Al web application that converts user prompts into HTML, CSS, and JavaScript code.\nIntegrated code generation with Al from Hugging Face using the DeepSeek model. Rendered generated websites\ndirectly in the browser with live preview. Smooth Ul animations implemented using GSAP and Framer Motion.\nBuilt responsive and modern frontend using React and Vite. Managed API communication with Axios.\nRepo\nLive",
    "selfDescription": "I’m a Frontend Developer who builds modern, responsive, and scalable web applications using React, TypeScript, and Vite. I specialize in API integration, authentication, state management with Redux Toolkit, and crafting clean UI with Tailwind CSS.\n\nI have built AI-powered applications, e-commerce platforms, and dynamic web generators, focusing on performance, clean architecture, and great user experience.",
    "matchScore": 95,
    "technicalQuestions": [
        {
            "question": "How do you ensure type safety when fetching data from a REST API using TypeScript and Axios?",
            "intention": "To evaluate the candidate's proficiency in TypeScript and its practical application in data fetching.",
            "answer": "I define interfaces or types for the API response structure and use them with Axios generics, such as axios.get<Product[]>(url), to ensure that the data returned is correctly typed throughout the application."
        },
        {
            "question": "Can you explain how you managed global state and persistence in your SnapCart project using Redux Toolkit?",
            "intention": "To assess knowledge of state management and local storage integration.",
            "answer": "I used Redux Toolkit's createSlice to manage cart state and implemented a middleware or a manual subscription to the store to sync the state with Local Storage whenever the cart state updated, ensuring data persists across reloads."
        },
        {
            "question": "How did you handle the integration of the Groq LLM API in your Chat2PDF application?",
            "intention": "To understand the candidate's experience with AI API integration and asynchronous operations.",
            "answer": "I used Axios to send user prompts to the Groq API endpoint, handled the asynchronous response using async/await, and managed the loading and error states in the UI to provide a seamless conversational experience."
        }
    ],
    "behaviourQuestions": [
        {
            "question": "Describe a technical challenge you faced during the GenZ AI Crafter hackathon and how you resolved it.",
            "intention": "To evaluate problem-solving skills under pressure.",
            "answer": "The candidate should describe a specific issue, such as rendering live code previews or managing AI prompt latency, and explain the logical steps taken to fix it."
        },
        {
            "question": "How do you approach building reusable UI components when using Tailwind CSS and shadcn/ui?",
            "intention": "To assess the candidate's understanding of component architecture and design systems.",
            "answer": "I focus on atomicity, creating small, functional components that accept props for customization while leveraging shadcn/ui's accessible base and Tailwind's utility classes for consistent styling."
        }
    ],
    "skillGaps": [
        {
            "skill": "Unit and Integration Testing (Jest/Vitest)",
            "serverity": "medium"
        },
        {
            "skill": "Advanced Performance Optimization (Code Splitting/Memoization)",
            "serverity": "low"
        },
        {
            "skill": "CI/CD for Frontend Deployment",
            "serverity": "low"
        }
    ],
    "preparationPlan": [
        {
            "day": 1,
            "focus": "Testing Frameworks",
            "tasks": "Learn the basics of Vitest and React Testing Library to write unit tests for reusable components.",
            "_id": {
                "$oid": "69a80834340f5d1e3adc17d0"
            }
        },
        {
            "day": 2,
            "focus": "Performance Optimization",
            "tasks": "Study React.memo, useMemo, and useCallback hooks, and practice implementing lazy loading with React Suspense.",
            "_id": {
                "$oid": "69a80834340f5d1e3adc17d1"
            }
        },
        {
            "day": 3,
            "focus": "System Design & Security",
            "tasks": "Review common frontend security practices like XSS prevention and study architectural patterns for scalable SPAs.",
            "_id": {
                "$oid": "69a80834340f5d1e3adc17d2"
            }
        }
    ],
    "user": {
        "$oid": "69a3fbd07272af5113063f0d"
    },
    "createdAt": {
        "$date": "2026-03-04T10:23:48.994Z"
    },
    "updatedAt": {
        "$date": "2026-03-04T10:23:48.994Z"
    },
    "__v": 0,
    "title": "Frontend Engineer"
}