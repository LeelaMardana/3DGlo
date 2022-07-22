import { animate } from './helpers';

const modal = () => {
  const modal = document.querySelector('.popup');
  const modalInner = modal.querySelector('.popup-content');
  const btns = document.querySelector('.service');
  let i = 0;
  let a = 0;

  const toDefault = () => {
    modal.style.display = '';
    modalInner.style.opacity = '';
    modalInner.style.left = '';
    i = 0;
    a = 0;
  };

  btns.addEventListener('click', e => {
    if (!e.target.closest('button.popup-btn')) return;

    modal.style.display = 'block';

    const width = document.documentElement.clientWidth;
    if (width <= 768) return;
    animate({
      duration: 1000,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        modalInner.style.left = 38 * progress + '%';
        modalInner.style.opacity = progress;
      },
    });
  });

  modal.addEventListener('click', e => {
    if (
      !e.target.closest('.popup-content') ||
      e.target.classList.contains('popup-close')
    )
      toDefault();
  });

  document.addEventListener('keydown', e => {
    if (modal.style.display.length !== 0 && e.key === 'Escape') toDefault();
  });
};

export default modal;
