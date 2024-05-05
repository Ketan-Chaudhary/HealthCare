// Get the carousel elements
const carousel = document.querySelector('.carousel');
const carouselInner = carousel.querySelector('.carousel-inner');
const carouselItems = Array.from(carouselInner.querySelectorAll('.carousel-item'));
const prevControl = carousel.querySelector('.prev');
const nextControl = carousel.querySelector('.next');

// Set initial slide index
let currentSlideIndex = 0;

// Set automatic slide interval (in milliseconds)
const slideInterval = 100000;

// Start automatic sliding
let slideIntervalId = setInterval(showNextSlide, slideInterval);

// Show the initial slide
showSlide(currentSlideIndex);

// Add event listeners to the control buttons
prevControl.addEventListener('click', () => {
  showPreviousSlide();
  resetSlideInterval();
});

nextControl.addEventListener('click', () => {
  showNextSlide();
  resetSlideInterval();
});

function showSlide(index) {
  // Remove the 'active' class from all slides
  carouselItems.forEach(item => item.classList.remove('active'));

  // Add the 'active' class to the current slide
  carouselItems[index].classList.add('active');

  // Calculate the translateX value to show the slide
  const translateValue = -(carouselItems[index].offsetLeft);
  carouselInner.style.transform = `translateX(${translateValue}px)`;

  // Update the current slide index
  currentSlideIndex = index;

  // Update control buttons' visibility
  updateControlVisibility();
}

function showPreviousSlide() {
  const previousSlideIndex = (currentSlideIndex - 1 + carouselItems.length) % carouselItems.length;
  showSlide(previousSlideIndex);
}

function showNextSlide() {
  const nextSlideIndex = (currentSlideIndex + 1) % carouselItems.length;
  showSlide(nextSlideIndex);
}

function updateControlVisibility() {
  // Hide the previous control on the first slide
  if (currentSlideIndex === 0) {
    prevControl.style.display = 'none';
  } else {
    prevControl.style.display = 'block';
  }

  // Hide the next control on the last slide
  if (currentSlideIndex === carouselItems.length - 1) {
    nextControl.style.display = 'none';
  } else {
    nextControl.style.display = 'block';
  }
}

function resetSlideInterval() {
  // Clear the existing interval
  clearInterval(slideIntervalId);

  // Start a new interval
  slideIntervalId = setInterval(showNextSlide, slideInterval);
}




// 





//
let currentSlide_testimonials = 0;
const slideCount_testimonials = document.querySelectorAll('.carousel-slide-testimonials .testimonial').length;
const controlButtons_testimonials = document.querySelectorAll('.controls-testimonials .control-btn-test');

function showSlideTestimonials(index) {
    const slideWidth_testimonials = document.querySelector('.carousel-slide-testimonials .testimonial').clientWidth;
    const slideContainer_testimonials = document.querySelector('.carousel-slide-testimonials');
    slideContainer_testimonials.style.transform = `translateX(-${slideWidth_testimonials * index}px)`;

    // Update active control button
    controlButtons_testimonials.forEach((button, i) => {
        button.classList.toggle('active', i === index);
    });

    currentSlide_testimonials = index;
}

// Automatically rotate the testimonials carousel every 5 seconds
setInterval(() => {
    currentSlide_testimonials = (currentSlide_testimonials + 1) % slideCount_testimonials;
    showSlideTestimonials(currentSlide_testimonials);
}, 5000);


// document.addEventListener("DOMContentLoaded", function () {
//   const topHeader = document.querySelector('.top-header');
//   const navbar = document.querySelector('.navbar');
//   let prevScrollPos = window.pageYOffset;

//   function handleScroll() {
//       const currentScrollPos = window.pageYOffset;
      
//       if (currentScrollPos > prevScrollPos) {
//           // Scrolling down
//           topHeader.classList.add('invisible');
//           navbar.classList.add('sticky');
//       } else {
//           // Scrolling up
//           topHeader.classList.remove('invisible');
//           navbar.classList.remove('sticky');
//       }
//       prevScrollPos = currentScrollPos;
//   }

//   window.addEventListener('scroll', handleScroll);
// });
        document.addEventListener("DOMContentLoaded", function () {
  const topHeader = document.querySelector('.top-header');
  const navbar = document.querySelector('.navbar');
  let prevScrollPos = window.pageYOffset;

  function handleScroll() {
      const currentScrollPos = window.pageYOffset;
      
      if (currentScrollPos > prevScrollPos) {
          // Scrolling down
          navbar.classList.add('sticky');
          navbar.classList.add('navbar-curve')
      } else {
          // Scrolling up
          navbar.classList.remove('sticky');
          // navbar.classList.remove('navbar-curve')
      }
      
      // Check if we have scrolled back to the top
      if (currentScrollPos === 0) {
          topHeader.classList.remove('invisible');
          navbar.classList.remove('navbar-curve')

      } else {
          topHeader.classList.add('invisible');
      }
      
      prevScrollPos = currentScrollPos;
  }

  window.addEventListener('scroll', handleScroll);
});



// 

function removeLoadingOverlay() {
  const loadingOverlay = document.querySelector('.loading-overlay');
  loadingOverlay.style.display = 'none';
}

// Add an event listener to trigger the removal of the loading overlay
window.addEventListener('load', removeLoadingOverlay);
// 





// const element = document.getElementById('AboutUs');
// element.scrollIntoView({behavior: 'smooth'});


const navigation= document.querySelector(".container1");

const navigationHeight=
navigation.offsetHeight;

document.documentElement.style.setProperty(
  "--scroll-padding",
  navigationHeight+"px"
)




function gfgMenu() {
  const GFG = document.querySelector('.links-hamburger');

  if (GFG.style.display === "none") {
    GFG.style.display = "block";
  }
  else {
    GFG.style.display = "none";
  }
}
