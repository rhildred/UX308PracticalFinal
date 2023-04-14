import { describe, it, expect } from 'vitest';
import { hello } from '../src/functions.js';

describe('functions test', function () {
  it('tests for hello Rich', function () {
    const sResult = hello('Rich');
    expect(sResult).toBe('hello Rich');
  });
});
