// Navigation toggle
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navMenu.style.display =
      navMenu.style.display === "block" ? "none" : "block";
  });
}

// Events array (array + object)
const events = [
  { name: "Sunday Worship", date: "Every Sunday" },
  { name: "Bible Study", date: "Wednesday Evening" }
];

// Display events (DOM + template literals)
const eventsList = document.getElementById("eventsList");

if (eventsList) {
  events.forEach(event => {
    eventsList.innerHTML += `<li>${event.name} - ${event.date}</li>`;
  });
}

// LocalStorage + function
function saveName() {
  const name = document.getElementById("username").value;
  localStorage.setItem("username", name);
  displayGreeting();
}

// Conditional + DOM
function displayGreeting() {
  const savedName = localStorage.getItem("username");
  const greeting = document.getElementById("greeting");

  if (savedName) {
    greeting.textContent = `Welcome back, ${savedName}!`;
  } else {
    greeting.textContent = "Welcome, visitor!";
  }
}

displayGreeting();

// Form handling
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("formMessage").textContent =
      "Message sent successfully!";
  });
}