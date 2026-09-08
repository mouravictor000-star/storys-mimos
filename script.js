// ===== ANO =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== ANIMAÇÕES AO ROLAR =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

// ===== FAQ =====
document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.parentElement;
    const answer = item.querySelector(".faq-answer");
    const isActive = item.classList.contains("active");

    document.querySelectorAll(".faq-item").forEach((other) => {
      other.classList.remove("active");
      other.querySelector(".faq-answer").style.maxHeight = null;
    });

    if (!isActive) {
      item.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

// ===== GALERIA / LIGHTBOX =====
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");

document.querySelectorAll(".gallery-item").forEach((item) => {
  item.addEventListener("click", () => {
    const image = item.querySelector("img");
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightbox.classList.add("show");
  });
});

closeLightbox.addEventListener("click", () => lightbox.classList.remove("show"));

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.classList.remove("show");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    lightbox.classList.remove("show");
  }
});

// ===== CONTADOR =====
// ALTERE A DATA ABAIXO para a data real de encerramento da oferta.
const endDate = new Date("2026-09-15T23:59:59-03:00").getTime();

function updateTimer() {
  const distance = endDate - Date.now();

  if (distance <= 0) {
    ["days", "hours", "minutes", "seconds"].forEach((id) => {
      document.getElementById(id).textContent = "00";
    });
    return;
  }

  const days = Math.floor(distance / 86400000);
  const hours = Math.floor((distance % 86400000) / 3600000);
  const minutes = Math.floor((distance % 3600000) / 60000);
  const seconds = Math.floor((distance % 60000) / 1000);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

updateTimer();
setInterval(updateTimer, 1000);
