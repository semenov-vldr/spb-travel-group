const header = document.querySelector('header.header');

if (header) {

  const headerBurger = header.querySelector('.header__burger');

  headerBurger.addEventListener('click', () => {
    header.classList.toggle('js-menu-open');
    toggleScrollBody();
  })

  const navItems = header.querySelectorAll('.header__nav-item');

  navItems.forEach(navItem => {

    navItem.addEventListener('click', () => {
      navItem.classList.toggle('js-subnav-open');
    });

    const subNav = navItem.querySelector('.header__subnav');
    (!subNav) ? navItem.classList.add('empty') : navItem.classList.remove('empty');
  })


  // scroll
  window.addEventListener('scroll', () => scrollHeader (header) );

}
