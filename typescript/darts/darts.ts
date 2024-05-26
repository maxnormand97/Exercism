
    export function score(x: number, y: number): number {
        // TODO: need to break up the co-oridinates for outer middle and inner circles
        // then convert each to a rule to make the code nicer
        if (x === 10 || y === 10) {
            return 0;
        }
        // outer circle
        // if (x === 0 && y <= 10) {
        //     return 1;
        // }
        // just outside the outer circle
        if (x >= 7.1 || y >= 7.1 || x <= -7.1 || y <= -7.1) {
            return 0;
        }
        // bullseye
        if (x === 0 && y === 0) {
            return 10;
        }
        // inner circle
        if (x <= 0.7 || y <= 0.7) {
            return 10;
        }
        // middle circle
        if (x <= 5 && y <= 5) {
            return 5;
        }
        // anything in the 5 unit circle should be 5 points
        if (x <= 5 && y <= 5) {
            return 5;
        }
        // anything in the 1. unit circle should be 10 points
        if (x <= 1 || y <= 1) {
            return 10;
        }
      return 0;
    }