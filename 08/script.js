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


// ===== 09 - ARRAYS (PART 2: slice, splice, reverse) =====

// ---------- 1. slice(start, end) -> COPY, end NOT included ----------
const a = [10, 20, 30, 40, 50];
console.log(a.slice(1, 3)); // [20, 30] -> index 1 and 2 (3 excluded)
console.log(a.slice(2)); // [30, 40, 50] -> till the end
console.log(a.slice(-2)); // [40, 50] -> negative = count from end
console.log(a.slice(3, 1)); // [] -> start after end, no error
console.log(a); // [10, 20, 30, 40, 50] -> original UNCHANGED

const copy = a.slice(); // full copy
console.log(copy === a); // false -> new array

// ---------- 2. splice(start, deleteCount, ...items) -> CHANGES original ----------
const b = [1, 2, 3, 4, 5];
console.log(b.splice(1, 2)); // [2, 3] -> returns REMOVED items (array)
console.log(b); // [1, 4, 5] -> original changed

const c = [1, 2, 5];
console.log(c.splice(2, 0, 3, 4)); // [] -> nothing removed
console.log(c); // [1, 2, 3, 4, 5] -> inserted at index 2

const d = ["a", "b", "c"];
console.log(d.splice(1, 1, "X")); // ["b"] -> replace
console.log(d); // ["a", "X", "c"]

const e = [1, 2, 3, 4];
console.log(e.splice(2)); // [3, 4] -> no count = remove till end
console.log(e); // [1, 2]

// ---------- 3. reverse() -> CHANGES original, returns SAME array ----------
const r = [1, 2, 3];
const rev = r.reverse();
console.log(r); // [3, 2, 1] -> original reversed
console.log(rev === r); // true -> same array, not a copy

const r2 = [1, 2, 3];
const rev2 = r2.slice().reverse(); // copy first, then reverse
console.log(r2, rev2); // [1, 2, 3] [3, 2, 1]


// ===== 10 - ARRAYS (PART 3: includes, indexOf) =====

const n = [10, 20, 30, 20];
console.log(n.includes(20)); // true -> returns true/false
console.log(n.indexOf(20)); // 1 -> FIRST match index
console.log(n.indexOf(99)); // -1 -> not found
console.log(n.includes("20")); // false -> strict check (no coercion)
console.log(n.indexOf("20")); // -1

const withNaN = [1, NaN];
console.log(withNaN.includes(NaN)); // true
console.log(withNaN.indexOf(NaN)); // -1 -> indexOf uses ===, NaN !== NaN

// Trap: indexOf in if
if (n.indexOf(10)) {
  console.log("found");
} else {
  console.log("not found"); // runs! indexOf = 0 -> falsy
}


// ===== 11 - ARRAYS (PART 4: forEach, map, filter, find, findIndex) =====

// ---------- 1. forEach -> just loops, returns undefined ----------
const list = [5, 10, 15];
list.forEach(function (el, i, arr) {
  console.log(el, i, arr[i]); // 5 0 5 | 10 1 10 | 15 2 15
});
const res = list.forEach((el) => el * 2);
console.log(res); // undefined -> forEach does NOT create a new array

// Trap: e[i] inside forEach
list.forEach((e, i) => console.log(e[i])); // undefined x3 -> e is a number, not the array

// Empty array -> nothing runs
[].forEach(() => console.log("hi")); // (prints nothing)

// ---------- 2. map -> NEW array, same length ----------
const doubled = list.map((el) => el * 2);
console.log(doubled); // [10, 20, 30]
console.log(list); // [5, 10, 15] -> original unchanged

// Trap: curly braces without return
const noReturn = list.map((el) => {
  el * 2;
});
console.log(noReturn); // [undefined, undefined, undefined]

// ---------- 3. filter -> NEW array of items where callback is truthy ----------
const big = list.filter((el) => el > 8);
console.log(big); // [10, 15]
console.log(list.filter((el) => el > 100)); // [] -> no match = empty array

