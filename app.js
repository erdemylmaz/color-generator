const codes = [
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
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

const button = document.querySelector("button");
const code = document.querySelector("h1");
let hexCode = "";

createColor = () => {
  for (let x = 0; x < 6; x++) {
    let random = Math.floor(Math.random() * codes.length);
    hexCode += codes[random];
  }

  document.body.style.backgroundColor = `#${hexCode}`;
  code.innerHTML = `Hex Code: #${hexCode}`;

  hexCode = "";
};

button.addEventListener("click", createColor);
