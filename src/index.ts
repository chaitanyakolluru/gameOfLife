import { gridGenerator } from './gridGenerator';
import { processGrid } from './processGrid';
import { Cell } from './Cell';

const awesomeThingsHappen = (grid: Array<Cell>, n: number): void => {
  const gr2 = processGrid(grid, n);
  console.log(gr2);
  setTimeout(() => {
    awesomeThingsHappen(gr2, n);
  }, 10000);
};

const [gr, n] = gridGenerator(5);
console.log('initial grid', gr);
awesomeThingsHappen(gr, n);
