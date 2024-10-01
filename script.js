function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('expanded');
  }

  
const text = "Welcome to Voyager";
let index = 0;

function type() {
    if (index < text.length) {
        document.getElementById("typed-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 100);
    }
}

type();


document.addEventListener('DOMContentLoaded', () => {
  const statsSection = document.querySelector('.stats');
  const statNumbers = document.querySelectorAll('.stat-number');
  let started = false;

  function animateNumbers() {
      if (!started && statsSection.getBoundingClientRect().top < window.innerHeight) {
          started = true;
          statNumbers.forEach(stat => {
              const target = +stat.getAttribute('data-target');
              const increment = target / 300; // Adjust the speed by changing the divisor (higher = slower)

              let count = 0;
              const updateNumber = () => {
                  count += increment;
                  if (count < target) {
                    stat.innerText = "+ " + Math.ceil(count);
                      requestAnimationFrame(updateNumber);
                  } else {
                      stat.innerText = "+ " + target;
                  }
              };
              updateNumber();
          });
      }
  }

  window.addEventListener('scroll', animateNumbers);
});


/**
 * Scroll Reveal Effect
 */

const sections = document.querySelectorAll("[data-section]");

const scrollReveal = function () {
  const windowHeight = window.innerHeight;

  for (let i = 0; i < sections.length; i++) {
    const sectionTop = sections[i].getBoundingClientRect().top;

    if (sectionTop < windowHeight / 2 || windowHeight >= document.body.scrollHeight) {
      sections[i].classList.add("active");
    } else {
      sections[i].classList.remove("active");
    }
  }
}

scrollReveal();

window.addEventListener("scroll", scrollReveal);
window.addEventListener("resize", scrollReveal);