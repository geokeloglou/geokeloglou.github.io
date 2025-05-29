const menuBtn = document.querySelector('.menu-btn');
const blog = document.querySelector('.blog a');
let showMenu = false;

function toggleMenu() {
  if (!showMenu) {
    blog.style.display = "block";
    menuBtn.classList.add('close');
  } else {
    blog.style.display = "none";
    menuBtn.classList.remove('close');
  }
  showMenu = !showMenu;
}

menuBtn.addEventListener('click', toggleMenu);
