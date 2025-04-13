// Contact Page Specific Scripts
function initPageScripts() {
  // Form Validation
  const contactForm = document.getElementById("contact-form")
  const formSuccess = document.getElementById("form-success")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Reset previous errors
      const errorElements = document.querySelectorAll(".form-group.error")
      errorElements.forEach((element) => {
        element.classList.remove("error")
      })

      // Get form fields
      const name = document.getElementById("name")
      const email = document.getElementById("email")
      const phone = document.getElementById("phone")
      const subject = document.getElementById("subject")
      const message = document.getElementById("message")

      let isValid = true

      // Validate name
      if (name.value.trim() === "") {
        showError(name, "Name is required")
        isValid = false
      }

      // Validate email
      if (email.value.trim() === "") {
        showError(email, "Email is required")
        isValid = false
      } else if (!isValidEmail(email.value)) {
        showError(email, "Please enter a valid email")
        isValid = false
      }

      // Validate phone (optional)
      if (phone.value.trim() !== "" && !isValidPhone(phone.value)) {
        showError(phone, "Please enter a valid phone number")
        isValid = false
      }

      // Validate subject
      if (subject.value.trim() === "") {
        showError(subject, "Subject is required")
        isValid = false
      }

      // Validate message
      if (message.value.trim() === "") {
        showError(message, "Message is required")
        isValid = false
      }

      // If form is valid, submit it
      if (isValid) {
        // In a real application, you would send the form data to a server here
        // For this example, we'll just show the success message
        contactForm.style.display = "none"
        formSuccess.style.display = "block"

        // Reset form
        contactForm.reset()
      }
    })
  }

  // Helper function to show error
  function showError(input, message) {
    const formGroup = input.parentElement
    const errorElement = formGroup.querySelector(".error-message")

    formGroup.classList.add("error")
    errorElement.textContent = message
  }

  // Helper function to validate email
  function isValidEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  // Helper function to validate phone
  function isValidPhone(phone) {
    const re = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/
    return re.test(String(phone))
  }

  // Info Cards Animation
  const infoCards = document.querySelectorAll(".info-card")

  infoCards.forEach((card, index) => {
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