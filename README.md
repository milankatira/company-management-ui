Here's an updated version of the README with a detailed UI flow for your application, including a professional explanation of the login, company management, and viewing functionality:

---

# Vite TypeScript Project

## Overview

Welcome to the Vite TypeScript Project! This guide provides comprehensive instructions for setting up, running, and navigating the project. It includes a detailed UI flow to help you understand the user experience from logging in to managing companies.

## Table of Contents

- [Vite TypeScript Project](#vite-typescript-project)
  - [Overview](#overview)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)
  - [Project Structure](#project-structure)
  - [Running the Project](#running-the-project)
  - [UI Flow](#ui-flow)
    - [1. Login Page](#1-login-page)
    - [2. Companies List Page](#2-companies-list-page)
    - [3. Add Company Page](#3-add-company-page)
    - [4. Company Details Page](#4-company-details-page)
  - [Development Workflow](#development-workflow)
  - [Building for Production](#building-for-production)
  - [Deployment](#deployment)
  - [Contributing](#contributing)
  - [License](#license)

## Prerequisites

Before you start, ensure you have the following installed:

-   [Node.js](https://nodejs.org/) (>=14.x)
-   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) (package managers)

## Getting Started

1. **Clone the Repository**

    ```bash
    git clone https://github.com/milankatira/company-management-ui
    cd company-management-ui
    ```

2. **Install Dependencies**

    You can use either npm or yarn to install the project dependencies.

    Using npm:

    ```bash
    npm install
    ```

    Using yarn:

    ```bash
    yarn install
    ```

3. **Configure Environment Variables**

    Create a `.env` file in the root directory of the project and add your environment-specific variables.

    ```env(right not .env is not yet removed from project but it should be in .gitignore)
    VITE_API_KEY=https://api.example.com
    ```

## Project Structure

-   `src/` - The source code of the project.
    -   `components/` - Reusable React components.
    -   `pages/` - Page components (e.g., `HomePage.tsx`, `LoginPage.tsx`).
    -   `api/` - API service functions.
    -   `hooks/` - Custom React hooks.
    -   `styles/` - Global and component-specific styles.
    -   `App.tsx` - Main application component.
    -   `main.tsx` - Entry point of the application.
-   `public/` - Publicly accessible assets.
-   `vite.config.ts` - Vite configuration file.
-   `tsconfig.json` - TypeScript configuration file.
-   `package.json` - Project metadata and dependencies.
-   `.env.example` - Example environment variables file.

## Running the Project

To start the development server and run the project locally:

```bash
npm run dev
```

or

```bash
yarn dev
```

The development server will start and you can access the project in your browser at `http://localhost:3000`.

## UI Flow

### 1. Login Page

-   **URL:** `/login`
-   **Functionality:**
    -   Users are presented with a login form.
    -   Enter the username as `admin` and the password as `admin` to authenticate.
    -   Upon successful login, users are redirected to the Companies List page.

### 2. Companies List Page

-   **URL:** `/companies`
-   **Functionality:**
    -   Displays a list of companies in a card-based layout.
    -   Each card provides a brief overview of the company, including name and description.
    -   **Add Company:** Click on the "Add Company" button to navigate to the Add Company page.
    -   **Read More:** Click on the "Read More" link to view detailed information about a specific company. This link directs users to the Company Details page.

### 3. Add Company Page

-   **URL:** `/add-company`
-   **Functionality:**
    -   Provides a form to add a new company.
    -   Users can input the company details and submit the form.
    -   Upon successful addition, users receive a toast notification confirming the addition and are redirected back to the Companies List page.

### 4. Company Details Page

-   **URL:** `/companies/:companyId`
-   **Functionality:**
    -   Displays detailed information about a specific company.
    -   Includes comprehensive details and optionally additional functionality such as editing or deleting the company.

## Development Workflow

-   **To Start Development Server:**

    ```bash
    npm run dev
    ```

-   **To Build for Production:**

    ```bash
    npm run build
    ```

-   **To Run Linter:**

    ```bash
    npm run lint
    ```

Ensure you write and update tests as you develop new features.

## Building for Production

To build the project for production, run:

```bash
npm run build
```

This will create a `dist/` directory with the optimized production build.

## Deployment

For deployment, you can use any static site hosting service such as Vercel, Netlify, or GitHub Pages. Follow the specific instructions of your chosen hosting provider for deploying the contents of the `dist/` directory.

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push to your fork.
4. Create a Pull Request.

Please ensure your code adheres to the project's coding standards and includes tests where applicable.

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to adjust specific details to fit the actual functionality and structure of your project.
