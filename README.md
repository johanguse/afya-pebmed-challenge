
# Afya PEBMED Challenge

![Vercel](http://therealsujitk-vercel-badge.vercel.app/?app=afya-pebmed-challenge) ![License](https://img.shields.io/badge/license-MIT-blue)

This is the README for the Afya PEBMED Challenge project.

Develop the frontend of a checkout system where a user can subscribe annually or monthly, displaying success or error when submitting the form, and sending payment information for processing by the backend.

Follow the instructions below to set up and run the project on your local machine.

## Prerequisites

Before you begin, ensure you have met the following requirements:

Node.js (v16 or higher)<br/>
npm, Yarn or pnpm as your package manager, any of them should work.<br/>

## Getting Started

#### Installation

Clone this repository to your local machine using:

```bash
git clone https://github.com/johanguse/afya-pebmed-challenge.git
```

Navigate to the project directory:

```bash
cd afya-pebmed-challenge
```

Install project dependencies using npm or yarn:

```bash
npm install
```

OR

```bash
yarn install
```

OR

```bash
pnpm install
```

## Environment Configuration

Before running the project, make sure to set up your environment variables by following these steps:

1. Locate the `.env.example` file in the project's root directory.

2. Create a copy of the `.env.example` file and rename it to `.env`.

3. Open the newly created `.env` file in a text editor.

4. Update the environment variables in the `.env` file as needed. For example:

```dotenv
NEXT_PUBLIC_MOCK_API_URL="https://private-0ced4-pebmeddesafiofrontend.apiary-mock.com"
```

(without slash / in the url of the URL)

## Running the Development Server

To start the development server, use the following command:

```bash
npm run dev
```

OR

```bash
yarn dev
```

OR

```bash
pnpm dev
```

Visit <http://localhost:3000> in your web browser to see the application running.

## Extra

We use ESLint and Prettier to ensure code quality and consistency. You can run the linting and formatting checks using the following command:

```bash
npm run lint
```

#### OR

```bash
yarn lint
```

OR

```bash
pnpm lint
```

## Contributing

Contributions are welcome! Please read the Contribution Guidelines for more details on how to contribute to this project.

## License

This project is licensed under the MIT License.
