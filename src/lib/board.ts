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
    return board.reduce((indexes: number[], row: (Tile | undefined)[], index: number) => {
        if (row.every((tile) => tile !== undefined)) {
          indexes.push(index);
        }
        return indexes;
    }, []);
}

export function clearLines(board: Board): Board {
    const newBoard = structuredClone(board);
    const clearedLines = getClearedLines(board);
    return newBoard.filter((_, index) => !clearedLines.includes(index));
}