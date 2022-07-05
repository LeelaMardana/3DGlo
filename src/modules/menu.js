const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const closeBtn = document.querySelector(".close-btn");
  const menuItems = menu.querySelectorAll("ul>li>a");

  const array = [...menuItems, closeBtn, menuBtn];

  array.forEach((item) => {
    item.addEventListener("click", () => menu.classList.toggle("active-menu"));
  });
};
export default menu;
