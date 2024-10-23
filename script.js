// Get elements
const hamburger = document.getElementById("hamburger");
const closeMenu = document.getElementById("close-menu");
const navList = document.getElementById("nav-list");

// Add event listener to the hamburger icon
hamburger.addEventListener("click", () => {
  navList.classList.add("nav-open"); // Show the menu
  hamburger.style.display = "none"; // Hide the hamburger icon
  closeMenu.style.display = "block"; // Show the close icon
});

// Add event listener to the close icon
closeMenu.addEventListener("click", () => {
  navList.classList.remove("nav-open"); // Hide the menu
  hamburger.style.display = "block"; // Show the hamburger icon
  closeMenu.style.display = "none"; // Hide the close icon
});

document.addEventListener("click", (event) => {
  // Check if the click is outside the navbar
  if (
    !navbar.contains(event.target) &&
    navList.classList.contains("nav-open")
  ) {
    closeNavMenu(); // Close the menu if clicked outside
  }
});

function closeNavMenu() {
  navList.classList.remove("nav-open"); // Hide the menu
  hamburger.style.display = "block"; // Show the hamburger icon
  closeMenu.style.display = "none"; // Hide the close icon
}

// TypeWriter Effect

var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  // css.type = "text/css";
  css.innerHTML =
    ".typewrite > .wrap { border-right: 0.09em solid var(--fontcolor)}";
  document.body.appendChild(css);
};
