// console.log("---- TEST 1: var ----");


// DataType:
// Numbers;
// string
// boolean
// null
// undefined
// Objects

// let a = 10; // number
// console.log(typeof(a));


// let name = "Swaraj"; // strings
// console.log(typeof(name));

// let firstName = 'Swaraj'; // strings kuch bhi ho shakta like ki numbers Symbol anything
// let lastName = 'Sharma'; // strings

// console.log(firstName + ' ' + lastName); // SwarajSharma


// let abc = true; // boolean only true or false
// console.log(typeof(abc));


// const a1 = null; // null always any
// console.log(typeof(a1));


// let b ; // undefined
// console.log(typeof(b));


// const obj  = {name:"sawaraj", age: "25"}; // object
// console.log(typeof(obj));

// const arr = [1,2,3,4,5]; // object
// console.log(typeof(arr));



// // to prove 1 and 0 is true and false

// let isLooged = 1; // true
// console.log(isLooged +  0); // 1



// let isLooged_1 = 0; // false
// console.log(isLooged_1 +  0) // 0

// if (1){
//     console.log("1 is true");
// }

// if (0){
//     console.log("true");
// }

// null and undefined 
// koi cheese exist karti var with no no value is what we called as null

// koi chesse koi hum delete karna chate hai memory se hum chate hai nhi hai wo ho usa hum undefined karte hai


// while in object propeerty ko hum , sa separate karta hai if not done na it give syntax error


// Opearators:

// add +
// subtract -
// multiply *
// divide /
// modulus %


// let num1 = 100;
// let num2 = 20;

// console.log(num1 + num2); // 120
// console.log(num1 - num2); // 80
// console.log(num1 * num2); // 2000
// console.log(num1 / num2);   // normal division
// console.log(num1 % num2);   // remainder



// string + string ==> gives string    
// string + number ==> gives string
// number + number ==> gives number

// then for -,*,%,/ does normal calculation and gives number

// if either side is string just concatenate in add 

//  while in other operations likke -,*,/,% 
// if string just convert that to number and then do the operation and give number as output



// and then Nan which is not a number 
// in js when doing operations does not give valid numbers or value is Nan


// two types of Nan like old and modern

// old 

// isNan();
// if "abc" ; converts to Number as ("abc") = NaN
// so true 

// while for ("123") ; converts to Number as ("123") = 123
// so false

// while for ("") ; converts to Number as ("") = 0
// so false

// while for (" ") ; converts to Number as (" ") = 0
// so false

// while for (0) ; converts to Number as (0) = 0
// so false

// while for (true) ; converts to Number as (true) = 1
// so false

// while for (false) ; converts to Number as (false) = 0
// so false

// while for (null) ; converts to Number as (null) = 0
// so false

// while for (undefined) ; converts to Number as (undefined) = NaN
// so true


// while in moder Number.isNan();

// just check if the value is Nan or not and does not convert to number

// so for ("abc") ; is not nan  false
// so for ("123") ; is not nan false
// so for ("") ; is not nan  false
// so for (" ") ; is not nan  false
// so for (Nan) ; is not nan as  true
// so for ("true") ; is not nan as  false
// so for ("false") ; is not nan as  false
// so for ("undefined") ; is not nan as  false
// so for ("null") ; is not nan as  false
// so for (0) ; is not nan as  false


// then while doing operations like -,*,/,%

// like  1/0 is Infinity
// like  0/1 is 0
// like  0/0 is Nan

// like  1%0 is Nan
// like  0%1 is 0
// like  0%0 is NaN

// also in *
// if 2*undefibed is Nan
// same in -
// if 2-undefined is Nan

// then the increemnet and decrement operators
// x++, x--, ++x, --x

// which are 
// post increment and post decrement
// pre increment and pre decrement

// increemnt by 1 and decrement by 1

// while in post increment and post decrement first it gives the value and then increment or decrement by 1

// while in pre increment and pre decrement first it increment or decrement by 1 and then gives the value



// then assignment operators

// // =, +=, -=, *=, /=, %=

// let x = 4;
// x += 2; // x = x + 2;
// x -= 2; // x = x - 2;
// x *= 2; // x = x * 2;
// x /= 2; // x = x / 2;
// x %= 2; // x = x % 2;   


// then the logical operators

// where && menas both true 
// and or means either one true
// and not ! means flips the result of true to false and false to true

// and also and means first bad value like falsely value if not thne the last value if not get the first Falsely value
// and also or  means first good value like truely value if not thne the last value if not get the first truely value


// ternary opeator

// condition ? true : false

// let age = 18;
// let status = age>=18 ? "adult" : "minor";
// console.log(status); // adult   


// comparison operators

// ==, ===, !=, !==, >, <, >=, <=   

// in this doing if both side strings then use char code like lexicographical order which compare charcter by charcter until it find the difference and then return the result

// in lexicographical uppercase is 65-90 and lower caseis from 97-122
// and number are ffrom 48-57 like form 0 to 9
//  when to use is lexicographical order is if both side strings if not then compare the number and give the result
//Number() of 0 is 0, thn of false is also 0, true is 1 and "" is 0 and " " is 0, null is 0
// while  for the undefined is Nan and for the ("abc") is Nan and for the ("123") is also number

// and then the nan in comparison alway gives false ha same for undefined which is nan only 
// but null == undfined is true 

//  in boolean if string length is greater then 0 then it is true 
// falsey valid are 0,-0,false,"",null,undfined,nan

// in comparsion for [] is do [].istoString() which gives "" then if depends on operation

// same for object {} it doe ({}).istoString() which gives "[object Object]" which number is nan 

// console.log(Boolean(0)) to see if true or false 

// == is loosely equal which compare value and type after corecion

// === is tight equal which compare value and type without corecion

// the typeOf Corecion is means automatically conversion of values from one data type to another 
// it happens opeartion involved if different data types

//  0.1+0.2 == or === as 0.3 is false 

// then [] == [] and alsp [] === [] false 
// because array as data type object and in object compare them by refernce not by content or object 
// reference menas both variable point to same value

// let a = [];
// let b = a;

// // console.log(a == b); true 
// // console.log(a === b); true 



