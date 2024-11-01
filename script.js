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


// Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Initial animation for the home section
    gsap.from('.home-content .left-content', {
      opacity: 0,
      x: -100,
      duration: 1,
      delay: 0.5
    });

    gsap.from('.home-content .right-content', {
      opacity: 0,
      x: 100,
      duration: 1,
      delay: 0.5
    });

    // Personal Details Section Animation
    gsap.from('.Personal-details', {
      scrollTrigger: {
        trigger: '.Personal-details',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 50,
      duration: 1
    });

    // Animate each personal detail and education item
    gsap.from('.details ul li, .Education ul li', {
      scrollTrigger: {
        trigger: '.Personal-details',
        start: 'top 70%',
      },
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.2
    });

    // Skills Section Animation
    gsap.from('.skills', {
      scrollTrigger: {
        trigger: '.skills',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      scale: 0.9,
      duration: 1
    });

    // Animate skills items with stagger
    gsap.from('.skills ul li', {
      scrollTrigger: {
        trigger: '.skills',
        start: 'top 70%'
      },
      opacity: 0,
      x: -50,
      duration: 0.8,
      stagger: 0.2
    });

    // Profiles Section Animation
    gsap.from('.profiles h1', {
      scrollTrigger: {
        trigger: '.profiles',
        start: 'top 80%'
      },
      opacity: 0,
      y: 30,
      duration: 0.8
    });

    // Animate social media links
    gsap.from('.social-media a', {
      scrollTrigger: {
        trigger: '.social-media',
        start: 'top 80%'
      },
      opacity: 0,
      y: 30,
      duration: 0.5,
      stagger: 0.2
    });

    // About Me Section Animation
    gsap.from('.About-me .top-info', {
      scrollTrigger: {
        trigger: '.About-me',
        start: 'top 70%'
      },
      opacity: 0,
      y: 50,
      duration: 1
    });

    // What I Offer Section Animation
    gsap.from('.what-i-offer', {
      scrollTrigger: {
        trigger: '.what-i-offer',
        start: 'top 80%'
      },
      opacity: 0,
      y: 50,
      duration: 1
    });

    gsap.from('.what-i-offer ul li', {
      scrollTrigger: {
        trigger: '.what-i-offer',
        start: 'top 75%'
      },
      opacity: 0,
      x: -50,
      duration: 0.8,
      stagger: 0.3
    });

    // Work Together Section Animation
    gsap.from('.work-together', {
      scrollTrigger: {
        trigger: '.work-together',
        start: 'top 75%'
      },
      opacity: 0,
      y: 50,
      duration: 1
    });

    // Footer Animation
    gsap.from('footer', {
      scrollTrigger: {
        trigger: 'footer',
        start: 'top 90%'
      },
      opacity: 0,
      y: 30,
      duration: 1
    });

    // Navbar Animation (on scroll)
    ScrollTrigger.create({
      start: 'top -80',
      onEnter: () => gsap.to('#navbar', {
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        duration: 0.3
      }),
      onLeaveBack: () => gsap.to('#navbar', {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        duration: 0.3
      })
    });
