import { animate } from './helpers';

const calc = (price = 100) => {
  const calcBlock = document.querySelector('.calc-block');
  const calcType = document.querySelector('.calc-type');
  const calcSquare = document.querySelector('.calc-square');
  const calcCount = document.querySelector('.calc-count');
  const calcDay = document.querySelector('.calc-day');
  const total = document.querySelector('#total');

  const countCalc = () => {
    const calcTypeValue = +calcType[calcType.selectedIndex].value;
    const calcSquareValue = calcSquare.value;

    let totalValue = 0;
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
    animate({
      duration: 500,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        total.innerText = Math.round(totalValue * progress);
      },
    });
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
