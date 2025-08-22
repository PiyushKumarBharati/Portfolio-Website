// Typing Animation for Hero
const typingTxts = [
  "Welcome to My Portfolio",
  "IIIT Sonepat | Dream. Build. Achieve.",
  "Future Software Developer Engineer",
  "Kolkata to Sonepat Journey"
];
let typingIdx = 0, charIdx = 0;
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
      this.selectedIndex = 0;
    }
  });
}

// Gallery hover/expand description and click to open relevant links
const galleryCards = document.querySelectorAll(".gallery-card");
const kolkataDescBox = document.getElementById("kolkataDescBox");
if (galleryCards && kolkataDescBox) {
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
}

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

// Animated counter
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

// Modal close on click outside image or on close button
window.onclick = function (event) {
  let certModal = document.getElementById("certModal");
  if (certModal && event.target === certModal) {
    certModal.style.display = "none";
  }
  let flawModal = document.getElementById("flawDetailModal");
  if (flawModal && event.target === flawModal) {
    flawModal.style.display = "none";
  }
};
const flawModalClose = document.getElementById('flawModalClose');
if (flawModalClose) {
  flawModalClose.onclick = function () {
    document.getElementById('flawDetailModal').style.display = 'none';
  }
}

// Timeline details
document.querySelectorAll(".timeline-item").forEach((item) => {
  item.addEventListener("mouseenter", () => item.classList.add("enlarged"));
  item.addEventListener("mouseleave", () => item.classList.remove("enlarged"));
});

// Data for each flaw card details and images
const flawDetails = {
  0: {
    title: "Unemployment & Underemployment",
    desc: "Despite being a cultural and educational hub, many Kolkata youth struggle to find quality jobs or relevant upskilling opportunities.",
    how: `The solution is an AI-powered career portal. This will scrape local job listings from Kolkata-specific sites or APIs, allow users to upload resumes which are analyzed using machine learning models to find skill gaps, and recommend personalized online courses & certifications. The portal will keep track of job applications, provide interview tips, and enable notifications.`,
    images: [
      "unemployement1.png",
      "unemployement2.png"
    ]
  },
  1: {
    title: "Urban Flooding & Drainage Issues",
    desc: "Monsoon waterlogging regularly disrupts life and damages property in Kolkata.",
    how: `An IoT-based flood alert and reporting app will be developed. Residents can report waterlogged spots on a live map with photos. The app will connect to weather APIs for real-time data, generate alerts, and suggest safe routes for commuters using map services. Data analytics will help municipal corporations prioritize drainage cleaning.`,
    images: [
      "waterlogging1.png",
      "waterlogging2.png"
    ]
  },
  2: {
    title: "Slum Expansion & Urban Housing",
    desc: "Inequitable urbanization leads to slum growth and housing insecurity.",
    how: `Create an e-governance platform for slum residents to easily access social benefits, government documents, and report grievances. The platform will support Bengali and English and connect NGOs & authorities in real-time. Additionally, it will provide local micro-job listings and skill-building program registrations.`,
    images: [
      "slum1.png",
      "slum2.png"
    ]
  },
  3: {
    title: "Pollution (Air & Water)",
    desc: "Pollution levels periodically reach unhealthy levels in dense Kolkata neighborhoods.",
    how: `Develop a real-time pollution map using IoT sensors or open government data. Users can see air and water quality status, receive personalized health advisories based on their location, and monitor exposure over time. Alerts will be sent via push notifications during high pollution days.`,
    images: [
      "pollution1.png",
      "pollution2.png"
    ]
  },
  4: {
    title: "Mental Health & Social Isolation",
    desc: "Youth face rising stress, anxiety, and isolation, heightened by pandemic and lifestyle.",
    how: `Build a confidential digital peer-support network providing anonymous chat, daily mood tracking, and access to affordable therapists and counselors. The app will include an AI chatbot for immediate mental health tips and display locations of nearby support centers.`,
    images: [
      "stress1.png",
      "stress2.png"
    ]
  }
};

function openFlawModal(idx) {
  const modal = document.getElementById('flawDetailModal');
  const title = document.getElementById('flawModalTitle');
  const desc = document.getElementById('flawModalDesc');
  const how = document.getElementById('flawModalHow');
  const imagesDiv = document.getElementById('flawModalImages');

  if (flawDetails[idx]) {
    title.textContent = flawDetails[idx].title;
    desc.textContent = flawDetails[idx].desc;
    how.innerHTML = '<b>Implementation Details:</b><br>' + flawDetails[idx].how;
    imagesDiv.innerHTML = '';

    flawDetails[idx].images.forEach(src => {
    let img = document.createElement('img');
    img.src = src;
    img.alt = flawDetails[idx].title;
    img.style.width = '110px';
    img.style.borderRadius = '8px';
    img.style.boxShadow = '0 1px 8px rgba(83, 202, 233, 0.3)';

    // Open clicked image in the modal viewer
    img.addEventListener('click', () => {
        const viewerModal = document.getElementById('imageViewerModal');
        const viewerImg = document.getElementById('imageViewerImg');
        viewerImg.src = src;
        viewerModal.style.display = 'flex';
    });

    imagesDiv.appendChild(img);
});


    modal.style.display = 'flex';
  }
}

// Close modal when clicking close button or outside modal content
document.getElementById('flawModalClose').addEventListener('click', () => {
  document.getElementById('flawDetailModal').style.display = 'none';
});

window.addEventListener('click', (event) => {
  const modal = document.getElementById('flawDetailModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Attach click handlers to flaw cards
document.querySelectorAll('.flaw-card').forEach((card, idx) => {
  card.style.cursor = 'pointer';
  card.addEventListener('click', () => openFlawModal(idx));
});
//  attach event handlers after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  
});
document.addEventListener('DOMContentLoaded', () => {
    const viewerModal = document.getElementById('imageViewerModal');
    const closeBtn = document.getElementById('imageViewerClose');

    // Close when clicking close button
    closeBtn.addEventListener('click', () => {
        viewerModal.style.display = 'none';
    });

    // Close when clicking outside the image
    viewerModal.addEventListener('click', (e) => {
        if (e.target === viewerModal) {
            viewerModal.style.display = 'none';
        }
    });
});





