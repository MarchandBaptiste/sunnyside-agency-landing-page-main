document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.top-bar img:last-child');
  const nav = document.querySelector('header nav');
  
  hamburger.addEventListener('click', function() {
    nav.classList.toggle('active');
    
    if (nav.classList.contains('active')) {
      hamburger.src = "./assets/images/icon-close.svg";
    } else {
      hamburger.src = "./assets/images/icon-hamburger.svg";
    }
  });
});