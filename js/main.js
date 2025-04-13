// Theme Toggle
const themeSwitch = document.getElementById("theme-switch")
const body = document.body

// Check for saved theme preference or use device preference
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)")
const savedTheme = localStorage.getItem("theme")

if (savedTheme === "dark" || (!savedTheme && prefersDarkScheme.matches)) {
  body.setAttribute("data-theme", "dark")
  themeSwitch.checked = true
} else {
  body.setAttribute("data-theme", "light")
  themeSwitch.checked = false
}
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
      .then(registration => {
          console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch(error => {
          console.error('Service Worker registration failed:', error);
      });
}
// Toggle theme when switch is clicked
themeSwitch.addEventListener("change", function () {
  if (this.checked) {
    body.setAttribute("data-theme", "dark")
    localStorage.setItem("theme", "dark")
  } else {
    body.setAttribute("data-theme", "light")
    localStorage.setItem("theme", "light")
  }
})

// Mobile Navigation
const hamburger = document.querySelector(".hamburger")
const navBar = document.querySelector(".nav-bar")

hamburger.addEventListener("click", function () {
  this.classList.toggle("active")
  navBar.classList.toggle("active")
})

// Close mobile menu when a link is clicked
document.querySelectorAll(".nav-bar a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navBar.classList.remove("active")
  })
})

// Back to Top Button
const backToTopButton = document.getElementById("back-to-top")

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add("visible")
  } else {
    backToTopButton.classList.remove("visible")
  }
})

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})

// FAQ Accordion
const faqItems = document.querySelectorAll(".faq-item")

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question")

  question.addEventListener("click", () => {
    // Close all other items
    faqItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active")
      }
    })

    // Toggle current item
    item.classList.toggle("active")
  })
})

// Animate elements when they come into view
function animateOnScroll() {
  const elements = document.querySelectorAll("[data-aos]")

  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top
    const windowHeight = window.innerHeight

    if (elementPosition < windowHeight - 100) {
      element.classList.add("aos-animate")
    }
  })
}

window.addEventListener("scroll", animateOnScroll)
window.addEventListener("load", animateOnScroll)

// Initialize page-specific scripts if they exist
document.addEventListener("DOMContentLoaded", () => {
  // Declare initPageScripts as a variable, defaulting to an empty function
  const initPageScripts = () => {}

  // Check if page-specific init function exists and call it
  if (typeof initPageScripts === "function") {
    initPageScripts()
  }
})

