const menu = () => {
  const menu = document.querySelector("menu");
  const body = document.querySelector("body");

  //функция плавного скролла
  const scrollTo = (id) => {
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  body.addEventListener("click", (e) => {
    //не запускать дальнейшую проверку если клик не прошел по этим двум кнопкам и если не было открыто меню
    if (
      !e.target.closest(".menu, main a") &&
      !menu.classList.contains("active-menu")
    ) {
      return;
    }

    //открытие и закрытие меню
    if (e.target.closest(".menu")) {
      menu.classList.add("active-menu");
    } else if (
      (menu.classList.contains("active-menu") && !e.target.closest("menu")) ||
      e.target.classList.contains("close-btn") ||
      e.target.matches("menu ul li a")
    ) {
      menu.classList.remove("active-menu");
    }

    // запуск плавного скролла
    if (e.target.closest("main a, menu ul li a")) {
      e.preventDefault();
      scrollTo(e.target.closest("main a, menu ul li a").getAttribute("href"));
    }
  });
};
export default menu;
