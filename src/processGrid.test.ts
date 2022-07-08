import { processGrid } from './processGrid';
import { Cell } from './Cell';

describe('process the grid', () => {
  it('should exist', () => {
    expect(processGrid([Cell.createCell(true, 0, 0)])).toBeDefined;
  });

  it('should take in a grid and return a grid only with alive elements', () => {
    expect(
      processGrid([
        Cell.createCell(true, 0, 0),
        Cell.createCell(true, 0, 1),
        Cell.createCell(true, 1, 0),
        Cell.createCell(true, 1, 1),
      ])
    ).toStrictEqual([
      Cell.createCell(true, 0, 0),
      Cell.createCell(true, 0, 1),
      Cell.createCell(true, 1, 0),
      Cell.createCell(true, 1, 1),
    ]);
  });

  xit('should process a 3x3 grid and return a grid with alive cells; ex1', () => {
    // input:
    // 0 1 0
    // 1 1 1
    // 0 0 0

    // output:
    // 1 1 1
    // 0 1 0
    // 0 1 0
    expect(
      processGrid([
        Cell.createCell(false, 0, 0),
        Cell.createCell(true, 0, 1),
        Cell.createCell(false, 0, 2),
        Cell.createCell(true, 1, 0),
        Cell.createCell(true, 1, 1),
        Cell.createCell(true, 1, 2),
        Cell.createCell(false, 2, 0),
        Cell.createCell(false, 2, 1),
        Cell.createCell(false, 2, 2),
      ])
    ).toStrictEqual([
      Cell.createCell(true, 0, 0),
      Cell.createCell(true, 0, 1),
      Cell.createCell(true, 0, 2),
      Cell.createCell(true, 1, 1),
      Cell.createCell(true, 2, 1),
    ]);
  });

  it('should process a 4x4 grid and return a grid with alive cells; ex2', () => {
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
    expect(
      processGrid([
        Cell.createCell(false, 0, 0),
        Cell.createCell(true, 0, 1),
        Cell.createCell(false, 0, 2),
        Cell.createCell(false, 0, 3),
        Cell.createCell(true, 1, 0),
        Cell.createCell(false, 1, 1),
        Cell.createCell(true, 1, 2),
        Cell.createCell(true, 1, 3),
        Cell.createCell(false, 2, 0),
        Cell.createCell(false, 2, 1),
        Cell.createCell(false, 2, 2),
        Cell.createCell(true, 2, 3),
        Cell.createCell(true, 3, 0),
        Cell.createCell(true, 3, 1),
        Cell.createCell(false, 3, 2),
        Cell.createCell(true, 3, 3),
      ])
    ).toStrictEqual([
      Cell.createCell(true, 0, 1),
      Cell.createCell(true, 0, 2),
      Cell.createCell(true, 1, 1),
      Cell.createCell(true, 1, 2),
      Cell.createCell(true, 1, 3),
      Cell.createCell(true, 2, 0),
      Cell.createCell(true, 2, 3),
      Cell.createCell(true, 3, 2),
    ]);
  });
});
