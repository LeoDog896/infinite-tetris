import { describe, it, expect } from 'vitest';
import { createBoard, getClearedLines, clearLines } from '$lib/board';
import { asBooleanArray, rotate } from '$lib/piece';

describe('board', () => {
	describe('createBoard', () => {
		it('should create a board with the correct dimensions', () => {
			const board = createBoard(10, 20);
			expect(board.length).toBe(20);
			expect(board[0].length).toBe(10);
		});
	});
});

describe('piece', () => {
	describe('asBooleanArray', () => {
		it('should convert a 2D array of 0s and 1s to a 2D array of booleans', () => {
			const array = asBooleanArray([
				[0, 0, 0, 0],
				[1, 1, 1, 1],
				[0, 0, 0, 0],
				[0, 0, 0, 0]
			]);
			expect(array).toEqual([
				[false, false, false, false],
				[true, true, true, true],
				[false, false, false, false],
				[false, false, false, false]
			]);
		});
	});

	describe('rotate', () => {
		it('should rotate a 2D array', () => {
			const array = rotate(asBooleanArray([
				[0, 0, 0, 0],
				[1, 1, 1, 1],
				[0, 0, 0, 0],
				[0, 0, 0, 0]
			]));
			expect(array).toEqual([
				[false, true, false, false],
				[false, true, false, false],
				[false, true, false, false],
				[false, true, false, false]
			]);
		});
	});
});