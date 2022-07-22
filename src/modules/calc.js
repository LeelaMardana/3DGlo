const calc = (price = 100) => {
  const calcBlock = document.querySelector('.calc-block');
  const calcType = document.querySelector('.calc-type');
  const calcSquare = document.querySelector('.calc-square');
  const calcCount = document.querySelector('.calc-count');
  const calcDay = document.querySelector('.calc-day');
  const total = document.querySelector('#total');
  const speed = 100;

  let totalValue = 0;

  const animate = () => {
    //саму функцию раположите глобально для более быстрых и правильных расчетов
    const value = totalValue; //1 число которое нужно показать в конце
    //2 data принимаеет значение с верстки (перед запуском функции напиши total.innerText = 0)
    //Для того чтобы data приняла значение = 0 и отчет начинался с нуля до totalValue что всегда запустит анимацию
    //потому что data ВСЕГДА будет МЕНЬШЕ value то есть 0
    let data = +total.innerText; //3 должна принять ноль и запустить себя в цикле прибавляя time каждый цикл
    const time = value / speed; //4 вычесляет time (напиши const speed = 100(быстрее) или speed = 200(медленнее) в глобальной видимости)
    if (data < value) {
      // 5 запускаем рекурс где data прибаляется пока не достигнет value
      total.innerText = Math.ceil(data + time); //6 прибавляем time каждый цикл
      setTimeout(animate, 1);
    } else {
      // 7 после того как date стал больше value, срабатывает это условие
      // меняется конечный текст анимации на текст который был при расчетах.
      // ибо конечный текст анимации будет отличаться от текста расчетов
      total.innerText = Math.round(value);
    }
  };

  const countCalc = () => {
    const calcTypeValue = +calcType[calcType.selectedIndex].value;
    const calcSquareValue = calcSquare.value;

    let calcCountValue = 1;
    let calcDayValue = 1;

    if (!calcSquare.value || !calcType[calcType.selectedIndex].value)
      return (total.innerText = 0);

    if (calcTypeValue === 1) {
      price = 100;
    } else if (calcTypeValue === 1.4) {
      price = 120;
    } else if (calcTypeValue === 2) {
      price = 110;
    }

    if (+calcCount.value > 1) {
      calcCountValue += +calcCount.value / 10;
    }

    if (+calcDay.value >= 10 || +calcDay.value === 0) {
      calcDayValue = 1;
    } else if (+calcDay.value >= 1 && +calcDay.value < 5) {
      calcDayValue = 2;
    } else if (+calcDay.value >= 5 && +calcDay.value < 10) {
      calcDayValue = 1.5;
    }
    totalValue =
      price * calcSquareValue * calcTypeValue * calcCountValue * calcDayValue;

    total.innerText = 0;
    animate();
  };

  calcBlock.addEventListener('input', e => {
    if (
      e.target !== calcType &&
      e.target !== calcSquare &&
      e.target !== calcCount &&
      e.target !== calcDay
    )
      return;
    countCalc();
  });
};
export default calc;
