type Rotation = boolean[][];

interface Piece {
    id: string;
    color: string;
    rotations: Rotation[];
}

export function asBooleanArray(array: (0 | 1)[][]): boolean[][] {
    return array.map((value) => value.map((v) => v === 1));
}

// TODO this is broken!
export function rotate(arr: boolean[][]): boolean[][] {
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

// // data referenced from https://tetris.wiki/Super_Rotation_System
// const pieces: Piece[] = [
//     {
//         id: 'I',
//         color: 'cyan',
//         rotations: [
//             [
//                 asBooleanArray([0, 0, 0, 0]),
//                 asBooleanArray([1, 1, 1, 1]),
//                 asBooleanArray([0, 0, 0, 0]),
//                 asBooleanArray([0, 0, 0, 0]),
//             ],
//             [
