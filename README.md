# app-generate-maze [![CI](https://github.com/palashmon/app-generate-maze/actions/workflows/main.yml/badge.svg)](https://github.com/palashmon/app-generate-maze/actions/workflows/main.yml)

This is a simple application that generates a maze based on the given dimensions and the starting point. The maze is generated as a 2D array of cells, where each cell has a value of 0 or 1. The value 0 represents a wall, and the value 1 represents a path. The maze is generated in such a way that there is only one path from the starting point to the end point.

## Install

1. Install [node.js](https://nodejs.org/en/download/) and npm.
2. Run `npm install` to install the dependencies.

## Build & Run

1. Copy the contents of the `.env.example` file to a `.env` next to it, and edit it with your values.
2. Run `npm run build` to build the files.
3. Run `npm run start` to start the application.

-  You can run `npm run dev` to combine the 2 steps above, while listening to changes and restarting automatically.

## Developing

### Visual Studio Code

-   Installing the Eslint (`dbaeumer.vscode-eslint`) and Prettier - Code formatter (`esbenp.prettier-vscode`) extensions is recommended.

## Linting & Formatting

-   Run `npm lint` to lint the code.
-   Run `npm format` to format the code.

## Testing

Check the test examples to get started :

- `/src/app.ts` that provide the main logic
- `/test/app.spec.ts` who test the main function

To run the tests :

-   Run `npm test` to execute all tests.
-   Run `npm test:watch` to run tests in watch (loop) mode.
-   Run `npm test:coverage` to see the tests coverage report.
