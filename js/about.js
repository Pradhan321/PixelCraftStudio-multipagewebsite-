// About Page Specific Scripts
function initPageScripts() {
  // Value cards hover effect
  const valueCards = document.querySelectorAll(".value-card")

  valueCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      valueCards.forEach((c) => (c.style.opacity = "0.7"))
      this.style.opacity = "1"
    })

    card.addEventListener("mouseleave", () => {
      valueCards.forEach((c) => (c.style.opacity = "1"))
    })
  })

  // Timeline animation
  const timelineItems = document.querySelectorAll(".timeline-item")

  function animateTimeline() {
    timelineItems.forEach((item) => {
      const itemTop = item.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (itemTop < windowHeight - 100) {
        item.classList.add("animate")
      }
    })
  }

  window.addEventListener("scroll", animateTimeline)
  window.addEventListener("load", animateTimeline)

  // Add animation classes to timeline items
  timelineItems.forEach((item, index) => {
    item.style.opacity = "0"
    item.style.transform = "translateY(20px)"
    item.style.transition = `opacity 0.5s ease ${index * 0.2}s, transform 0.5s ease ${index * 0.2}s`

    item.classList.add = function (className) {
      if (className === "animate") {
        this.style.opacity = "1"
        this.style.transform = "translateY(0)"
      }
    }
  })

  // Team member hover effect
  const teamMembers = document.querySelectorAll(".team-member")

  teamMembers.forEach((member) => {
    member.addEventListener("mouseenter", function () {
      const image = this.querySelector(".member-image img")
      image.style.transform = "scale(1.1)"
    })

    member.addEventListener("mouseleave", function () {
      const image = this.querySelector(".member-image img")
      image.style.transform = "scale(1)"
    })
  })
}

// Call init function
if (typeof initPageScripts === "function") {
  initPageScripts()
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