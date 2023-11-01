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
  toAboutDiv.scrollIntoView({ behavior: "smooth" });
});

const toSolutions = document.querySelector(".to-solutions-cta");
const toSolutionsDiv = document.querySelector(".solutions");
const toContactDiv = document.querySelector(".contact");

toSolutions.addEventListener("click", () => {
  toSolutionsDiv.scrollIntoView({ behavior: "smooth" });
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
  const slideelements = document.querySelectorAll(".cli");
  elements.forEach((element) => {
    if (isElementInViewport(element)) {
      element.style.opacity = 1;
    } else {
      element.style.opacity = 0;
    }
  });
  slideelements.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.add("slideIn");
    } else {
      element.classList.remove("slideIn");
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
const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  emailInput.classList.remove("redborder");
  messageInput.classList.remove("redborder");
  if (emailInput.value === "" || !emailRegex.test(emailInput.value)) {
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
  emailjs.send("service_1i003xe", "template_dy5rw7e", params);
  submitOverlay.classList.remove("hidden");
  setTimeout(() => {
    submitOverlay.classList.add("scaleUp");
  }, 100);
  setTimeout(() => {
    app.scrollIntoView({ behavior: "smooth" });
  }, 3000);
  setTimeout(() => {
    submitOverlay.classList.add("scaleDown");
  }, 5000);
  setTimeout(() => {
    submitOverlay.classList.add("hidden");
    submitOverlay.classList.remove("scaleUp");
    submitOverlay.classList.remove("scaleDown");
    emailInput.value = "";
    messageInput.value = "";
    subjectInput.selectedIndex = 0;
  }, 7000);
});

//Click navlogo
const navBarLogo = document.querySelector(".navlogo");
navBarLogo.addEventListener("click", () => {
  app.scrollIntoView({ behavior: "smooth" });
});

//Click navlinks
const navspans = document.querySelectorAll(".navspan");
const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav-rightblock");

const homespan = document.querySelector(".ct1");
homespan.addEventListener("click", () => {
  navspans.forEach((span) => {
    span.classList.remove("activeSpan");
  });
  hamburger.classList.add("menuActive");
  navBar.classList.remove("menuActives");
  homespan.classList.add("activeSpan");
  app.scrollIntoView({ behavior: "smooth" });
});
const aboutspan = document.querySelector(".ct2");
aboutspan.addEventListener("click", () => {
  navspans.forEach((span) => {
    span.classList.remove("activeSpan");
  });
  hamburger.classList.add("menuActive");
  navBar.classList.remove("menuActives");
  aboutspan.classList.add("activeSpan");
  toAboutDiv.scrollIntoView({ behavior: "smooth" });
});
const solutionsspan = document.querySelector(".ct3");
solutionsspan.addEventListener("click", () => {
  navspans.forEach((span) => {
    span.classList.remove("activeSpan");
  });
  hamburger.classList.add("menuActive");
  navBar.classList.remove("menuActives");
  solutionsspan.classList.add("activeSpan");
  toSolutionsDiv.scrollIntoView({ behavior: "smooth" });
});
const contactspan = document.querySelector(".ct4");
contactspan.addEventListener("click", () => {
  navspans.forEach((span) => {
    span.classList.remove("activeSpan");
  });
  hamburger.classList.add("menuActive");
  navBar.classList.remove("menuActives");
  contactspan.classList.add("activeSpan");
  toContactDiv.scrollIntoView({ behavior: "smooth" });
});

//Scroll toggle nav

const divs = Array.from(document.querySelectorAll(".container"));

const navSpans = Array.from(document.querySelectorAll(".navspan"));

window.onscroll = () => {
  divs.forEach((div) => {
    const top = window.scrollY;
    const offset = div.offsetTop - 200;
    const height = div.offsetHeight;
    const ctIndex = div.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navSpans.forEach((span) => {
        span.classList.remove("activeSpan");
        document.querySelector(`.${ctIndex}`).classList.add("activeSpan");
      });
    }
  });
};

//Hamburger
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("menuActive");
  navBar.classList.toggle("menuActives");

  navspans.forEach((span) => {
    span.classList.remove("activeSpan");
  });
});
