
# Afya PEBMED Challenge

![Vercel](http://therealsujitk-vercel-badge.vercel.app/?app=afya-pebmed-challenge) ![License](https://img.shields.io/badge/license-MIT-blue)

![og](https://github.com/johanguse/afya-pebmed-challenge/assets/6184866/6712eb4f-17c2-45ee-a1e1-170f5ce17b56)

This is the README for the Afya PEBMED Challenge project.

Develop the frontend of a checkout system where a user can subscribe annually or monthly, displaying success or error when submitting the form, and sending payment information for processing by the backend.

Follow the instructions below to set up and run the project on your local machine.

## 🤖 Tech stack

The Afya PEBMED Challenge project leverages a robust and modern tech stack to ensure high performance, ease of development, and scalability. Here's a breakdown of the core technologies and libraries used:

- **[Next.js](https://nextjs.org/)**: A powerful React framework that enables server-side rendering, static site generation, and optimized performance for web applications.
- **[React](https://reactjs.org/)**: A popular JavaScript library for building dynamic and responsive user interfaces.
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapidly building custom designs with an emphasis on responsiveness and maintainability.
- **[Prettier](https://prettier.io/)**: An opinionated code formatter that supports multiple languages and integrates with most editors.
- **[ESLint](https://eslint.org/)**: A powerful tool for identifying and fixing problems in JavaScript code, ensuring code quality and consistency.
- **[Husky](https://github.com/typicode/husky)**: A tool for managing Git hooks, used for automating code checks and tests before commits and pushes.
- **[Formik](https://formik.org/)**: A library for building forms in React, providing easy data handling and validation.
- **[Zod](https://github.com/colinhacks/zod)**: A TypeScript-first schema declaration and validation library, ensuring data integrity.
- **[Zustand](https://github.com/pmndrs/zustand)**: A minimal, yet powerful state management solution for React applications.
- **[Testing Library](https://testing-library.com/)**: A set of utilities that allow you to test UI components in a user-centric way.
- **[Vitest](https://vitest.dev/)**: A blazing fast unit-test framework powered by Vite.

Additional libraries and tools used in the project:

- **[@t3-oss/env-nextjs](#)**: A Next.js-specific environment configuration tool for managing project settings
- **[clsx](https://github.com/lukeed/clsx)**: A tiny utility for constructing `className` strings in a conditional and cleaner way.
- **[Ramda](https://ramdajs.com/)**: A practical functional library for JavaScript programmers, focusing on simplicity and performance.

Feel free to explore and learn more about each of these technologies to understand how they contribute to the project.

## ⚒️ Prerequisites

Before starting with the Afya PEBMED Challenge project, ensure you meet the following requirements:

- **Node.js (v16 or higher)**: The project requires Node.js version 16 or higher. If you haven't installed it yet or need to upgrade, visit the [Node.js download page](https://nodejs.org/).
- **npm (Node Package Manager)**: npm is utilized to manage the project's dependencies. It comes bundled with Node.js. You can check your npm version by running `npm -v` in your terminal.
- **pnpm**: As an efficient alternative to npm and Yarn, this project supports [pnpm](https://pnpm.io/), known for its speed and efficiency in handling packages. Follow the instructions on the pnpm website for installation and usage.
- **A Code Editor**: Use a code editor like [Visual Studio Code](https://code.visualstudio.com/) (preferable), [Sublime Text](https://www.sublimetext.com/), [Atom](https://atom.io/) or why not [Adobe Dreamweaver](https://www.adobe.com/br/products/dreamweaver.html) ([remember that?](https://en.wikipedia.org/wiki/Adobe_Dreamweaver)) for an enhanced development experience.

## 🚀 Installation and Running Instructions

Getting this project up and running on your local machine involves a few straightforward steps. Here's an overview of what you'll need to do:

1. **Download and Install Dependencies**: Start by cloning the project to your local machine and installing all the necessary dependencies. This ensures that you have all the required libraries and tools to run the project successfully.

2. **Configure Environment Variables**: Next, you'll set up the environment variables. This step is crucial as it involves configuring the project with the necessary settings and API endpoints it needs to function correctly.

3. **Running the Project**: Finally, once the dependencies are installed and the environment is configured, you can start the development server. This will allow you to run the project locally and see your changes in real time.

### 1 - Download and Install Dependencies

**Clone the Repository**: First, clone the repository to your local machine. Open your terminal and run the following command:

```bash
git clone https://github.com/johanguse/afya-pebmed-challenge.git
```

**Navigate to the Project Directory**: After cloning, move into the project directory with this command:

```bash
cd afya-pebmed-challenge
```

**Install Dependencies**: Finally, install all necessary dependencies. You can use pnpm, but npm or yarn are also compatible. Execute one of the following commands:

```bash
pnpm install  # You can also use npm or yarn if you prefer
```

### 2 - Environment Configuration

Configuring the environment variables correctly is crucial for the application to run smoothly. Follow these steps to set up your environment:

**Copy the Example Environment File**: Start by creating a copy of the `.env.example` file. This file contains template environment variables that the app needs. You can create a copy for local development using the following command:

```bash
# .env
cp .env.example .env
```

Environment variables are managed and loaded using `@t3-oss/env-nextjs` within the `env.mjs` file, ensuring they are accessible throughout the entire application.

Update the environment variables in the `.env` file as needed. For example:

```dotenv
NEXT_PUBLIC_MOCK_API_URL="https://private-0ced4-pebmeddesafiofrontend.apiary-mock.com"
```

(without a slash in the address of the website)

### 3 - Running the Development Server

After successfully installing the dependencies, you're ready to launch the development server. Follow these steps to get it running on your local machine:

**Start the Development Server**: To initiate the server, open your terminal and execute the following command:

```bash
pnpm run dev  # Use npm run dev or yarn dev if not using pnpm
```

   This command fires up the Next.js development server.

**Accessing the Server**: By default, the server will be accessible at [http://localhost:3000](http://localhost:3000). You can use this URL to view your application in a web browser.

   Note: The default port (3000) can be modified in the project settings if necessary.

## 🏵️ Extra

We use ESLint and Prettier to ensure code quality and consistency. You can run the linting and formatting checks using the following command:

```bash
pnpm run lint  # Use npm run dev or yarn dev if not using pnpm
```

## License

This project is licensed under the MIT License.
