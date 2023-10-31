document.addEventListener("DOMContentLoaded", () => {
  const effectText = document.querySelector(".effectTxt");
  const textArray = [
    "Dynamic",
    "Scalable",
    "Responsive",
    "Accessible",
    "Interactive",
    "Performant",
  ];

  const textBgArray = [
    "linear-gradient(90deg, rgb(91, 204, 212), rgb(68, 106, 211))",
    "linear-gradient(90deg,rgb(184, 187, 35), rgb(225, 45, 231))",
    "linear-gradient(90deg,rgb(13, 173, 236),rgb(135, 202, 199))",
    "linear-gradient(90deg, rgb(24, 194, 33), rgb(37, 156, 101))",
    "linear-gradient(90deg, rgb(223, 88, 25), rgb(185, 147, 42))",
    "linear-gradient(90deg, rgb(228, 207, 26), rgb(219, 94, 36))",
  ];

  let count = 0;

  function updateText() {
    effectText.classList.remove("dropDown");
    setTimeout(() => {
      effectText.style.backgroundImage = textBgArray[count];
      effectText.textContent = textArray[count];
      effectText.classList.add("dropDown");
      count = (count + 1) % textArray.length;
    }, 150);
  }

  updateText();
  setInterval(updateText, 2500);
});
