import assert from 'power-assert';
import capitalize from '../src/capitalize.js';

assert.strictEqual(capitalize('hello'), 'Hello');
assert.strictEqual(capitalize(''), '');

console.log('Все тесты пройдены!');
