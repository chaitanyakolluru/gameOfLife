import { gridGenerator } from './grid';
import { processGrid } from './processGrid';
import { Cell } from './Cell';

const awesomeThingsHappen = (grid: Array<Cell>): void => {
  const gr2 = processGrid(grid);
  console.log(gr2);
  setTimeout(() => {
    awesomeThingsHappen(gr2);
  }, 10000);
};

const gr = gridGenerator(5);
awesomeThingsHappen(gr);
