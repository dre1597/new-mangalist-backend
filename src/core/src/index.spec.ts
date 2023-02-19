import { describe, expect, test } from 'vitest';
import { sum } from './index';

describe('sum', () => {
  test('should sum', () => {
    expect(sum(1, 1)).toBe(2);
  });
});
