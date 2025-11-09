// GTA-Style Portfolio Script

window.addEventListener("load", () => {
  const loader = document.querySelector(".loading-screen");
  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => loader.style.display = "none", 1000);
  }, 3500);
});

// Skill Bar Animation on Scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bars = entry.target.querySelectorAll(".skill-progress");
      bars.forEach(bar => {
        bar.style.width = bar.dataset.level + "%";
      });
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll(".skill-category-content").forEach(el => observer.observe(el));

// Skill Category Toggle
const categories = document.querySelectorAll(".category");
const skillContents = document.querySelectorAll(".skill-category-content");

categories.forEach(category => {
  category.addEventListener("click", () => {
    categories.forEach(c => c.classList.remove("active"));
    skillContents.forEach(content => content.classList.remove("active"));

    category.classList.add("active");
    document.getElementById(category.dataset.category).classList.add("active");
  });
});

// Contact Form Submission Simulation
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Transmission Sent Successfully! 🚀");
  contactForm.reset();
});

