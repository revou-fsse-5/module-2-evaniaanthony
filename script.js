function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

var modal = document.getElementById("consultationModal");
var open = document.getElementById("openModal");
var close = document.getElementById("closeModal"); 

open.addEventListener('click', () => {
  modal.style.display = 'block';
});

close.addEventListener('click', () => {
  modal.style.display = 'none';
});

document.addEventListener('DOMContentLoaded', () => {
  const currentTheme = localStorage.getItem('theme') || 'day';
  document.documentElement.setAttribute('data-theme', currentTheme);

  const toggleButton = document.getElementById('toggle-button');
  toggleButton.addEventListener('click', () => {
      let theme = document.documentElement.getAttribute('data-theme');
      if (theme === 'day') {
          theme = 'night';
      } else {
          theme = 'day';
      }
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
  });
});


