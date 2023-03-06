(() => {
  const refs = {
    body: document.querySelector('body'),
    openMenuBtn: document.querySelector('.menu-open-btn'),
    closeMenuBtn: document.querySelector('.menu-close-btn'),
    menuBackdrop: document.querySelector('[data-mob-backdrop]'),
    menu: document.querySelector('[data-mob-menu]'),
    buttonTop: document.querySelector('[data-to-top]'),
    anchors: document.querySelectorAll('a[href*="#"]'),
  };
  
  window.onscroll = () => showBtnToTop();
  
  refs.openMenuBtn.addEventListener('click', handleOpenCloseMenu);
  refs.closeMenuBtn.addEventListener('click', handleOpenCloseMenu);
  
  function handleOpenCloseMenu() {
    toggleClass(refs.menuBackdrop, 'is-hidden');
    toggleClass(refs.menu, 'is-hidden');
    toggleClass(refs.body, 'no-scroll');
    toggleClass(refs.openMenuBtn, 'is-hidden');
    toggleClass(refs.closeMenuBtn, 'is-hidden');
  }
  
  function toggleClass(el, className) {
    el.classList.toggle(className)
  }
  
  for (let anchor of refs.anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const blockId = anchor.getAttribute('href');
      document.querySelector('' + blockId).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        closeMenu: closeMenu(e),
      })
    })
  }
  
  function closeMenu(e) {
    if (e.target.closest('.mob-nav-item') || e.target.closest('.mob-connect')) handleOpenCloseMenu();
  }
  
  function showBtnToTop() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      refs.buttonTop.classList.remove('hidden')
    } else {
      refs.buttonTop.classList.add('hidden')
    }
  }
})()