// Scroll reveal animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target); // Stops watching once revealed
    }
  });
});

document.querySelectorAll(".fade-up, .fade-left, .fade-right, .scroll-fade").forEach(el => {
  observer.observe(el);
});
