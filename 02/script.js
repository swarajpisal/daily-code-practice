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
// scope - global
// re assigned - yess
// acess - kahi par bhi acess karo
// {
//     var a = 10;
//     // console.log(a);

// }

//      console.log(a);


// let ->
// re-declared - no within same scope
// scope - local
// re assigned - yess
// acess - sirf usi block ke andar acess karo
// {
//     let a = 10;
//     // console.log(a);

// }

//      console.log(a); ==> error

// const ->
// re-declared - no within same scope
// scope - local
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

// 1 one i learn was the valid FirstName okk:

// in firstName must be a-z or A-Z , then numbers can be at middle and in end not at start
// then the special sysmbol like $ and _ can used not other symbol 
// that symbol like $ and _ can be used at start,middle or end
// then the no - can used nor at start,middle nor end
// then no space also 
// then no let, retur, function, const, var
// the mostly used the firstName is this camel case 
// then firstName if the FirstName is this or Firstname like this it is used in calsses na

// then in js the data types are assigned dynamically 
// var ===> scope function scope,re-declared,re-assigned,declared and intliazed later 
// and hoisting in var can be and intliazed  and give undefined automatically

// let give me example
// console.log(abc); =======> undefined
// var abc = test();

// function test(params) {
//     var a = 4; // declared + intliazed
//     var a = 5; // re- declared + intliazed+ re assigned

//      a = 4; // re- declared + intliazed + re assigned 

//      console.log(a); 4 // give 4 here 

//      if (true){
// a = 6;
//         console.log(a); // gives 6
//      }

//      console.log(a); // 6

// }

// // test();
// console.log(a); // error as it is function scoped na 




// let ===> scope block scope,re-declared not ,re-assigned,declared and intliazed later 
//  and hoisting in let can be and not intiliazed as it give reference  error as temporal dead zone


// // console.log(abc); =====> error reference erro tdz

// let abc = test();
// console.log(abc); // =======> works
// function test(params) {
//     let a = 4; // declared + intliazed
//     let a = 5; // not re- declared give error as syntax


//      a = 6; //can be  re assigned 

//      console.log(a);  // give 6 here 

//      if (true){
//     let a = 7;
//      let a = 5; // not re- declared give error

//     a = 9; // re -asigened
//         console.log(9); // gives 9
//      }

//      console.log(a); // 6
//     //  if thet let decalred inside the function if not then would have given this console.log(a) as error 

// }

// test();
// console.log(a); // error as it is block  scoped na 




// const ===> scope block scope,re-declared not ,not re-assigned,not declared and intliazed later 
//  and hoisting in const can be and not intiliazed as it give reference  error as temporal dead zone


// // console.log(abc); =====> error reference erro tdz

// const abc = test();
// console.log(abc); // =======> works
// function test(params) {
//     const a = 4; // declared + intliazed
//     const a = 5; // not re- declared give error as syntax


//      a = 6; //cannnot can be  re assigned  as it give type error

//      console.log(a);  //eror 

//      const abc ; // error as it give syntax error 
//     //  as it wanted the decalred and intliazed at same


//      if (true){
//     lconst  a = 7;
//      coonst a = 5; // not re- declared give error guve an eror as syntax

//     a = 9; // cannnot can be  re assigned  as it give type error re -asigened
//         console.log(9); // gives eroro 
//      }

//      console.log(a); // 4
//     //  if thet const decalred inside the function if not then would have given this console.log(a) as error 

// }

// test();
// console.log(a); // error as it is block  scoped na 

// while const is not immutable for non -primitive data types like array or object  which has typeof as object
// so variable in objects  holds  the reference of them not values 
// while in primitive data types the variables hold the value diretly of that primitive value 
// not reference okk

// const abc = {name: "swaraj", age:"25"};
// abc.name = "swaraj patil"; // this is valid as it is mutating the value of the object not reassigning the whole object
// console.log(abc); // {name: "swaraj patil", age:"25"}

// abc.city = "pune"; // this is valid as it is adding a new property to the object not reassigning the whole object
// console.log(abc); // {name: "swaraj patil", age:"25", city: "pune"}

// console.log(abc.name); // swaraj patil
// console.log(abc.age); // 25

