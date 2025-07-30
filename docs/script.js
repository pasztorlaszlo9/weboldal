console.log('Script loaded successfully');

document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('showNavbarBtn');
  const navbarUl = document.querySelector('#navbar ul');

  btn.addEventListener('click', function() {
    navbarUl.classList.toggle('show-navbar');
    // Optionally toggle icon/text
    if (navbarUl.classList.contains('show-navbar')) {
      btn.innerHTML = '&#9776;'; // Hamburger icon
    } else {
      btn.innerHTML = '&#9776;'; // Hamburger icon
    }
  });
});

