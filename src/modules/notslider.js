const notslider = (sliderName = 'slider', timeInterval = 3000) => {
  const sliderBlock = document.querySelector(`.${sliderName}-content`);
  const slides = document.querySelectorAll(`.${sliderName}-item`);

  let currentSlide = 0;
  let interval;

  if (!sliderBlock || slides.length === 0) {
    console.log(`Ошибка в слайдере: не найдены необходимые классы`);
    return;
  }

  const dots = (() => {
    const dotsBlock = document.createElement('ul');
    dotsBlock.classList.add(`${sliderName}-dots`);
    sliderBlock.append(dotsBlock);
    for (let i = 0; i < slides.length; i++) {
      const dot = document.createElement('li');
      dot.classList.add(`${sliderName}-dot`);
      dotsBlock.append(dot);
    }
    const dots = document.querySelectorAll(`.${sliderName}-dot`);
    dots[0].classList.add(`${sliderName}-dot-active`);
    return dots;
  })();

  const prevSlide = (elems, index, startClass) => {
    elems[index].classList.remove(startClass);
  };
  const nextSlide = (elems, index, startClass) => {
    elems[index].classList.add(startClass);
  };

  const autoSlide = () => {
    prevSlide(
      slides,
      currentSlide,
      `${slides[0].className.match(/^\S+\S/)[0]}-active`
    );
    prevSlide(dots, currentSlide, `${sliderName}-dot-active`);
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    nextSlide(
      slides,
      currentSlide,
      `${slides[0].className.match(/^\S+\S/g)[0]}-active`
    );
    nextSlide(dots, currentSlide, `${sliderName}-dot-active`);
  };

  const startSlide = () => {
    interval = setInterval(autoSlide, timeInterval);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  sliderBlock.addEventListener('click', e => {
    e.preventDefault();
    if (
      !e.target.matches(`.${sliderName}-dot, .${sliderName}-btn`) ||
      e.target.matches(`.${sliderName}-dot-active`)
    )
      return;
    prevSlide(
      slides,
      currentSlide,
      `${slides[0].className.match(/^\S+\S/g)[0]}-active`
    );
    prevSlide(dots, currentSlide, `${sliderName}-dot-active`);

    if (e.target.matches('#arrow-right')) {
      currentSlide++;
    } else if (e.target.matches('#arrow-left')) {
      currentSlide--;
    } else if (e.target.classList.contains(`${sliderName}-dot`)) {
      dots.forEach((dot, index) => {
        if (e.target === dot) {
          currentSlide = index;
        }
      });
    }

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }

    nextSlide(
      slides,
      currentSlide,
      `${slides[0].className.match(/^\S+\S/g)[0]}-active`
    );
    nextSlide(dots, currentSlide, `${sliderName}-dot-active`);
  });

  sliderBlock.addEventListener(
    'mouseenter',
    e => {
      if (!e.target.matches(`.${sliderName}-dot, .${sliderName}-btn`)) return;
      stopSlide();
    },
    true
  );

  sliderBlock.addEventListener(
    'mouseleave',
    e => {
      if (!e.target.matches(`.${sliderName}-dot, .${sliderName}-btn`)) return;
      startSlide(timeInterval);
    },
    true
  );

  startSlide(timeInterval);
};

export { notslider };
