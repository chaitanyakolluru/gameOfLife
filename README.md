# gameOfLife:

`https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life`

All tests run clean and tests(processGrid.test.ts) show it successfully processes 3x3or 4x4.

    3x3
    // input:
    // 0 1 0
    // 1 1 1
    // 0 0 0

    // output:
    // 1 1 1
    // 1 1 1
    // 0 1 0

    4x4
    // input:
    // 0 1 0 0
    // 1 0 1 1
    // 0 0 0 1
    // 1 1 0 1

    // output:
    // 0 1 1 0
    // 0 1 1 1
    // 1 0 0 1
    // 0 0 1 0

Still needs a way to randomize an initial state and also calculating out of bounds dead cell recreation, but the app should take in an input grid and result in a successful alive snapshot of the cells.

## usage

Install dependencies

```bash
npm install
```

Run tests

```bash
npm test
```

Build project

```bash
npm run script:build
```

Run project

```bash
npm run script:run
```

Sample output based on a seed of 5 with gridGenerator() (index.ts):

Index.ts:

```javascript
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

const gr = gridGenerator(5); //gridGenerator generates a grid that results in still lifes as can be seen in the below output
// gridGenerator assigns a cell as alive if the sum of x and y cooridnates equals an even number and dead if it sums upto an odd number
awesomeThingsHappen(gr);
```

Output:

```properties
[script:*run] [
[script:*run]   Cell { alive: true, x: 0, y: 1 },
[script:*run]   Cell { alive: true, x: 0, y: 2 },
[script:*run]   Cell { alive: true, x: 0, y: 3 },
[script:*run]   Cell { alive: true, x: 1, y: 0 },
[script:*run]   Cell { alive: true, x: 1, y: 4 },
[script:*run]   Cell { alive: true, x: 2, y: 0 },
[script:*run]   Cell { alive: true, x: 2, y: 4 },
[script:*run]   Cell { alive: true, x: 3, y: 0 },
[script:*run]   Cell { alive: true, x: 3, y: 4 },
[script:*run]   Cell { alive: true, x: 4, y: 1 },
[script:*run]   Cell { alive: true, x: 4, y: 2 },
[script:*run]   Cell { alive: true, x: 4, y: 3 }
[script:*run] ]
[script:*run] [
[script:*run]   Cell { alive: true, x: 0, y: 1 },
[script:*run]   Cell { alive: true, x: 0, y: 2 },
[script:*run]   Cell { alive: true, x: 0, y: 3 },
[script:*run]   Cell { alive: true, x: 1, y: 0 },
[script:*run]   Cell { alive: true, x: 1, y: 4 },
[script:*run]   Cell { alive: true, x: 2, y: 0 },
[script:*run]   Cell { alive: true, x: 2, y: 4 },
[script:*run]   Cell { alive: true, x: 3, y: 0 },
[script:*run]   Cell { alive: true, x: 3, y: 4 },
[script:*run]   Cell { alive: true, x: 4, y: 1 },
[script:*run]   Cell { alive: true, x: 4, y: 2 },
[script:*run]   Cell { alive: true, x: 4, y: 3 }
[script:*run] ]
[script:*run] [
[script:*run]   Cell { alive: true, x: 0, y: 1 },
[script:*run]   Cell { alive: true, x: 0, y: 2 },
[script:*run]   Cell { alive: true, x: 0, y: 3 },
[script:*run]   Cell { alive: true, x: 1, y: 0 },
[script:*run]   Cell { alive: true, x: 1, y: 4 },
[script:*run]   Cell { alive: true, x: 2, y: 0 },
[script:*run]   Cell { alive: true, x: 2, y: 4 },
[script:*run]   Cell { alive: true, x: 3, y: 0 },
[script:*run]   Cell { alive: true, x: 3, y: 4 },
[script:*run]   Cell { alive: true, x: 4, y: 1 },
[script:*run]   Cell { alive: true, x: 4, y: 2 },
[script:*run]   Cell { alive: true, x: 4, y: 3 }
[script:*run] ]
[script:*run] [
[script:*run]   Cell { alive: true, x: 0, y: 1 },
[script:*run]   Cell { alive: true, x: 0, y: 2 },
[script:*run]   Cell { alive: true, x: 0, y: 3 },
[script:*run]   Cell { alive: true, x: 1, y: 0 },
[script:*run]   Cell { alive: true, x: 1, y: 4 },
[script:*run]   Cell { alive: true, x: 2, y: 0 },
[script:*run]   Cell { alive: true, x: 2, y: 4 },
[script:*run]   Cell { alive: true, x: 3, y: 0 },
[script:*run]   Cell { alive: true, x: 3, y: 4 },
[script:*run]   Cell { alive: true, x: 4, y: 1 },
[script:*run]   Cell { alive: true, x: 4, y: 2 },
[script:*run]   Cell { alive: true, x: 4, y: 3 }
[script:*run] ]
[script:*run] [
[script:*run]   Cell { alive: true, x: 0, y: 1 },
[script:*run]   Cell { alive: true, x: 0, y: 2 },
[script:*run]   Cell { alive: true, x: 0, y: 3 },
[script:*run]   Cell { alive: true, x: 1, y: 0 },
[script:*run]   Cell { alive: true, x: 1, y: 4 },
[script:*run]   Cell { alive: true, x: 2, y: 0 },
[script:*run]   Cell { alive: true, x: 2, y: 4 },
[script:*run]   Cell { alive: true, x: 3, y: 0 },
[script:*run]   Cell { alive: true, x: 3, y: 4 },
[script:*run]   Cell { alive: true, x: 4, y: 1 },
[script:*run]   Cell { alive: true, x: 4, y: 2 },
[script:*run]   Cell { alive: true, x: 4, y: 3 }
[script:*run] ]
[script:*run] [
[script:*run]   Cell { alive: true, x: 0, y: 1 },
[script:*run]   Cell { alive: true, x: 0, y: 2 },
[script:*run]   Cell { alive: true, x: 0, y: 3 },
[script:*run]   Cell { alive: true, x: 1, y: 0 },
[script:*run]   Cell { alive: true, x: 1, y: 4 },
[script:*run]   Cell { alive: true, x: 2, y: 0 },
[script:*run]   Cell { alive: true, x: 2, y: 4 },
[script:*run]   Cell { alive: true, x: 3, y: 0 },
[script:*run]   Cell { alive: true, x: 3, y: 4 },
[script:*run]   Cell { alive: true, x: 4, y: 1 },
[script:*run]   Cell { alive: true, x: 4, y: 2 },
[script:*run]   Cell { alive: true, x: 4, y: 3 }
[script:*run] ]
[script:*run] [
[script:*run]   Cell { alive: true, x: 0, y: 1 },
[script:*run]   Cell { alive: true, x: 0, y: 2 },
[script:*run]   Cell { alive: true, x: 0, y: 3 },
[script:*run]   Cell { alive: true, x: 1, y: 0 },
[script:*run]   Cell { alive: true, x: 1, y: 4 },
[script:*run]   Cell { alive: true, x: 2, y: 0 },
[script:*run]   Cell { alive: true, x: 2, y: 4 },
[script:*run]   Cell { alive: true, x: 3, y: 0 },
[script:*run]   Cell { alive: true, x: 3, y: 4 },
[script:*run]   Cell { alive: true, x: 4, y: 1 },
[script:*run]   Cell { alive: true, x: 4, y: 2 },
[script:*run]   Cell { alive: true, x: 4, y: 3 }
[script:*run] ]
...
```
