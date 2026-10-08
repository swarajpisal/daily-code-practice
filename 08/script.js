// ===== 08 - ARRAYS (BASICS PART 1) =====

// ---------- 1. What is an array ----------
const marks = [80, 90, 75];
console.log(marks); // [80, 90, 75]

// ---------- 2. Homogeneous vs Heterogeneous ----------
const nums = [1, 2, 3]; // homogeneous (all numbers)
const mixed = [1, "hi", true, null, { a: 1 }, [5]]; // heterogeneous
console.log(nums, mixed);

nums.push("hi"); // JS does not force a type
console.log(nums); // [1, 2, 3, "hi"] -> now heterogeneous

// ---------- 3. Syntax ----------
const empty = [];
const withValues = [1, 2, 3];
console.log(empty, withValues); // [] [1, 2, 3]

// ---------- 4. Index and length ----------
const x = [10, 20, 30];
console.log(x[0]); // 10
console.log(x[1]); // 20
console.log(x[x.length - 1]); // 30 -> last element
console.log(x[3]); // undefined -> past the end, no error
console.log(x.length); // 3

// ---------- 5. typeof and empty array ----------
console.log(typeof []); // "object"
console.log([].length); // 0
console.log(!![]); // true -> empty array is truthy
console.log([] == false); // true -> [] -> "" -> 0

// ---------- 6. Changing elements (const) ----------
const fruits = ["apple", "banana"];
fruits[1] = "kiwi"; // mutate -> allowed
console.log(fruits); // ["apple", "kiwi"]
// fruits = ["kiwi"]; // TypeError: Assignment to constant variable.

// ---------- 7. Writing past the end -> holes ----------
const h = [1, 2, 3];
h[5] = 9;
console.log(h); // [1, 2, 3, empty × 2, 9]
console.log(h.length); // 6
console.log(h[3]); // undefined

// ---------- 8. push and pop (END) ----------
const p = [10, 20];
console.log(p.push(30)); // 3 -> returns NEW LENGTH
console.log(p); // [10, 20, 30]
console.log(p.push(40, 50)); // 5 -> can add many
console.log(p.push()); // 5 -> adds nothing, no error

console.log(p.pop()); // 50 -> returns REMOVED element
console.log(p); // [10, 20, 30, 40]
console.log(p.pop(0)); // 40 -> argument ignored, still removes last
console.log([].pop()); // undefined -> no error

// ---------- 9. unshift and shift (START) ----------
const u = [20, 30];
console.log(u.unshift(10)); // 3 -> returns new length
console.log(u); // [10, 20, 30]
console.log(u.unshift(1, 2)); // 5 -> adds many, keeps order
console.log(u); // [1, 2, 10, 20, 30]

console.log(u.shift()); // 1 -> returns removed element
console.log(u); // [2, 10, 20, 30]
console.log(u.shift(4)); // 2 -> argument ignored, still removes first
console.log(u); // [10, 20, 30]

// ---------- 10. Trap: console.log shows CURRENT state ----------
const s = ["a"];
const p1 = s.push("b", "c");
const p2 = s.pop();
console.log(s, p1, p2, s.length); // ["a", "b"] 3 "c" 2

const q = [2, 3];
const r1 = q.unshift(1);
const r2 = q.shift();
q.push(4);
console.log(q, r1, r2, q[0]); // [2, 3, 4] 3 1 2
