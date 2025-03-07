// Initialize AOS (Animate on Scroll)
AOS = {
    init: (options) => {
      // Default options
      const defaultOptions = {
        duration: 800,
        easing: "ease",
        once: true,
        offset: 100,
      }
  
      // Merge default options with user-provided options
      const mergedOptions = { ...defaultOptions, ...options }
  
      // Apply AOS logic (this is a simplified example)
      document.querySelectorAll("[data-aos]").forEach((element) => {
        element.style.transition = `all ${mergedOptions.duration / 1000}s ${mergedOptions.easing}`
        element.classList.add("aos-animate") // Add a class to simulate animation
      })
    },
  }
  
  AOS.init({
    duration: 800,
    easing: "ease",
    once: true,
    offset: 100,
  })
  
  // Sticky Navigation
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header")
    header.classList.toggle("scrolled", window.scrollY > 50)
  })
  
  // Mobile Navigation - Update the event listener
  const hamburger = document.querySelector(".hamburger")
  const navLinks = document.querySelector(".nav-links")
  
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navLinks.classList.toggle("active")
  
    // Prevent scrolling when menu is open
    if (navLinks.classList.contains("active")) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  })
  
  // Close mobile menu when clicking on a nav link
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active")
      navLinks.classList.remove("active")
      document.body.style.overflow = "auto"
    })
  })
  
  // Gallery Slider
  const gallerySlides = document.querySelectorAll(".gallery-slide")
  const dots = document.querySelectorAll(".dot")
  const prevBtn = document.querySelector(".prev-btn")
  const nextBtn = document.querySelector(".next-btn")
  let currentSlide = 0
  
  // Set initial active slide
  function showSlide(n) {
    // Remove active class from all slides
    gallerySlides.forEach((slide) => {
      slide.classList.remove("active")
    })
  
    // Remove active class from all dots
    dots.forEach((dot) => {
      dot.classList.remove("active")
    })
  
    // Set the current slide and dot as active
    gallerySlides[n].classList.add("active")
    dots[n].classList.add("active")
  }
  
  // Next slide
  function nextSlide() {
    currentSlide++
    if (currentSlide >= gallerySlides.length) {
      currentSlide = 0
    }
    showSlide(currentSlide)
  }
  
  // Previous slide
  function prevSlide() {
    currentSlide--
    if (currentSlide < 0) {
      currentSlide = gallerySlides.length - 1
    }
    showSlide(currentSlide)
  }
  
  // Event listeners for gallery controls
  nextBtn.addEventListener("click", nextSlide)
  prevBtn.addEventListener("click", prevSlide)
  
  // Event listeners for dots
  dots.forEach((dot) => {
    dot.addEventListener("click", function () {
      const slideIndex = Number.parseInt(this.getAttribute("data-index"))
      currentSlide = slideIndex
      showSlide(currentSlide)
    })
  })
  
  // Auto slide for gallery
  let galleryInterval = setInterval(nextSlide, 5000)
  
  // Pause auto slide on hover
  const galleryContainer = document.querySelector(".gallery-container")
  galleryContainer.addEventListener("mouseenter", () => {
    clearInterval(galleryInterval)
  })
  
  galleryContainer.addEventListener("mouseleave", () => {
    galleryInterval = setInterval(nextSlide, 5000)
  })
  
  // Testimonial Slider
  const testimonialSlides = document.querySelectorAll(".testimonial-slide")
  const prevTestimonialBtn = document.querySelector(".prev-testimonial")
  const nextTestimonialBtn = document.querySelector(".next-testimonial")
  let currentTestimonial = 0
  
  // Set initial active testimonial
  function showTestimonial(n) {
    // Remove active class from all testimonials
    testimonialSlides.forEach((slide) => {
      slide.classList.remove("active")
    })
  
    // Set the current testimonial as active
    testimonialSlides[n].classList.add("active")
  }
  
  // Next testimonial
  function nextTestimonialSlide() {
    currentTestimonial++
    if (currentTestimonial >= testimonialSlides.length) {
      currentTestimonial = 0
    }
    showTestimonial(currentTestimonial)
  }
  
  // Previous testimonial
  function prevTestimonialSlide() {
    currentTestimonial--
    if (currentTestimonial < 0) {
      currentTestimonial = testimonialSlides.length - 1
    }
    showTestimonial(currentTestimonial)
  }
  
  // Event listeners for testimonial controls
  nextTestimonialBtn.addEventListener("click", nextTestimonialSlide)
  prevTestimonialBtn.addEventListener("click", prevTestimonialSlide)
  
  // Auto slide for testimonials
  const testimonialInterval = setInterval(nextTestimonialSlide, 6000)
  
  // Contact Form Submission
  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()
  
      // Get form values
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const phone = document.getElementById("phone").value
      const message = document.getElementById("message").value
  
      // Here you would typically send the form data to a server
      // For this example, we'll just log it and show an alert
      console.log("Form submitted:", { name, email, phone, message })
  
      // Show success message
      alert("Thank you for your message! We will get back to you soon.")
  
      // Reset form
      contactForm.reset()
    })
  }
  
  // Newsletter Form Submission
  const newsletterForm = document.querySelector(".newsletter-form")
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault()
  
      // Get email value
      const email = this.querySelector('input[type="email"]').value
  
      // Here you would typically send the email to a server
      // For this example, we'll just log it and show an alert
      console.log("Newsletter subscription:", email)
  
      // Show success message
      alert("Thank you for subscribing to our newsletter!")
  
      // Reset form
      newsletterForm.reset()
    })
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
  
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: "smooth",
        })
      }
    })
  })
  
  // Active navigation link based on scroll position
  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section")
    const navLinks = document.querySelectorAll(".nav-links a")
  
    let current = ""
  
    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight
  
      if (pageYOffset >= sectionTop - 100) {
        current = section.getAttribute("id")
      }
    })
  
    navLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active")
      }
    })
  })
  
  