const modal = () => {
  const modal = document.querySelector(".popup");
  const modalInner = modal.querySelector(".popup-content");
  const btns = document.querySelector(".service");
  let i = 0;
  let a = 0;

  const toDefault = () => {
    modal.style.display = "";
    i = 0;
    a = 0;
  };

  const animation = () => {
    const width = document.documentElement.clientWidth;
    if (width > 768) {
      const idInterval = requestAnimationFrame(animation);
      modalInner.style.opacity = 0;
      modalInner.style.left = 0;

      a++;
      i = i + 0.03;

      modalInner.style.left = a + "%";
      modalInner.style.opacity = i;

      if (a > 37) {
        cancelAnimationFrame(idInterval);
      }
    }
  };

  btns.addEventListener("click", (e) => {
    if (!e.target.closest("button.popup-btn")) {
      return;
    } else {
      modal.style.display = "block";
      animation();
    }
  });

  modal.addEventListener("click", (e) => {
    if (
      !e.target.closest(".popup-content") ||
      e.target.classList.contains("popup-close")
    )
      toDefault();
  });

  document.addEventListener("keydown", (e) => {
    if (modal.style.display.length !== 0 && e.key === "Escape") toDefault();
  });
};

export default modal;
