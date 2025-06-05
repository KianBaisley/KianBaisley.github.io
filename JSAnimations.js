// === Typewriter Effect ===
const textArray = [
  "Junior Software Developer",
  "Software Development Student",
  "Technology Enthusiast"
];

let index = 0;
let charIndex = 0;
const subtitle = document.querySelector(".subtitle");

function typeText() {
  if (charIndex < textArray[index].length) {
    subtitle.textContent += textArray[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 50);
  } else {
    setTimeout(eraseText, 1500);
  }
}

function eraseText() {
  if (charIndex > 0) {
    subtitle.textContent = textArray[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, 30);
  } else {
    index = (index + 1) % textArray.length;
    setTimeout(typeText, 300);
  }
}

// === Fade-in on Scroll ===
const scrollFadeElems = document.querySelectorAll(".scroll-fade");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

scrollFadeElems.forEach(elem => observer.observe(elem));

// === Start on Load ===
window.addEventListener("DOMContentLoaded", () => {
  subtitle.textContent = "";
  typeText();
});
