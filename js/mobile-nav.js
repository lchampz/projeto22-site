class MobileNavbar {
  constructor(mobilemenu, navlist, navlinks) {
    this.mobileMenu = document.querySelector(mobilemenu);
    this.navList = document.querySelector(navlist);
    this.navLinks = document.querySelectorAll(navlinks);
    this.activeMenu = "activeMenu";
    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, i) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s  ease forwards ${
            i / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeMenu);
    this.mobileMenu.classList.toggle(this.activeMenu);
    this.animateLinks();
  }

  clickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.clickEvent();
    }
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li"
);

mobileNavbar.init();
