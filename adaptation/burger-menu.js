document.addEventListener("DOMContentLoaded", () => {
   const burgerMenu = document.querySelector(".burger-menu");
   const mobileNav = document.querySelector(".mobile-menu");

   const mobileNavLinks = Array.from(document.querySelectorAll(".mobile-nav-item-link"));

   const mobileExitBtn = document.querySelector(".exit-mobile-menu");

   mobileNavLinks.forEach(link => {
      link.addEventListener("click", () => {
          mobileNav.style.display = "none";
      });
   });

   burgerMenu.addEventListener("click", () => {
       mobileNav.style.display = "flex";
       mobileNav.style.flexDirection = "column";
       mobileNav.style.alignItems = "center";
       mobileNav.style.rowGap = "80px";
       mobileNav.style.justifyContent = "center";
       document.querySelector(".mobile-nav-menu").style.display = "flex";
   });

   mobileExitBtn.addEventListener("click", () => {
      mobileNav.style.display = "none";
   });

});