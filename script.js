document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
      closeMenu();
    });
  });

  // Hamburger menu toggle
  const hamburger = document.querySelector('.hamburger');
  const sideMenu = document.querySelector('.side-menu');

  hamburger.addEventListener('click', function() {
    sideMenu.classList.toggle('open');

    if (sideMenu.classList.contains('open')) {
      sideMenu.style.left = '0'; // Slide the menu in from the left
    } else {
      sideMenu.style.left = '-300px'; // Hide the menu by sliding it out to the left
    }
  });

  // Define the list of roles
const roles = [
  "Web Developer",
  "Graphic Designer",
  "UI/UX Designer",
  "Software Engineer",
  "Data Analyst"
];

// Get the role element
const roleElement = document.getElementById('role');

let currentRoleIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

function updateRole() {
  const currentRole = roles[currentRoleIndex];
  const displayedRole = currentRole.slice(0, currentCharIndex);

  roleElement.innerHTML = `I am <span class="highlight">${displayedRole}</span>`;

  if (!isDeleting) {
    if (currentCharIndex < currentRole.length) {
      currentCharIndex++;
    } else {
      isDeleting = true;
      setTimeout(updateRole, 1000); // Pause before deleting
    }
  } else {
    if (currentCharIndex > 0) {
      currentCharIndex--;
    } else {
      isDeleting = false;
      currentRoleIndex = (currentRoleIndex + 1) % roles.length; // Move to the next role
    }
  }

  const typingSpeed = isDeleting ? 50 : 150; // Adjust typing speed for deleting or typing
  setTimeout(updateRole, typingSpeed);
}

// Start the initial update
updateRole();

  // Close the menu
  function closeMenu() {
    sideMenu.classList.remove('open');
    sideMenu.style.left = '-300px';
  }

  // Add event listeners to menu items
  const menuItems = document.querySelectorAll('.side-menu a');

  menuItems.forEach(item => {
    item.addEventListener('click', closeMenu);
  });

  // Form validation
  const form = document.querySelector('.contact-form');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Perform validation
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    if (nameInput.value.trim() === '') {
      alert('Please enter your name.');
      nameInput.focus();
      return;
    }

    if (emailInput.value.trim() === '') {
      alert('Please enter your email.');
      emailInput.focus();
      return;
    }

    if (messageInput.value.trim() === '') {
      alert('Please enter a message.');
      messageInput.focus();
      return;
    }

    // Form submission code...
    // You can send the form data to the server or perform other actions here

    // Clear form inputs after submission
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';

    alert('Form submitted successfully!');
  });

  // Image slider using Swiper library
  var swiper = new Swiper('.swiper-container', {
    // Customize the options as per your requirements
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});


// script.js
// Define the list of roles
const roles = [
  "Web Developer",
  "Graphic Designer",
  "UI/UX Designer",
  "Software Engineer",
  "Data Analyst"
];

// Get the role element
const roleElement = document.getElementById('role');

let currentRoleIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
const originalTypingSpeed = 100; // Original typing speed in milliseconds
const originalPauseTime = 1500; // Original pause time in milliseconds
let typingSpeed = originalTypingSpeed;
let pauseTime = originalPauseTime;

function updateRole() {
  const currentRole = roles[currentRoleIndex];
  const displayedRole = currentRole.slice(0, currentCharIndex);

  roleElement.innerHTML = `I am a <span class="highlight">${displayedRole}</span>`;

  if (!isDeleting && currentCharIndex < currentRole.length) {
    currentCharIndex++;
    setTimeout(updateRole, typingSpeed);
  } else if (isDeleting && currentCharIndex > 0) {
    currentCharIndex--;
    setTimeout(updateRole, typingSpeed);
  } else if (!isDeleting && currentCharIndex === currentRole.length) {
    isDeleting = true;
    typingSpeed = originalTypingSpeed; // Reset typing speed
    pauseTime = originalPauseTime; // Reset pause time
    setTimeout(updateRole, pauseTime);
  } else {
    isDeleting = false;
    currentRoleIndex = (currentRoleIndex + 1) % roles.length; // Move to the next role
    typingSpeed = originalTypingSpeed; // Reset typing speed
    pauseTime = originalPauseTime; // Reset pause time
    setTimeout(updateRole, typingSpeed);
  }
}

// Start the initial update
updateRole();
