# gameOfLife

All tests run clean and tests(processGrid.test.ts) show it successfully processes 3x3or 4x4. 

    3x3
    // input:
    // 0 1 0
    // 1 1 1
    // 0 0 0

    // output:
    // 1 1 1
    // 0 1 0
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
