import { describe, it, expect } from 'vitest';
import { evenOrOdd } from '@/playground';

describe('basic math', () => {
  it('Adds two numbers', () => {
    expect(1 + 1).toBe(2);
  });
});

describe('evenOrOdd', () => {
  describe('when input is even', () => {
    it('returns Even', () => {
      expect(evenOrOdd(20)).toBe('Even');
    });
  });

  describe('when input is odd', () => {
    it('returns Odd', () => {
      expect(evenOrOdd(13)).toBe('Odd');
    });
  });
});
