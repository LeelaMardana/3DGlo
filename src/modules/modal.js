const modal = () => {
  const modal = document.querySelector(".popup");
  const modalInner = modal.querySelector(".popup-content");
  const buttons = document.querySelectorAll(".btn.form-btn");
  const closeBtn = document.querySelector(".popup-close");

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

  buttons.forEach((button) =>
    button.addEventListener("click", () => {
      if (modal.style.display !== "block") {
        modal.style.display = "block";
        animation();
      }
    })
  );
  closeBtn.addEventListener("click", toDefault);
  modal.addEventListener("click", (e) => {
    if (!modalInner.contains(e.target)) toDefault();
  });
  document.addEventListener("keydown", (e) => {
    if (modal.style.display.length !== 0 && e.key === "Escape") toDefault();
  });
};

export default modal;
