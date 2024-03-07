const assert = require('assert');
const { add, multiply } = require('./math'); // Importing the functions to be tested

// Test cases for the add function
describe('add function', () => {
    it('should return the sum of two numbers', () => {
        assert.strictEqual(add(1, 2), 3); // Test case 1
        assert.strictEqual(add(0, 0), 0); // Test case 2
        assert.strictEqual(add(-1, 1), 0); // Test case 3
        // Add more test cases as needed
    });

    // Add more test scenarios for the add function if necessary
});

// Test cases for the multiply function
describe('multiply function', () => {
    it('should return the product of two numbers', () => {
        assert.strictEqual(multiply(2, 3), 6); // Test case 1
        assert.strictEqual(multiply(0, 5), 0); // Test case 2
        assert.strictEqual(multiply(-1, 10), -10); // Test case 3
        // Add more test cases as needed
    });

    // Add more test scenarios for the multiply function if necessary
});