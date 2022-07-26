const interactiveTime = () => {
  const goodDay = document.querySelectorAll('.ls19__text')[0];
  const today = document.querySelectorAll('.ls19__text')[1];
  const timeNow = document.querySelectorAll('.ls19__text')[2];
  const daysLeft = document.querySelectorAll('.ls19__text')[3];

  let date = new Date();
  let weekDay = date.getDay();
  let time = date.getHours();
  let amPm = date.toLocaleString({ hour12: true }).slice(10).trim();

  const setGreeting = () => {
    if (time >= 5 && time < 12) {
      return 'Доброе утро';
    } else if (time >= 12 && time < 18) {
      return 'Добрый день';
    } else if (time >= 18 && time < 24) {
      return 'Добрый вечер';
    } else if (time >= 0 && time < 5) {
      return 'Доброй ночи';
    } else {
      return 'Приветствуем вас';
    }
  };
  const setWeekDay = () => {
    switch (weekDay) {
      case 0:
        return 'Воскресенье';
      case 1:
        return 'Понедельник';
      case 2:
        return 'Вторник';
      case 3:
        return 'Среда';
      case 4:
        return 'Четверг';
      case 5:
        return 'Пятница';
      case 6:
        return 'Суббота';
    }
  };
  const getDaysLeft = () => {
    let dateNow = date.getTime();
    let year = date.getFullYear();
    let dateStop = new Date(`1 January ${year + 1}`).getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let sec = Math.floor(timeRemaining % 60);
    let min = Math.floor((timeRemaining / 60) % 60);
    let hours = Math.floor((timeRemaining / 60 / 60) % 24);
    let days = Math.floor(timeRemaining / 60 / 60 / 24);

    return `${days} дней, ${hours} часов, ${min} минут, ${sec} секунд`;
  };

  goodDay.textContent = setGreeting();
  today.textContent = 'Сегодня: ' + setWeekDay();
  timeNow.textContent = 'Текущее время: ' + amPm;
  daysLeft.textContent = 'До нового года осталось: ' + getDaysLeft();
  setTimeout(interactiveTime, 1000);
};
export { interactiveTime };
