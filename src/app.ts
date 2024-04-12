import * as dotenv from "dotenv";
import * as readline from "node:readline";
import isPositiveInt from "is-positive-int";
import generateMaze from "Utils/generateMaze";
import printMaze from "Utils/printMaze";

// Initialize dotenv
dotenv.config();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Type definition for the coordinates of the player
type Coordinate = {
  x: number;
  y: number;
};

/**
 * Get the input from the user and validate it.
 *
 * @param maze The maze to traverse
 * @param x The x-coordinate of the starting position
 * @param y The y-coordinate of the starting position
 * @returns A promise that resolves to an object containing the new x and y coordinates
 * of the player after the move.
 */
const getUserInput = (maze: number[][], x: number, y: number): Promise<Coordinate> => {
  return new Promise((resolve) => {
    rl.question(`Enter the direction to move (w/a/s/d) or type 'q' to quit: [x: ${x}, y: ${y}]\n`, (answer) => {
      if (answer === "w") {
        if (isPositiveInt(y) > 0 && maze[y - 1][x] % 2 === 0) {
          resolve({ x, y: y - 1 });
        } else {
          console.log("Invalid move. Try again.\n");
          resolve(getUserInput(maze, x, y));
        }
      } else if (answer === "a") {
        if (isPositiveInt(x) > 0 && maze[y][x - 1] % 2 === 0) {
          resolve({ x: x - 1, y });
        } else {
          console.log("Invalid move. Try again.\n");
          resolve(getUserInput(maze, x, y));
        }
      } else if (answer === "s") {
        if (y < maze.length - 1 && maze[y + 1][x] % 2 === 0) {
          resolve({ x, y: y + 1 });
        } else {
          console.log("Invalid move. Try again.\n");
          resolve(getUserInput(maze, x, y));
        }
      } else if (answer === "d") {
        if (x < maze[0].length - 1 && maze[y][x + 1] % 2 === 0) {
          resolve({ x: x + 1, y });
        } else {
          console.log("Invalid move. Try again.\n");
          resolve(getUserInput(maze, x, y));
        }
      } else if (answer === "q") {
        console.log("Thanks for playing!");
        process.exit(0);
      } else {
        console.log("Invalid input. Try again.\n");
        resolve(getUserInput(maze, x, y));
      }
    });
  });
};

/**
 * Play the maze game by generating a maze and allowing the player to navigate it.
 *
 * @returns A promise that resolves when the game is finished.
 */
const playMazeGame = async (): Promise<void> => {
  const width = 25;
  const height = 25;
  const maze = generateMaze(width, height);
  let x = 0;
  let y = 0;

  printMaze(maze);

  while (true) {
    const { x: newX, y: newY } = await getUserInput(maze, x, y);

    if (newX === x && newY === y) continue;

    x = newX;
    y = newY;

    printMaze(maze);

    if (x === width - 1 && y === height - 1) {
      console.log("Congratulations! You've reached the end of the maze.\n");
      break;
    }
  }
};

playMazeGame();
