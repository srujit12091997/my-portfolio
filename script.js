// Scroll progress bar
window.onscroll = function() {
    scrollProgress();
  };
  
  function scrollProgress() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("scrollBar").style.width = scrolled + "%";
  }
  
  // Active section highlight in navbar
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("#navbar ul li a");
  
  window.addEventListener("scroll", () => {
    let current = "";
    
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 60) {
        current = section.getAttribute("id");
      }
    });
  
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });
  
  // Dark Mode Toggle
  const darkModeToggle = document.getElementById("toggle-dark-mode");
  const body = document.body;
  
  darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const theme = body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("theme", theme);
  });
  
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme && savedTheme === "dark") {
    body.classList.add("dark-mode");
  }
  