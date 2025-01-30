# JavaScript - Handling undefined values

This repository demonstrates a common JavaScript error and its solution.  The error occurs when attempting to access the `length` property of a value that is not an array or a string. Specifically, this example shows how trying to use `.length` on `undefined` or a number will throw a TypeError.  The solution adds explicit checks to handle these cases gracefully.

## Bug
The `bug.js` file contains the buggy code.  The function `foo` attempts to determine the length of the input `x`. However, it does not handle the case where x is `undefined`, a number, or any other type that does not have a `length` property.

## Solution
The `bugSolution.js` file provides a corrected version. The updated `foo` function now includes checks to handle null, undefined, and other data types appropriately, preventing the runtime error.