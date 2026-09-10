// console.log("let work on variables and data types");

// var firstName = "John";
// var $firstName = "John";
// var first$Name = "John";
// var firstName$ = "John";
// var _firstName = "John";
// var first_Name = "John";
// var firstName_ = "John";
// var firstName_ = "John";
// var first1Name_1 = "John";
// var first1Name- = "John";
// var -first1Name- = "John";
// var first1 Name = "John";
// var !firstName = "John";




// var ->
// re-declared - yes
// scope - function-scope
// re assigned - yess
// acess - kahi par bhi acess karo
// {
//     var a = 10;
//     // console.log(a);

// }

//      console.log(a);


// let ->
// re-declared - no within same scope
// scope - block-scope
// re assigned - yess
// acess - sirf usi block ke andar acess karo
// {
//     let a = 10;
//     // console.log(a);

// }

//      console.log(a); ==> error

// const ->
// re-declared - no within same scope
// scope - block-scope
// re assigned - no
// acess -  sirf usi block ke andar acess karo
// {
//     const a = 10;
//     // console.log(a);

// }

//      console.log(a);


// ---- TEST 1: var ----
// console.log(a);
// var a = 10;
// console.log(a);

// ---- TEST 2: let (comment this out first, uncomment to test) ----
// console.log(b);
// let b = 20;
// console.log(b);

// ---- TEST 3: const (comment this out first, uncomment to test) ----
// console.log(c);
// const c = 30;
// console.log(c);


// ---- const with OBJECT (non-primitive) ----
// const obj = { name: "John", age: 25 };

// console.log(obj); // { name: 'John', age: 25 }

// // ✅ Mutating a property - this WORKS
// obj.name = "Doe";
// console.log(obj); // { name: 'Doe', age: 25 }

// // ✅ Adding a new property - this also WORKS
// obj.city = "Mumbai";
// console.log(obj); // { name: 'Doe', age: 25, city: 'Mumbai' }

// // ❌ Reassigning the whole object - this FAILS
// obj = { name: "Smith", age: 30 };
// console.log(obj); // TypeError: Assignment to constant variable.


//  const obj = { name: "John", age: 25 };

//  console.log(obj.city="Mumbai"); // Mumbai
//  console.log(obj.age="26"); // 26;
// console.log(obj); // { name: 'John', age: 26, city: 'Mumbai' }


// Declaration = creating the variable
// Initialization = giving it its first value
// Reassignment = changing its value later
// Redeclaration = declaring the same variable again


