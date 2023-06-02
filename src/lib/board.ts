interface Tile {
    color: string;
}

type Board = (Tile | undefined)[][];

export function createBoard(width: number, height: number): Board {
    return Array.from({ length: height }, () => Array(width).fill(undefined));
}

/**
 * Gets the index of the lines that are full (i.e. all tiles are filled)
 */
export function getClearedLines(board: Board): number[] {
    let indexes = [];
    let index = board.findIndex((row) => row.every((tile) => tile !== undefined));
    while (index !== -1) {
        indexes.push(index);
        index = board.findIndex((row) => row.every((tile) => tile !== undefined));
    }

    return indexes;
}

export function clearLines(board: Board): Board {
    const newBoard = structuredClone(board);
    const clearedLines = getClearedLines(board);
    const indexes = new Array(board.length).fill(undefined).map((_, i) => i); // make indexes from [0...board.length]

    // we want to get the difference between the indexes and the cleared lines
    // so we can get the lines that are not cleared
    const unclearedLines = indexes.filter((index) => !clearedLines.includes(index));

    return unclearedLines.map((index) => newBoard[index]);
}