console.log("functions and arrow functions");

// ============================================================
// FUNCTIONS
// ============================================================

// what is a function
// declare -> function keyword + name + () + {}
// whatever we write inside the () at DECLARATION time = PARAMETERS
// whatever we pass inside the () at CALLING time = ARGUMENTS

// function greet(name) {          // name = parameter
//     console.log(`Hello, ${name}`);
// }
// greet("Swaraj");                 // "Swaraj" = argument


// ---- TYPES OF FUNCTIONS ----

// 1) Function Declaration (regular function)
// function greet(name) {
//     console.log(`Hello, ${name}`);
// }
// - fully hoisted (name + body both) -> usable even before its written position

// console.log(sayHi());  // "Hi!"  -> works fine, fully hoisted
// function sayHi() {
//     return "Hi!";
// }


// 2) Function Expression
// const greet = function (name) {
//     console.log(`Hello, ${name}`);
// };
// - stored in a variable, so hoisting depends on var/let/const, NOT function hoisting


// ---- HOISTING: function declaration vs function expression ----

// sayHiDecl();  // works -> "Hi Decl" (function declaration fully hoisted)
// function sayHiDecl() {
//     console.log("Hi Decl");
// }

// sayHiVar();   // TypeError: sayHiVar is not a function
// console.log(sayHiVar());  // TypeError: sayHiVar is not a function
// var sayHiVar = function () {
//     console.log("Hi var");
// };
// reason: var sayHiVar is hoisted with value undefined first,
// calling undefined() -> TypeError

// sayHiLet();   // ReferenceError: Cannot access 'sayHiLet' before initialization
// let sayHiLet = function () {
//     console.log("Hi let");
// };
// reason: let is hoisted but sits in TDZ (Temporal Dead Zone) till its line runs

// same TDZ behavior for const function expressions too


// ---- typeof BEFORE assignment (function expression) ----

// console.log(typeof abc);     // "undefined"  -> safe, no error
// console.log(typeof abc());   // TypeError: abc is not a function
// var abc = function add() {};

// rule:
// typeof abc        -> always safe, just checks current value (undefined here)
// typeof abc()       -> tries to CALL abc first (because of the ()), and abc is
//                        currently undefined -> calling undefined() throws TypeError
//                        typeof never even gets a chance to run

// console.log(sayHiVar());        // ReferenceError: Cannot access 'sayHiVar' before initialization
// console.log(typeof sayHiVar);   // ReferenceError: Cannot access 'sayHiVar' before initialization
// console.log(typeof sayHiVar()); // ReferenceError: Cannot access 'sayHiVar' before initialization

// let sayHiVar = function () {
//   console.log("Hi let");
// };

// ---- DEFAULT PARAMETERS ----

// function greet(name = "Guest") {
//     console.log(`Hello, ${name}`);
// }
// greet();           // "Hello, Guest"   -> nothing passed, default used
// greet(undefined);  // "Hello, Guest"   -> undefined explicitly passed, default used
// greet(null);       // "Hello, null"    -> null is a REAL value, default NOT triggered

// RULE: a parameter becomes undefined ONLY if there is no default value written.
// if a default expression IS written, JS calculates that expression and uses the
// result instead of undefined. default only triggers on: nothing passed OR undefined passed.
// null, 0, "", false -> all real values, default never triggers for these.


// default params can use earlier params + outer scope variables:

// let discount = 100;
// function add(price, finalPrice = price - discount) {
//     return finalPrice;
// }
// add(100);              // finalPrice = 100 - 100 = 0
// add();                 // price = undefined (no default for price)
//                         // finalPrice = undefined - 100 = NaN
// add(undefined, 50);    // price = undefined, finalPrice = 50 (explicit value wins over default)


// ---- arguments OBJECT (regular functions only) ----

// function test(a, b) {
//     console.log(arguments);   // Arguments(2) [10, 20] -> array-LIKE object, not a real array
// }
// test(10, 20);

