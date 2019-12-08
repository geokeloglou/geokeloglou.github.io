const menuBtn = document.querySelector('.menu-btn');
const blog = document.querySelector('.blog a');

menuBtn.addEventListener('click', toggleMenu);

let showMenu = true;

function toggleMenu() {
  if (showMenu) {
    blog.style.display = "block";
    showMenu = !showMenu;
    menuBtn.classList.add('close');
  } else {
    blog.style.display = "none";
    showMenu = !showMenu;
    menuBtn.classList.remove('close');

  }
}

function close_window() {
  if (confirm("Close Window?")) {
    close();
  }
}