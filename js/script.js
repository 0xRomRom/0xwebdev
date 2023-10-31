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

// CTAs
const toAbout = document.querySelector(".to-about-cta");
const toAboutDiv = document.querySelector(".about");

toAbout.addEventListener("click", () => {
  toAboutDiv.scrollIntoView({ behavior: "smooth" }); // Use "smooth" for smooth scrolling
});

const toSolutions = document.querySelector(".to-solutions-cta");
const toSolutionsDiv = document.querySelector(".solutions");

toSolutions.addEventListener("click", () => {
  toSolutionsDiv.scrollIntoView({ behavior: "smooth" }); // Use "smooth" for smooth scrolling
});

//Intersection Observer
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  const elements = document.querySelectorAll(".cls");
  elements.forEach((element) => {
    if (isElementInViewport(element)) {
      element.style.opacity = 1;
    } else {
      element.style.opacity = 0;
    }
  });
}

window.addEventListener("scroll", handleScroll);

handleScroll();

//Submit form

const submitButton = document.querySelector(".submitform");
const emailInput = document.querySelector(".emailInput");
const subjectInput = document.querySelector(".subject-select");
const messageInput = document.querySelector(".messagebox");
const app = document.querySelector(".app");
const submitOverlay = document.querySelector(".submitoverlay");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  emailInput.classList.remove("redborder");
  messageInput.classList.remove("redborder");
  if (emailInput.value === "") {
    emailInput.classList.add("redborder");
    if (messageInput.value === "") {
      messageInput.classList.add("redborder");
    }
    return;
  }

  if (messageInput.value === "") {
    messageInput.classList.add("redborder");
    return;
  }
  const params = {
    from: emailInput.value,
    subject: subjectInput.value,
    message: messageInput.value,
  };
  // emailjs.send("service_1i003xe", "template_dy5rw7e", params);
  submitOverlay.classList.remove("hidden");
  setTimeout(() => {
    submitOverlay.classList.add("scaleUp");
  }, 100);
  setTimeout(() => {
    app.scrollIntoView({ behavior: "smooth" }); // Use "smooth" for smooth scrolling
  }, 3000);
  setTimeout(() => {
    submitOverlay.classList.add("scaleDown");
  }, 5000);
  setTimeout(() => {
    submitOverlay.classList.add("hidden");
  }, 7000);
});
