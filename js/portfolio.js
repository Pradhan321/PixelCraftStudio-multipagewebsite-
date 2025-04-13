// Portfolio Page Specific Scripts
function initPageScripts() {
  // Portfolio Filter
  const filterButtons = document.querySelectorAll(".filter-btn")
  const portfolioItems = document.querySelectorAll(".portfolio-item")

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"))

      // Add active class to clicked button
      this.classList.add("active")

      // Get filter value
      const filterValue = this.getAttribute("data-filter")

      // Filter items
      portfolioItems.forEach((item) => {
        if (filterValue === "all" || item.getAttribute("data-category") === filterValue) {
          item.style.display = "block"
          setTimeout(() => {
            item.style.opacity = "1"
            item.style.transform = "scale(1)"
          }, 100)
        } else {
          item.style.opacity = "0"
          item.style.transform = "scale(0.8)"
          setTimeout(() => {
            item.style.display = "none"
          }, 300)
        }
      })
    })
  })

  // Portfolio Modal
  const modal = document.getElementById("project-modal")
  const modalBody = modal.querySelector(".modal-body")
  const closeModal = modal.querySelector(".close-modal")
  const viewButtons = document.querySelectorAll(".portfolio-view")

  viewButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault()

      // Get project ID
      const projectId = this.getAttribute("data-project")
      const projectContent = document.getElementById(projectId).innerHTML

      // Set modal content
      modalBody.innerHTML = projectContent

      // Show modal
      modal.style.display = "block"
      document.body.style.overflow = "hidden"
    })
  })

  // Close modal
  closeModal.addEventListener("click", () => {
    modal.style.display = "none"
    document.body.style.overflow = "auto"
  })

  // Close modal when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none"
      document.body.style.overflow = "auto"
    }
  })

  // Logo Slider Animation
  const logoSlides = document.querySelectorAll(".logo-slide")

  logoSlides.forEach((slide, index) => {
    slide.style.opacity = "0"
    slide.style.transform = "translateY(20px)"
    slide.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`

    setTimeout(() => {
      slide.style.opacity = "0.6"
      slide.style.transform = "translateY(0)"
    }, 100)
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