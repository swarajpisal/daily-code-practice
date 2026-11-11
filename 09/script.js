// ===== 09 - DOM (till getElementById) =====

// ---------- 1. window vs document ----------
// window = whole browser tab (global object), document = the HTML page inside it
console.log(typeof window); // "object"
console.log(window.document === document); // true -> document lives inside window
console.log(document.title); // "09 - DOM Basics"
document.title = "DOM Practice"; // changes the tab name
console.log(document.title); // "DOM Practice"
console.log(document.head); // <head>...</head>
console.log(document.body); // <body>...</body>

// ---------- 2. alert / prompt / confirm (return values) ----------
// console.log(alert("hi")); // undefined -> alert returns nothing
// console.log(prompt("Name?")); // typed text as STRING | "" if OK with empty | null if Cancel
// console.log(confirm("Sure?")); // true (OK) | false (Cancel)
// prompt("Age?") -> "25" is a string, not a number

// ---------- 3. document.write ----------
// document.write("<h2>Hi</h2>"); // writes HTML into the page
// if called AFTER the page has loaded, it wipes the whole page

// ---------- 4. querySelector vs querySelectorAll ----------
const firstPara = document.querySelector(".para"); // FIRST match only
console.log(firstPara); // <p class="para">First para</p> -> one element = full tag

const allPara = document.querySelectorAll(".para"); // ALL matches
console.log(allPara); // NodeList(3) [p.para, p#second.para, span.para] -> list = tag#id.class
console.log(allPara.length); // 3

console.log(document.querySelector(".nothing")); // null -> no match
console.log(document.querySelectorAll(".nothing").length); // 0 -> empty NodeList, not null

// ---------- 5. Selectors: space vs no space ----------
console.log(document.querySelectorAll("div .para").length); // 3 -> space = .para INSIDE a div
console.log(document.querySelectorAll("p.para").length); // 2 -> no space = SAME element (p AND .para)
console.log(document.querySelectorAll("#box p").length); // 2 -> p inside #box
console.log(document.querySelectorAll("li.item.active").length); // 1 -> li with both classes
console.log(document.querySelector("#list .active").innerText); // "Two"

// ---------- 6. innerHTML vs innerText ----------
const second = document.querySelector("#second");
console.log(second.innerHTML); // "Second <b>bold</b> para" -> with tags
console.log(second.innerText); // "Second bold para" -> only visible text

const heading = document.querySelector("#heading");
heading.innerHTML = "<i>Italic heading</i>"; // tag is rendered -> shows italic text
console.log(heading.innerText); // "Italic heading"
heading.innerText = "<i>Plain heading</i>"; // tag shown as TEXT on the page
console.log(heading.innerText); // "<i>Plain heading</i>"

// ---------- 7. children vs parentElement ----------
const box = document.querySelector("#box");
console.log(box.children); // HTMLCollection(3) [p.para, p#second.para, span.para]
console.log(box.children.length); // 3
console.log(box.children[1].id); // "second" -> read to the END of the line
console.log(box.children[3]); // undefined -> past the end

const bold = document.querySelector("b");
console.log(bold.parentElement.id); // "second" -> parent = tag it is INSIDE
console.log(box.children[0].parentElement.id); // "box"
console.log(document.querySelector("#list").parentElement); // <body>...</body> -> not the div above it

// ---------- 8. NodeList vs HTMLCollection + forEach traps ----------
// querySelectorAll -> NodeList -> forEach works
allPara.forEach((e, i) => console.log(i, e.innerText)); // 0 "First para" | 1 "Second bold para" | 2 "Span text"

// children -> HTMLCollection -> NO forEach
// box.children.forEach((e) => console.log(e)); // TypeError: box.children.forEach is not a function
for (let i = 0; i < box.children.length; i++) {
  console.log(box.children[i].innerText); // "First para" | "Second bold para" | "Span text"
}

// Trap: e[i] inside forEach
allPara.forEach((e, i) => console.log(e[i])); // undefined x3 -> e is ONE element, not the list
console.log(allPara[0].innerText); // "First para" -> list[i] works outside

// Empty list + forEach -> nothing runs
document.querySelectorAll(".nothing").forEach(() => console.log("hi")); // (prints nothing)

// ---------- 9. getElementById (no #) ----------
console.log(document.getElementById("box").className); // "card main"
console.log(document.getElementById("#box")); // null -> no # here (that's for querySelector)
console.log(document.getElementById("nothing")); // null

// ---------- 10. className vs classList.add ----------
const btn = document.getElementById("btn");
console.log(btn.className); // "btn primary" -> string
btn.classList.add("big"); // ADDS, keeps others
console.log(btn.className); // "btn primary big"
btn.classList.add("big"); // already there -> no duplicate
console.log(btn.className); // "btn primary big"
btn.className = "danger"; // REPLACES all classes
console.log(btn.className); // "danger"

// ---------- 11. el.style (camelCase) vs setAttribute("style") (hyphen) ----------
const styled = document.getElementById("styled");
console.log(styled.style.color); // "red"
console.log(styled.style.fontSize); // "20px" -> camelCase in JS
// styled.style.font-size = "30px"; // SyntaxError -> hyphen not allowed here

styled.style.backgroundColor = "yellow"; // ADDS one property, keeps the others
console.log(styled.getAttribute("style")); // "color: red; font-size: 20px; background-color: yellow;"

styled.setAttribute("style", "border: 1px solid black;"); // REPLACES the whole style attribute
console.log(styled.style.color); // "" -> red is gone
console.log(styled.getAttribute("style")); // "border: 1px solid black;"

// ---------- 12. getAttribute / setAttribute / removeAttribute ----------
const link = document.getElementById("link");
console.log(link.getAttribute("href")); // "https://example.com"
link.setAttribute("href", "https://google.com"); // change existing
console.log(link.getAttribute("href")); // "https://google.com"

console.log(link.getAttribute("target")); // null -> not present
link.setAttribute("target", "_blank"); // add new
console.log(link.getAttribute("target")); // "_blank"

link.removeAttribute("title");
console.log(link.getAttribute("title")); // null

const pic = document.getElementById("pic");
pic.setAttribute("class", "logo"); // REPLACES whole class attribute
console.log(pic.className); // "logo" -> "img" is gone

// ---------- 13. remove() ----------
const rm = document.getElementById("remove-me");
rm.remove(); // removed from the page
console.log(document.getElementById("remove-me")); // null -> not in the DOM anymore
