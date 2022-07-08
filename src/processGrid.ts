import { Cell } from './Cell';
import {
  fewerThanTwo,
  twoOrThree,
  moreThanThree,
  comesBackAlive,
} from './rules';

export const processGrid = (grid: Array<Cell>): Array<Cell> => {
  let res: Array<Cell> = [];

  res = grid.filter((c: Cell) => {
    return (
      fewerThanTwo(grid, c) &&
      twoOrThree(grid, c) &&
      moreThanThree(grid, c) &&
      comesBackAlive(grid, c)
    );
  });

  res.map((c: Cell) => {
    c.alive = true;
  });

  return res;
};