// - only regular functions get an automatic `arguments` object
// - holds ALL arguments passed, regardless of how many parameters were declared
// - always an array-like OBJECT (Array.isArray(arguments) === false), never a true array
// - even with 0 arguments passed, it's an empty array-like object, not undefined


// ---- SCOPE + SHADOWING (inside functions) ----

// scope chain: JS looks in current/local scope first, then outward through each
// enclosing scope, all the way to global. found -> use it. not found anywhere -> ReferenceError.

// let x = "global";
// function outer() {
//     function inner() {
//         console.log(x);   // not in inner, not in outer -> found in global -> "global"
//     }
//     inner();
// }
// outer();

// shadowing: inner scope declares same-name variable -> hides the outer one,
// ONLY within that inner scope. outer variable is untouched outside it.

// let x = "global";
// function test() {
//     let x = "local";   // shadows outer x
//     console.log(x);     // "local"
// }
// test();
// console.log(x);         // "global" -> untouched


// IMPORTANT TRAP: if var/let/const with a name is declared ANYWHERE inside a
// function, that name becomes LOCAL to the WHOLE function from the top --
// even lines BEFORE the declaration are affected (TDZ for let/const).

// let x = 5;
// function outer() {
//     console.log(x);   // ReferenceError (TDZ) -- NOT 5! local x below makes x local to whole function
//     let x = 20;
// }
// outer();

// same case but with var -> gives undefined instead of ReferenceError (no TDZ for var)
// let x = 5;
// function outer() {
//     console.log(x);   // undefined (not 5) -- var x below hoists x as local to whole function
//     var x = 20;
// }
// outer();

// ONLY if there's no local re-declaration at all, does it correctly reach the
// outer/global variable via the scope chain, and reassignment there affects the
// real outer variable (works for let/var; const can never be reassigned, TypeError).


// ---- PARAMETER re-declare / re-assign rules ----

// function outer(x) {
//     x = 100;          // OK -> reassigning a parameter is always fine
// }

// function outer(x) {
//     let x = 10;        // SyntaxError: Identifier 'x' has already been declared
// }
// function outer(x) {
//     var x = 10;        // OK! var allows redeclaration -> treated as reassignment
//     console.log(x);     // 10
// }
// - parameter is function-scoped, behaves like it's already declared in that scope
// - let/const cannot redeclare an existing identifier in the same scope -> SyntaxError
// - var CAN redeclare in the same scope -> just reassigns, no error


// ---- undefined: when does a parameter actually become undefined ----
// a parameter is undefined in exactly 2 situations:
// 1) nothing at all passed for it
// 2) undefined explicitly passed for it
// everything else (null, 0, "", false) is a REAL argument, not "empty"

// function test(a) { console.log(a); }
// test();            // undefined
// test(undefined);   // undefined
// test(null);        // null
// test(0);           // 0
// test("");          // ""
// test(false);        // false


// ---- return ----
// no return statement written -> function returns undefined automatically
// (code inside still runs fully, just the return VALUE is undefined)

// function testFn() {
//     console.log("hello");
// }
// console.log(testFn());   // prints "hello", then logs: undefined



// ============================================================
// ARROW FUNCTIONS
// ============================================================

// syntax: const name = (params) => { body }
// - no "function" keyword
// - no name written before the parentheses (name only comes from the variable)

// function () => {}                    // SyntaxError -> cannot mix function keyword with arrow syntax


// ---- PARENTHESES RULES ----

// const zero = () => "Hi";              // 0 params -> () REQUIRED
// const one = x => x * 2;               // 1 param  -> () OPTIONAL (works with or without)
// const oneWithParens = (x) => x * 2;   // also valid
// const two = (a, b) => a + b;          // 2+ params -> () REQUIRED

// const zero = => "Hi";        // SyntaxError -> 0 params MUST have ()
// const two = a, b => a + b;   // SyntaxError -> 2+ params MUST have ()


// ---- ONE-LINER (implicit return) ----

