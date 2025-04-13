// Services Page Specific Scripts
function initPageScripts() {
  // Service Tabs
  const serviceTabs = document.querySelectorAll(".service-tab")
  const serviceContents = document.querySelectorAll(".service-content")

  serviceTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      // Remove active class from all tabs and contents
      serviceTabs.forEach((t) => t.classList.remove("active"))
      serviceContents.forEach((c) => c.classList.remove("active"))

      // Add active class to clicked tab
      this.classList.add("active")

      // Show corresponding content
      const serviceId = this.getAttribute("data-service")
      document.getElementById(serviceId).classList.add("active")
    })
  })

  // Process Steps Animation
  const processSteps = document.querySelectorAll(".process-step")

  processSteps.forEach((step, index) => {
    step.setAttribute("data-aos", "fade-up")
    step.setAttribute("data-aos-delay", (index * 200).toString())
  })

  // Pricing Cards Hover Effect
  const pricingCards = document.querySelectorAll(".pricing-card")

  pricingCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      if (!this.classList.contains("featured")) {
        pricingCards.forEach((c) => {
          if (c !== this && !c.classList.contains("featured")) {
            c.style.transform = "scale(0.95)"
          }
        })
      }
    })

    card.addEventListener("mouseleave", () => {
      pricingCards.forEach((c) => {
        if (!c.classList.contains("featured")) {
          c.style.transform = ""
        }
      })
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