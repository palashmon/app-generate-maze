/**
 * Prints the maze to the console.
 *
 * @param maze - The maze represented as a 2D array of numbers.
 */
export default function printMaze(maze: number[][]): void {
  for (const row of maze) {
    console.log(row.map((cell) => (cell === 0 ? " " : "#")).join(""));
  }
}
