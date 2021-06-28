window.onload=function(){
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links li");

  document.querySelector(".mobile-icon").addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
      link.classList.toggle("fade");
    });
  });
const navLinks2 = document.querySelector(".dd-links");
const links2 = document.querySelectorAll(".dd-links li");

document.querySelector(".discover").addEventListener("click", () => {
  navLinks2.classList.toggle("open");
  links2.forEach(link => {
    link.classList.toggle("active");

  });
});
}
