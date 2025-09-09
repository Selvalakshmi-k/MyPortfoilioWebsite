// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});// Smooth scroll for nav
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Typing effect in hero section
const typingText = document.getElementById("typing-text");
const roles = ["Full-Stack Developer", "Java Programmer", "AI Enthusiast", "Tech Explorer 🚀"];
let roleIndex = 0;
let charIndex = 0;

function typeEffect() {
  if (charIndex < roles[roleIndex].length) {
    typingText.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingText.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeEffect, 500);
  }
}

typeEffect();

// Resume Modal
function openResume() {
  document.getElementById("resumeModal").style.display = "block";
}

function closeResume() {
  document.getElementById("resumeModal").style.display = "none";
}

window.onclick = function(event) {
  if (event.target == document.getElementById("resumeModal")) {
    closeResume();
  }
}

// Scroll to section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}


// Function to view resume in a new tab
function viewResume() {
  window.open("resume.pdf", "_blank");
}
