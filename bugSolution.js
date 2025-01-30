function foo(x) {
  if (x === null || x === undefined || typeof x !== 'object' ) {
    return 0; // Handle null, undefined, and non-objects
  } else if (typeof x.length === 'number'){
    return x.length; // Access length if it exists
  } else {
    return 0; // or throw an error or handle this as you want
  }
}

console.log(foo(null)); // Output: 0
console.log(foo([1, 2, 3])); // Output: 3
console.log(foo(undefined)); // Output: 0
console.log(foo(5)); //Output: 0
console.log(foo({a:1,b:2})); //Output: 0
console.log(foo('abc')); //Output: 3