// no curly braces -> single expression is AUTOMATICALLY returned, no "return" keyword

// const double = x => x * 2;
// console.log(double(5));   // 10 -> implicit return

// WITH curly braces but no return -> returns undefined (braces = full function body block now)

// const double = x => { x * 2 };
// console.log(double(5));   // undefined

// WITH curly braces AND return -> works normally

// const double = x => { return x * 2; };
// console.log(double(5));   // 10

// RULE: no braces -> single expression auto-returned.
//       braces added -> turns off auto-return, must write "return" explicitly
//       or it defaults to undefined, exactly like a regular function.


// ---- RETURNING AN OBJECT LITERAL FROM A ONE-LINER (the classic trap) ----

// const makeObj = () => { name: "Swaraj" };
// console.log(makeObj());   // undefined  <-- TRAP!
// reason: JS sees { } right after => and assumes it's a function BODY, not an
// object. Inside, "name: 'Swaraj'" is read as a LABEL, not an object property.
// no return written -> undefined.

// FIX 1 -> wrap the object in parentheses (tells JS "this is an expression"):
// const makeObj = () => ({ name: "Swaraj" });
// console.log(makeObj());   // { name: "Swaraj" }

// FIX 2 -> use explicit braces + return:
// const makeObj = () => { return { name: "Swaraj" }; };
// console.log(makeObj());   // { name: "Swaraj" }

// after => cannpt use thereturn gives syntax error
 
// and aslo :const makeObj = () => {  { name: "Swaraj" }; }; // undefined -— but NO syntax error

// ---- ternary as a one-liner arrow body ----

// const checkAge = age => age >= 18 ? "Adult" : "Minor";
// console.log(checkAge(20));  // "Adult"
// console.log(checkAge(15));  // "Minor"


// ---- ARROW FUNCTION HOISTING ----
// same as function expression (since arrow fn is stored in a variable)
// depends on var/let/const:

// sayHi();  // TypeError (var) or ReferenceError/TDZ (let/const) -- same rules as function expressions
// const sayHi = () => console.log("Hi");


// ---- ARROW FUNCTIONS DO NOT HAVE THEIR OWN `arguments` ----

// function outer() {
//     const inner = () => {
//         console.log(arguments);   // borrows arguments from OUTER (regular function)
//     };
//     inner();
// }
// outer(1, 2, 3);  // logs Arguments [1, 2, 3] -- borrowed from THIS call of outer
// outer(9);        // logs Arguments [9]       -- borrowed from THIS call of outer
// note: inner() itself is called with zero args both times -- doesn't matter,
// arrow has no arguments of its own to look at anyway.

// if arrow is written directly in global area (no enclosing regular function):
// const arrowFn = () => {
//     console.log(arguments);  // ReferenceError: arguments is not defined
// };
// arrowFn();
// (different from `this`, which falls back to window at global level.
//  `arguments` has NO fallback at all -- if the whole chain is arrows only, it errors)

// if BOTH outer and inner are arrow functions -> borrowing fails all the way up
// const outer = () => {
//     const inner = () => {
//         console.log(arguments);  // ReferenceError -- outer has no arguments of its own either
//     };
//     inner();
// };
// outer(1, 2, 3);


// ---- REST PARAMETERS (...) work fine in arrow functions ----
// NOT the same thing as the `arguments` object!

// const inner = (...nums) => {
//     console.log(nums);        // [1, 2, 3] -- works perfectly, real array
//     console.log(arguments);   // still ReferenceError if no enclosing regular function
// };
// inner(1, 2, 3);

// rest param -> just a normal variable you named yourself, always a REAL array
//               (even if empty: [] when nothing passed)
// arguments   -> special built-in keyword, only regular functions get it automatically,
//               array-LIKE object, not a real array
// they look similar in purpose but are NOT the same mechanism at all

// rest params must always be the LAST parameter:
// function test(a, ...rest, b) {}   // SyntaxError -- rest must be at the end



