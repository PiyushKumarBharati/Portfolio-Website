// Typing Animation for Hero
const typingTxts = [
  "Welcome to My Portfolio",
  "IIIT Sonepat | Dream. Build. Achieve.",
  "Future Software Developer Engineer",
  "Kolkata to Sonepat Journey"
];
let typingIdx = 0,
  charIdx = 0;
function typeAnim() {
  const typing = document.getElementById("typing");
  if (!typing) return;
  let txt = typingTxts[typingIdx];
  typing.textContent = txt.slice(0, ++charIdx);
  if (charIdx === txt.length) {
    setTimeout(() => {
      typingIdx = (typingIdx + 1) % typingTxts.length;
      charIdx = 0;
      typeAnim();
    }, 1300);
  } else {
    setTimeout(typeAnim, 120);
  }
}
typeAnim();

// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Responsive navigation
const menuToggle = document.getElementById("menuToggle");
const headerInner = document.querySelector(".header-inner");
if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    headerInner.classList.toggle("active");
  });
}

// Theme Toggle (fix toggle logic)
const themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    themeToggle.textContent = document.body.classList.contains("light-theme")
      ? "🌞"
      : "🌗";
  });
}

// Search Section functionality - dropdown selection only
const sectionSearch = document.getElementById("sectionSearch");
if (sectionSearch) {
  sectionSearch.addEventListener("change", function () {
    const val = this.value;
    if (val) {
      document.getElementById(val).scrollIntoView({ behavior: "smooth" });
      this.selectedIndex = 0; // reset dropdown after selection
    }
  });
}

// Gallery hover/expand description and click to open relevant links
const galleryCards = document.querySelectorAll(".gallery-card");
const kolkataDescBox = document.getElementById("kolkataDescBox");
galleryCards.forEach((card) => {
  card.addEventListener("mouseenter", function () {
    kolkataDescBox.textContent = card.getAttribute("data-desc");
  });
  card.addEventListener("mouseleave", function () {
    kolkataDescBox.textContent = "";
  });
  card.addEventListener("click", function () {
    const url = card.getAttribute("data-link");
    if (url) {
      window.open(url, "_blank");
    }
  });
});

// Certificates Modal
function showCertModal(src) {
  let modal = document.getElementById("certModal");
  let img = document.getElementById("certModalImg");
  img.src = src;
  modal.style.display = "block";
}
function closeCertModal() {
  let modal = document.getElementById("certModal");
  modal.style.display = "none";
}
window.showCertModal = showCertModal;
window.closeCertModal = closeCertModal;

// Contact Form handler (demo)
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let name = contactForm.name.value.trim() || "there";
    alert(`Thanks ${name}! Your message was sent (demo mode).`);
    contactForm.reset();
  });
}

// Animated counter for CGPA (e.g. 9.165)
document.querySelectorAll(".animated-count").forEach((el) => {
  let end = +el.getAttribute("data-count");
  let curr = 0;
  let step = end / 44;
  function countAnim() {
    curr += step;
    el.textContent = curr.toFixed(3);
    if (curr < end) setTimeout(countAnim, 40);
    else el.textContent = end;
  }
  countAnim();
});

// Scroll to Top Button
const toTopBtn = document.getElementById("toTopBtn");
window.onscroll = function () {
  if (
    document.body.scrollTop > 250 ||
    document.documentElement.scrollTop > 250
  ) {
    toTopBtn.style.display = "block";
  } else {
    toTopBtn.style.display = "none";
  }
};
toTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Modal close on click outside image
window.onclick = function (event) {
  let modal = document.getElementById("certModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Journey enlarge & show details on hover
document.querySelectorAll(".timeline-item").forEach((item) => {
  item.addEventListener("mouseenter", () => item.classList.add("enlarged"));
  item.addEventListener("mouseleave", () => item.classList.remove("enlarged"));
});

