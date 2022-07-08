import { Cell } from './Cell';
import {
  fewerThanTwo,
  twoOrThree,
  moreThanThree,
  comesBackAlive,
} from './rules';

export const processGrid = (grid: Array<Cell>): Array<Cell> => {
  let res: Array<Cell> = [];
  grid.forEach((c: Cell) => {
    if (
      fewerThanTwo(grid, c) &&
      twoOrThree(grid, c) &&
      moreThanThree(grid, c) &&
      comesBackAlive(grid, c)
    ) {
      res.push(c);
    }
  });

  res.map((c: Cell) => {
    c.alive = true;
  });
  return res;
};
