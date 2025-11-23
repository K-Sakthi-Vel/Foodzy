# Feastozy - Food Delivery App

Welcome to Feastozy, a modern and feature-rich food delivery application.

## Project Structure

The project is organized into two main parts:

-   `foodzy/`: This directory contains the frontend of the application, built with React.
-   `foodzy-server/`: This directory holds the backend services, powered by Node.js and Express.

---

## Frontend

The frontend is a single-page application (SPA) built using the following technologies:

-   **React**: A JavaScript library for building user interfaces.
-   **Vite**: A fast build tool that provides a quicker and leaner development experience.
-   **TypeScript**: For static typing, improving code quality and maintainability.
-   **Redux Toolkit**: For state management.
-   **Tailwind CSS**: For styling the application.

### Key Directories in `foodzy/`

-   `src/components/`: Reusable UI components.
-   `src/pages/`: Page components that represent different routes.
-   `src/store/`: Redux store setup, including slices and actions.
-   `src/api/`: Client-side API handling.
-   `public/`: Static assets.

---

## Backend

The backend is a RESTful API built with Node.js and Express. It handles business logic, data storage, and authentication.

-   **Node.js**: A JavaScript runtime for building server-side applications.
-   **Express**: A web application framework for Node.js.
-   **Prisma**: A next-generation ORM for Node.js and TypeScript.
-   **TypeScript**: To ensure type safety and robustness of the API.

### Key Directories in `foodzy-server/`

-   `prisma/`: Contains the database schema (`schema.prisma`) and migrations.
-   `routes/`: API route definitions.
-   `server.ts`: The main entry point for the backend server.
