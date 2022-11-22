const refs = {
  openMenuBtn: document.querySelector(".menu-open-btn"),
  closeMenuBtn: document.querySelector(".menu-close-btn"),
  menu: document.querySelector(".mob-menu"),
  menu: document.querySelector(".backdrop"),
  body: document.querySelector("body"),
};

refs.openMenuBtn.addEventListener("click", toggleMenu);
refs.closeMenuBtn.addEventListener("click", toggleMenu);

export function toggleMenu() {
  refs.menu.classList.toggle("is-hidden");
  refs.body.classList.toggle("no-scroll");
  refs.openMenuBtn.classList.toggle('is-hidden');
  refs.closeMenuBtn.classList.toggle('is-hidden');
}

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const blockId = anchor.getAttribute('href');
    document.querySelector('' + blockId).scrollIntoView({
        behavior: "smooth",
        block: "start",
        closeMenu: closeMenu(e),
    })
  })
}

function closeMenu(e) {
  if (e.target.closest('.mob-nav-item')) toggleMenu();
}