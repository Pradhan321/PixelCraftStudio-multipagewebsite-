// Home Page Specific Scripts
function initPageScripts() {
  // Testimonial Slider
  const testimonialSlides = document.querySelectorAll(".testimonial-slide")
  const dots = document.querySelectorAll(".dot")
  const prevBtn = document.querySelector(".prev-btn")
  const nextBtn = document.querySelector(".next-btn")
  let currentSlide = 0

  function showSlide(index) {
    // Hide all slides
    testimonialSlides.forEach((slide) => {
      slide.classList.remove("active")
    })

    // Remove active class from all dots
    dots.forEach((dot) => {
      dot.classList.remove("active")
    })

    // Show the current slide and activate corresponding dot
    testimonialSlides[index].classList.add("active")
    dots[index].classList.add("active")

    // Update current slide index
    currentSlide = index
  }

  // Next slide
  function nextSlide() {
    let next = currentSlide + 1
    if (next >= testimonialSlides.length) {
      next = 0
    }
    showSlide(next)
  }

  // Previous slide
  function prevSlide() {
    let prev = currentSlide - 1
    if (prev < 0) {
      prev = testimonialSlides.length - 1
    }
    showSlide(prev)
  }

  // Event listeners for controls
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", prevSlide)
    nextBtn.addEventListener("click", nextSlide)
  }

  // Event listeners for dots
  dots.forEach((dot) => {
    dot.addEventListener("click", function () {
      const slideIndex = Number.parseInt(this.getAttribute("data-slide"))
      showSlide(slideIndex)
    })
  })

  // Auto slide using requestAnimationFrame
  let lastTime = null
  const slideInterval = 5000 // 5 seconds

  function autoSlide(timestamp) {
    if (!lastTime) lastTime = timestamp
    const elapsed = timestamp - lastTime

    if (elapsed >= slideInterval) {
      nextSlide()
      lastTime = timestamp
    }

    requestAnimationFrame(autoSlide)
  }

  // Start auto sliding
  requestAnimationFrame(autoSlide)

  // Feature cards animation
  const featureCards = document.querySelectorAll(".feature-card")

  featureCards.forEach((card, index) => {
    card.setAttribute("data-aos", "fade-up")
    card.setAttribute("data-aos-delay", (index * 200).toString())
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