console.log('Script loaded successfully');

document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('showNavbarBtn');
  const navbarUl = document.querySelector('#navbar ul');

  btn.addEventListener('click', function () {
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
  document.querySelectorAll('.reserve-btn').forEach(function (btn) {
    btn.addEventListener('click', function (event) {
      event.preventDefault();

      // Find the closest table row
      const row = btn.closest('tr');
      // Find the select and date input in this row
      const sport = row.querySelector('select[name="sport"]');
      const location = row.querySelector('select[name="location"]');
      const date = row.querySelector('input[type="date"]');
      const timeFrom = row.querySelector('input[name="time-from"]');
      const timeTo = row.querySelector('input[name="time-to"]');

      if (sport && !sport.value) {
        alert('Kérlek, válassz sportágat!');
        return;
      }
      if (location && !location.value) {
        alert('Kérlek, válassz helyszínt!');
        return;
      }
      if (!date || !date.value) {
        alert('Kérlek, válassz dátumot!');
        return;
      }
      if (!timeFrom || !timeFrom.value) {
        alert('Kérlek, válassz kezdő időpontot!');
        return;
      }
      if (!timeTo || !timeTo.value) {
        alert('Kérlek, válassz végző időpontot!');
        return;
      }

      const templateParams = {
        sport: sport ? sport.options[sport.selectedIndex].text : '',
        location: location ? location.options[location.selectedIndex].text : '',
        date: date.value,
        time_from: timeFrom.value,
        time_to: timeTo.value
      };

      console.log('Sending with:', templateParams);

      emailjs.send('sporttelepek_0825', 'template_tmtoa2g', templateParams)
        .then(function (response) {
          console.log('EmailJS success:', response);
          alert('Foglalás elküldve');
          // Reset all input/select fields in the same row
          row.querySelectorAll('input, select').forEach(function (input) {
            if (input.type === 'select-one' || input.tagName.toLowerCase() === 'select') {
              input.selectedIndex = 0;
            } else {
              input.value = '';
            }
          });
        }, function (error) {
          console.error('EmailJS error:', error);
          alert('Hiba történt a foglalás elküldésekor.');
        });

      //alert('Foglalás elküldve');
      // Optionally, you can redirect or submit here
      // window.location.href = 'helyszinek.html';
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  if (window.innerWidth <= 600) {
    const tableRows = document.querySelectorAll('.table tr:not(.header-row)');
    tableRows.forEach(row => {
      const img = row.querySelector('img');
      if (img) {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function () {
          if (row.classList.contains('expanded')) {
            // Collapse: remove expanded and show all rows
            row.classList.remove('expanded');
            tableRows.forEach(r => r.style.display = 'table-row');
          } else {
            // Expand: hide all rows, show only this one
            tableRows.forEach(r => {
              r.classList.remove('expanded');
              r.style.display = 'none';
            });
            row.classList.add('expanded');
            row.style.display = 'table-row';
          }
        });
      }
    });
  }
});
