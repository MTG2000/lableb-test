// Features Showcase
// =================
const showcaseItems = document.querySelectorAll(".features .item");

//Those are used as a caching for better performance
let showcaseItemsIcons = [];
let showcaseItemsContents = [];

let showcaseTimer;

// Remove the color from all icons
function resetShowcaseItems() {
  showcaseItemsIcons.forEach((icon) => {
    icon.classList.remove("bg-primary");
    icon.classList.remove("text-white");
  });
  showcaseItemsContents.forEach((content) => {
    content.classList.remove("active");
  });
}

for (let i = 0; i < showcaseItems.length; i++) {
  const element = showcaseItems[i];

  const iconElement = element.querySelector(".icon");
  const contentElement = element.querySelector(".content");
  showcaseItemsIcons.push(iconElement);
  showcaseItemsContents.push(contentElement);

  // Mouse Enter
  iconElement.addEventListener("mouseenter", () => {
    if (showcaseTimer) clearTimeout(showcaseTimer);
    resetShowcaseItems();
    showcaseItemsIcons[i].classList.add("bg-primary");

    showcaseItemsIcons[i].classList.add("text-white");
    showcaseItemsContents[i].classList.add("active");
  });

  //   Moues Leave
  iconElement.addEventListener("mouseleave", () => {
    if (showcaseTimer) clearTimeout(showcaseTimer);
    activateShowcaseItem(i);
  });
}

function activateShowcaseItem(i) {
  if (i >= showcaseItemsIcons.length) i = 0;
  resetShowcaseItems();
  showcaseItemsIcons[i].classList.add("bg-primary");

  showcaseItemsIcons[i].classList.add("text-white");
  showcaseItemsContents[i].classList.add("active");
  showcaseTimer = setTimeout(() => activateShowcaseItem(i + 1), 2000);
}

activateShowcaseItem(0);

// Back-To-Top Btn
// ========================
const backToTopBtn = document.getElementById("back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.addEventListener(
  "scroll",
  _.debounce(function () {
    scrollFunction();
  }, 350)
);

function scrollFunction() {
  if (
    document.body.scrollTop > 150 ||
    document.documentElement.scrollTop > 150
  ) {
    backToTopBtn.style.opacity = 1;
  } else {
    backToTopBtn.style.opacity = 0;
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Particles

particlesJS.load("particles-js", "assets/particles.json", function () {
  console.log("callback - particles.js config loaded");
});
