// =====================================================
// 07 - CALLBACKS & HIGHER ORDER FUNCTIONS
// =====================================================

// -----------------------------------------------------
// SECTION 1: CALLBACKS - BASICS
// -----------------------------------------------------

// 1.1 Basic callback
function greet(name, cb) {
  console.log("Hello " + name);
  cb();
}

greet("Swaraj", function () {
  console.log("This is the callback running");
});

// 1.2 Passing data through a callback
function process(x, cb) {
  let doubled = x * 2;
  cb(doubled);
}

process(5, function (val) {
  console.log("Value is " + val);
});

// 1.3 Passing an already-named function as callback
function showResult(val) {
  console.log("Result:", val);
}

function subtract(a, b, cb) {
  cb(a - b);
}

subtract(10, 4, showResult);

// 1.4 Same named callback reused across multiple calls
function printResult(val) {
  console.log("Output:", val);
}

function subtract2(a, b, cb) {
  cb(a - b);
}

subtract2(20, 8, printResult); // Output: 12
subtract2(5, 5, printResult); // Output: 0

// 1.5 Multiple values passed to a callback
function calculate(a, b, cb) {
  let sum = a + b;
  let product = a * b;
  cb(sum, product);
}

calculate(3, 4, function (x, y) {
  console.log(x, y); // 7 12
});

// -----------------------------------------------------
// SECTION 2: CALLBACK TRAPS
// -----------------------------------------------------

// 2.1 TRAP - Reference vs Call
function run(cb) {
  console.log("Before");
  cb; // just a reference, does NOT call it
  console.log("After");
}

run(function () {
  console.log("This never prints");
});
// Output: Before, After

// 2.2 TRAP - cb is undefined, then called -> TypeError
function runSafe(cb) {
  console.log("Before2");
  if (typeof cb === "function") {
    cb();
  } else {
    console.log("cb is not a function - skipped");
  }
  console.log("After2");
}
runSafe(); // Before2 cb is not a function - skipped After2

function runUnsafe(cb) {
  console.log("Before");
  cb();   // ❌ no check — crashes here since cb is undefined
  console.log("After");
}
runUnsafe(); // Before, type eror as cb is undefined na and and after did not run 

// 2.3 TRAP - function() vs function-call-result
function alertUser(cb) {
  cb();
}

let message = function () {
  console.log("Hi there");
};

// alertUser(message());  // BUGGY VERSION (commented so file doesn't crash)
// Trace: message() runs immediately -> prints "Hi there" -> returns undefined
// -> cb = undefined -> cb() -> TypeError: cb is not a function

alertUser(message); // CORRECT VERSION - passes the function itself

// 2.4 Same trap, bigger example
function processData(cb) {
  console.log("Start");
  cb();
  console.log("End");
}

function showMessage() {
  console.log("Message shown");
  return "done";
}

// processData(showMessage());  // BUGGY - crashes with TypeError after "Message shown" + "Start"
processData(showMessage); // CORRECT - prints Start, Message shown, End

// -----------------------------------------------------
// SECTION 3: CALLBACKS WITH RETURN VALUES
// -----------------------------------------------------

function multiply(a, b, cb) {
  let product = a * b;
  let output = cb(product); // capture the returned value
  console.log("Final:", output);
}

multiply(3, 4, function (val) {
  return val + 100;
});
// Final: 112

// -----------------------------------------------------
// SECTION 4: HIGHER ORDER FUNCTIONS - TAKES A FUNCTION
// -----------------------------------------------------

function checkNumber(num, cb) {
  return cb(num);
}

function isEven(n) {
  return n % 2 === 0;
}

console.log(checkNumber(4, isEven)); // true
console.log(checkNumber(7, isEven)); // false

// -----------------------------------------------------
// SECTION 5: HIGHER ORDER FUNCTIONS - RETURNS A FUNCTION
// -----------------------------------------------------

function outer() {
  return function () {
    console.log("I was returned!");
  };
}

let myFunc = outer(); // Step A: get the returned function
myFunc(); // Step B: I was returned!

outer()(); // same thing, one line I was returned!



// -----------------------------------------------------
// SECTION 6: COMBINED - TAKES A FUNCTION AND RETURNS A FUNCTION
// -----------------------------------------------------

function createValidator(minLength) {
  return function (str, cb) {
    let isValid = str.length >= minLength;
    cb(isValid);
  };
}

let validate5 = createValidator(5);

validate5("Hi", function (result) {
  console.log("Hi is valid:", result); // false
});

validate5("Hello!", function (result) {
  console.log("Hello! is valid:", result); // true
});

// -----------------------------------------------------
// SECTION 7: HOF TRAPS
// -----------------------------------------------------

// 7.1 Reference vs call, applied to a returned function
function makeLogger(prefix) {
  return function (msg) {
    console.log(prefix + ": " + msg);
  };
}
let log = makeLogger("INFO");
log; // just a reference, does NOT run
console.log("Done"); // only this prints

// 7.2 ASI trap breaking a curried function
const brokenCombine = (a) => {
  return (b) => a + b; // correct - same line
};
console.log(brokenCombine(1)(2)); // 3

// If "return" and the value were on separate lines, JS auto-inserts a semicolon
// after return, silently breaking the function (returns undefined instead).

// 7.3 Forgetting a returned function must be called twice
function outer2() {
  return function () {
    console.log("Hi");
  };
}
console.log(outer2()); // prints the function definition, NOT "Hi"
outer2()(); // correct - prints "Hi"

