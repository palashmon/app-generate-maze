/**
 * Generates a maze of the specified width and height.
 * The maze is represented as a 2D array of 0s and 1s, where 0 represents a wall and 1 represents a path.
 *
 * @param width The width of the maze.
 * @param height The height of the maze.
 * @returns A 2D array representing the generated maze.
 */
export default function generateMaze(width: number, height: number): number[][] {
  const maze = Array.from({ length: height }, () => Array.from({ length: width }, () => Math.floor(Math.random() * 2)));

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (x < width - 1) {
        maze[y][x] += maze[y][x + 1];
      }
      if (y < height - 1) {
        maze[y][x] += maze[y + 1][x];
      }
    }
  }

  return maze;
}
