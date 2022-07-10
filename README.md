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

Sample output based on a grid size of 5 with gridGenerator():
()

Index.ts:

```javascript
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

const [gr, n] = gridGenerator(5); // gridGenerator assigns a cell as being alive if the sum of x and y cooridnates equals an even number and dead if they sum upto an odd number
console.log('Initial grid: ', gr);
awesomeThingsHappen(gr, n);
```

Output:

```properties
[script:*run] Initial grid:  [
[script:*run]   Cell { alive: true, x: 0, y: 0 },
[script:*run]   Cell { alive: false, x: 0, y: 1 },
[script:*run]   Cell { alive: true, x: 0, y: 2 },
[script:*run]   Cell { alive: false, x: 0, y: 3 },
[script:*run]   Cell { alive: true, x: 0, y: 4 },
[script:*run]   Cell { alive: false, x: 1, y: 0 },
[script:*run]   Cell { alive: true, x: 1, y: 1 },
[script:*run]   Cell { alive: false, x: 1, y: 2 },
[script:*run]   Cell { alive: true, x: 1, y: 3 },
[script:*run]   Cell { alive: false, x: 1, y: 4 },
[script:*run]   Cell { alive: true, x: 2, y: 0 },
[script:*run]   Cell { alive: false, x: 2, y: 1 },
[script:*run]   Cell { alive: true, x: 2, y: 2 },
[script:*run]   Cell { alive: false, x: 2, y: 3 },
[script:*run]   Cell { alive: true, x: 2, y: 4 },
[script:*run]   Cell { alive: false, x: 3, y: 0 },
[script:*run]   Cell { alive: true, x: 3, y: 1 },
[script:*run]   Cell { alive: false, x: 3, y: 2 },
[script:*run]   Cell { alive: true, x: 3, y: 3 },
[script:*run]   Cell { alive: false, x: 3, y: 4 },
[script:*run]   Cell { alive: true, x: 4, y: 0 },
[script:*run]   Cell { alive: false, x: 4, y: 1 },
[script:*run]   Cell { alive: true, x: 4, y: 2 },
[script:*run]   Cell { alive: false, x: 4, y: 3 },
[script:*run]   Cell { alive: true, x: 4, y: 4 }
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
[script:*run]   Cell { alive: true, x: 1, y: 2 },
[script:*run]   Cell { alive: true, x: 1, y: 4 },
[script:*run]   Cell { alive: true, x: 2, y: 0 },
[script:*run]   Cell { alive: true, x: 2, y: 1 },
[script:*run]   Cell { alive: true, x: 2, y: 3 },
[script:*run]   Cell { alive: true, x: 2, y: 4 },
[script:*run]   Cell { alive: true, x: 3, y: 0 },
[script:*run]   Cell { alive: true, x: 3, y: 2 },
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
[script:*run]   Cell { alive: true, x: 1, y: 2 },
[script:*run]   Cell { alive: true, x: 1, y: 4 },
[script:*run]   Cell { alive: true, x: 2, y: 0 },
[script:*run]   Cell { alive: true, x: 2, y: 1 },
[script:*run]   Cell { alive: true, x: 2, y: 3 },
[script:*run]   Cell { alive: true, x: 2, y: 4 },
[script:*run]   Cell { alive: true, x: 3, y: 0 },
[script:*run]   Cell { alive: true, x: 3, y: 2 },
[script:*run]   Cell { alive: true, x: 3, y: 4 },
[script:*run]   Cell { alive: true, x: 4, y: 1 },
[script:*run]   Cell { alive: true, x: 4, y: 2 },
[script:*run]   Cell { alive: true, x: 4, y: 3 }
[script:*run] ]

...
...
```

```javascript

(initial grid)
1 0 1 0 1
0 1 0 1 0
1 0 1 0 1
0 1 0 1 0
1 0 1 0 1

(result a)
0 1 1 1 0
1 0 0 0 1
1 0 0 0 1
1 0 0 0 1
0 1 1 1 0

(result b)
0 1 1 1 0
1 0 1 0 1
1 1 0 1 1
1 0 1 0 1
0 1 1 1 0

(result a)
0 1 1 1 0
1 0 0 0 1
1 0 0 0 1
1 0 0 0 1
0 1 1 1 0

(result b)
0 1 1 1 0
1 0 1 0 1
1 1 0 1 1
1 0 1 0 1
0 1 1 1 0

(result a)
0 1 1 1 0
1 0 0 0 1
1 0 0 0 1
1 0 0 0 1
0 1 1 1 0

(result b)
0 1 1 1 0
1 0 1 0 1
1 1 0 1 1
1 0 1 0 1
0 1 1 1 0

....
....

```
