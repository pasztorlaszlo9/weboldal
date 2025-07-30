console.log('Script loaded successfully');

document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('showNavbarBtn');
  const navbarUl = document.querySelector('#navbar ul');

  btn.addEventListener('click', function() {
    navbarUl.classList.toggle('show-navbar');
    // Move button to top of nav list
    if (navbarUl.classList.contains('show-navbar')) {
      navbarUl.insertBefore(btn, navbarUl.firstChild);
      btn.innerHTML = '&#9776;'; // Hamburger icon
    } else {
      // Optionally move button back outside ul if needed
      document.getElementById('navbar').insertBefore(btn, navbarUl);
      btn.innerHTML = '&#9776;'; // Hamburger icon
    }
  });
});