const vals = [0, 1, "", "hi", null, " "];
console.log(vals.filter((v) => v)); // [1, "hi", " "] -> " " is truthy

// ---------- 4. find / findIndex -> FIRST match only ----------
const users = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 3, name: "B" },
];
console.log(users.find((u) => u.name === "B")); // { id: 2, name: "B" } -> first match
console.log(users.find((u) => u.id === 9)); // undefined -> not found
console.log(users.findIndex((u) => u.name === "B")); // 1
console.log(users.findIndex((u) => u.id === 9)); // -1

// find vs filter
console.log(users.filter((u) => u.name === "B").length); // 2 -> filter gives ALL


// ===== 12 - ARRAYS (PART 5: reduce) =====

// reduce((acc, curr) => ..., initialValue)
const nums2 = [1, 2, 3, 4];
console.log(nums2.reduce((acc, curr) => acc + curr, 0)); // 10
console.log(nums2.reduce((acc, curr) => acc + curr)); // 10 -> no initial: acc = first element

// Initial value changes the result type
console.log(nums2.reduce((acc, curr) => acc + curr, "")); // "1234" -> string concat

// Find largest with reduce
console.log(nums2.reduce((acc, curr) => (curr > acc ? curr : acc))); // 4

// Empty array
console.log([].reduce((acc, curr) => acc + curr, 0)); // 0 -> initial returned
// [].reduce((acc, curr) => acc + curr); // TypeError: Reduce of empty array with no initial value

// Trap: forgetting return in braces
console.log(nums2.reduce((acc, curr) => { acc + curr; }, 0)); // undefined


// ===== 13 - ARRAYS (PART 6: holes and length) =====

const holes = [1, , 3]; // hole at index 1
console.log(holes.length); // 3
console.log(holes[1]); // undefined
console.log(1 in holes); // false -> slot is truly empty

holes.forEach((v, i) => console.log(i, v)); // 0 1 | 2 3 -> hole SKIPPED
console.log(holes.map((v) => v * 2)); // [2, empty, 6] -> hole KEPT

// length can be changed
const L = [1, 2, 3, 4, 5];
L.length = 2;
console.log(L); // [1, 2] -> extra items deleted
L.length = 4;
console.log(L); // [1, 2, empty × 2]

const L2 = [1, 2, 3];
L2.length = 0;
console.log(L2); // [] -> quick way to empty


// ===== 14 - ARRAYS (PART 7: mutation vs copy) =====

// ---------- 1. Assignment = same array (reference) ----------
const orig = [1, 2, 3];
const ref = orig;
ref.push(4);
console.log(orig); // [1, 2, 3, 4] -> both point to same array
console.log(ref === orig); // true

// ---------- 2. slice() = new array ----------
const cp = orig.slice();
cp.push(5);
console.log(orig, cp); // [1, 2, 3, 4] [1, 2, 3, 4, 5]

// ---------- 3. Trap: objects inside a copy are SHARED ----------
const people = [{ name: "A" }, { name: "B" }];
const peopleCopy = people.slice();
peopleCopy[0].name = "Z";
console.log(people[0].name); // "Z" -> same object inside both arrays
peopleCopy[1] = { name: "New" };
console.log(people[1].name); // "B" -> replacing a slot doesn't affect original

// ---------- 4. Which methods change the original? ----------
// CHANGE original: push, pop, shift, unshift, splice, reverse
// NEW array/value: slice, map, filter, find, findIndex, includes, indexOf, reduce
// forEach: returns undefined (no new array)

// ---------- 5. Trap: map with objects ----------
const items = [{ q: 1 }, { q: 2 }];
const changed = items.map((it) => {
  it.q = it.q * 10;
  return it;
});
console.log(items); // [{ q: 10 }, { q: 20 }] -> original objects mutated!
console.log(changed === items); // false -> new array, same objects


const q = [2, 3];
const r1 = q.unshift(1);
const r2 = q.shift();
q.push(4);
console.log(q, r1, r2, q[0]); // [2, 3, 4] 3 1 2
