# Unexpected 'arguments' object behavior in JavaScript

This repository demonstrates a common, yet easily overlooked, issue in JavaScript related to the `arguments` object.  The `arguments` object, while providing access to function arguments, isn't a true array and lacks standard array methods.  This can lead to unexpected errors or inconsistencies when treating it as one.

## The Problem

The provided `bug.js` file showcases the issue. The `arguments` object is logged to the console, but attempting to use array methods on it (like `map`, `filter`, etc.) will result in errors or unexpected behavior.

## The Solution

The `bugSolution.js` file offers a solution using the rest parameters (`...`) syntax. This approach converts the function arguments into an actual array, which allows for seamless use of standard array methods.

This is a crucial point for modern JavaScript developers.  Avoid using `arguments` directly and use rest parameters instead for cleaner and more predictable code.