// ============================================================
// THIS KEYWORD
// ============================================================

// `this` = a keyword that means "whoever is calling me right now" -- not fixed,
// depends on HOW / WHERE a function is used.


// ---- REGULAR FUNCTIONS & FUNCTION EXPRESSIONS ----
// `this` is like a name tag the function wears, decided FRESH every time it's called:
// - dot + object right before the () call  -> this = that object, FOR THIS CALL ONLY
// - no dot / no object (called plain)       -> JS falls back to default owner -> this = window

// const car = { brand: "Honda", showBrand: function () { console.log(this.brand); } };
// car.showBrand();   // "Honda" -- dot + car before call -> this = car

// function sayHi() { console.log(this); }
// sayHi();   // window -- no dot, no object -> fallback to window


// classic trap -- extracting a method loses its `this`:

// const wallet = {
//     balance: 500,
//     showBalance: function () { console.log(this.balance); }
// };
// const getBalance = wallet.showBalance;  // just copies the function, doesn't call it
// getBalance();          // undefined -- called plain, no dot -> this = window
// wallet.showBalance();  // 500       -- dot + wallet before call -> this = wallet


// ---- ARROW FUNCTIONS & `this` ----
// arrow functions have NO `this` of their own. they NEVER check dots or how
// they're called -- even if called like object.arrowFn(). instead, they look at
// WHERE they are WRITTEN and copy whatever `this` already belongs there:
// - written inside a regular function -> copies THAT regular function's `this`
//   (whatever it was, based on how the regular function itself was called)
// - written alone in the plain/global area (not inside any function) -> copies window

// const account = {
//     amount: 1000,
//     regularFn: function () { console.log(this.amount); },
//     arrowFn: () => { console.log(this.amount); }
// };
// account.regularFn();  // 1000     -- regular fn checks HOW called -> dot+account -> this=account
// account.arrowFn();    // undefined -- arrow ignores the dot completely, written in global
//                        //             area (object literal doesn't create its own this scope)
//                        //             -> copies this = window


// nested arrow inside a regular function -- "rides along" with the regular fn's this:

// const dog = {
//     sound: "Woof",
//     bark: function () {                 // regular fn, this decided by how it's called
//         const inner = () => {           // arrow written inside bark -> copies bark's this
//             console.log(this.sound);
//         };
//         inner();
//     }
// };
// dog.bark();   // "Woof" -- bark called as dog.bark() -> bark's this = dog -> inner copies dog

// const wallet = {
//     balance: 500,
//     showBalance: function () {
//         const inner = () => { console.log(this.balance); };
//         inner();
//     }
// };
// const getBalance = wallet.showBalance;
// getBalance();            // undefined -- showBalance called plain -> its this = window
//                          //              -> inner (arrow) copies window
// wallet.showBalance();    // 500       -- showBalance called as wallet.showBalance() -> this = wallet
//                          //              -> inner (arrow) copies wallet

// IMPORTANT: arrow "locks" this AT CREATION TIME, not once-forever globally.
// if the arrow is created INSIDE a regular function, it gets recreated fresh
// EVERY TIME that regular function runs -- so it can lock onto a DIFFERENT this
// each call (as shown above: window one call, wallet the next).
// only an arrow written directly at the top level / object-literal level (code
// that runs once, at load time) truly locks onto ONE this, permanently.


// ============================================================
// QUICK SUMMARY TABLE
// ============================================================

// Regular function:
//   this = decided FRESH per call -> dot+object before () => that object, else window

// Arrow function:
//   this = NO own this -> copies from where it's WRITTEN (nearest regular fn's
//   this, or window if written in global area) -> locked at creation, recreated
//   each time the surrounding code that creates it runs

// arguments:
//   only regular functions get it automatically (array-like object)
//   arrow functions borrow it from nearest enclosing regular function
//   no regular function anywhere in the chain -> ReferenceError (no window fallback)

// rest parameters (...name):
//   works normally in both regular and arrow functions, always a real Array
