document.addEventListener('DOMContentLoaded', function () {
  const elements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');

  if (elements.length > 0) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target)
        }
      });
    }, {
      threshold: 0.1
    });

    elements.forEach(element => observer.observe(element));
  }
});
