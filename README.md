# assessment-tracking-backend

# Express.js TypeScript Application

This is a TypeScript-based Express.js application. This README provides instructions on how to set up, build, and run the application.

## Prerequisites

-   [Node.js](https://nodejs.org/) (version 14 or higher)
-   [npm](https://www.npmjs.com/) (Node Package Manager)

## Getting Started

1. **Clone the repository**

    ```bash
    git clone <repository-url>
    cd <repository-directory>

    ```

2. **Install dependencies**
   npm install

3. **Environment variables**
   create .env file
   .env file contents:
   JWT_SECRET='a$$e$$mentTracker'

4. **Running application on Local**
   npm install -g ts-node
   tsc
   node dist/index.js (if you wish to run using javascript)

    OR

    npm run dev (for running development server)

    OR

    npm run build
    npm start (production build)

5. **Project Structure**
   .
   ├── src/ # Source code in TypeScript
   │ ├── index.ts # Main entry point of the application
   │ ├── routes/ # Express routes
   │ ├── controllers/ # Route controllers
   │ ├── middleware/ # Middleware functions
   │ └── types/ # Types of Data
   │ └── utils/ # Utility functions
   ├── dist/ # Compiled JavaScript code (generated after running `npm run build` or `tsc`)
   ├── .env # Environment variables file
   ├── package.json # npm package configuration
   ├── tsconfig.json # TypeScript configuration
   └── README.md # Documentation
   └── vercel.json # Vercel config file
