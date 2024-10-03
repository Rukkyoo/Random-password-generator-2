const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let passwordBtn = document.getElementById("password-btn");
let passwordBox1 = document.getElementById("password-box1");
let passwordBox2 = document.getElementById("password-box2");
let copyBtn1 = document.getElementById("copy-btn1")
let copyBtn2 = document.getElementById("copy-btn2")


function generatePassword(length) {
  let password = "";
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

passwordBtn.addEventListener("click", function () {
  let password1 = generatePassword(12); // Generate a 12-character password
  let password2 = generatePassword(12); // Generate another 12-character password
  passwordBox1.textContent = password1;
  passwordBox2.textContent = password2;
  copyBtn1.textContent = "Copy Password"
  copyBtn2.textContent = "Copy Password"
});

function copyPasswordOne() {
 let passwordValOne = passwordBox1.textContent
console.log(passwordValOne)
 navigator.clipboard.writeText(passwordValOne)
 copyBtn1.textContent = "Copied!"

}

function copyPasswordTwo() {
 let passwordValTwo = passwordBox2.textContent
console.log(passwordValTwo)
 navigator.clipboard.writeText(passwordValTwo)
 copyBtn2.textContent = "Copied!"
}
