type Rotation = boolean[][];

interface Piece {
    id: string;
    color: string;
    rotations: Rotation[];
}

export function asBooleanArray(array: (0 | 1)[][]): Rotation {
    return array.map((value) => value.map((v) => v === 1));
}

export function rotate(arr: Rotation): Rotation {
    const n = arr.length;
    const x = Math.floor(n / 2);
    const y = n - 1;
    for (let i = 0; i < x; i++) {
        for (let j = i; j < y - i; j++) {
            const k = arr[i][j];
            arr[i][j] = arr[y - j][i];
            arr[y - j][i] = arr[y - i][y - j];
            arr[y - i][y - j] = arr[j][y - i];
            arr[j][y - i] = k;
        }
    }
    return arr;
}

/**
 * Rotates a piece n times, returning an array of the rotations
 */
export function rotateTimes(arr: Rotation, n: number = 4): Rotation[] {
    const rotations: Rotation[] = [];
    for (let i = 0; i < n; i++) {
        rotations.push(arr);
        arr = rotate(arr);
    }
    return rotations;
}

// data referenced from https://tetris.wiki/Super_Rotation_System
export const pieces: Piece[] = [
    {
        id: 'I',
        color: 'cyan',
        rotations: rotateTimes(asBooleanArray([
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]))
    },
];
