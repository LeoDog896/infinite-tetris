import { describe, it, expect } from 'vitest';
import { createBoard, getClearedLines, clearLines } from './lib/board';

describe('board', () => {
	describe('createBoard', () => {
		it('should create a board with the correct dimensions', () => {
			const board = createBoard(10, 20);
			expect(board.length).toBe(20);
			expect(board[0].length).toBe(10);
		});
	});
});