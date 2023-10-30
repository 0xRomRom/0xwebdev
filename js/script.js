const effectText = document.querySelector(".effectTxt");
const textArray = [
  "Dynamic",
  "Scaleable",
  "Responsive",
  "Interactive",
  "Efficient",
  "Performant",
];

const bgArray = [
  "linear-gradient(90deg, rgb(41, 41, 241), rgb(68, 106, 211))",
  "linear-gradient(90deg, rgb(128, 60, 173), rgb(68, 106, 211))",
  "linear-gradient(90deg, rgb(30, 113, 190), rgb(30, 59, 114))",
  "linear-gradient(90deg, rgb(223, 88, 25), rgb(185, 147, 42))",
  "linear-gradient(90deg, rgb(24, 194, 33), rgb(37, 156, 101))",
  "linear-gradient(90deg, rgb(82, 144, 238), rgb(37, 156, 101)))",
];

let count = 0;
setInterval(() => {
  setTimeout(() => {
    effectText.classList.remove("dropDown");
  }, 2300);
  const len = textArray.length;
  effectText.innerHTML = textArray[count];
  effectText.style.backgroundImage = bgArray[count];
  effectText.classList.add("dropDown");
  count++;
  if (count === len) count = 0;
}, 2500);
