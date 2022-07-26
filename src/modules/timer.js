const timer = deadline => {
  // deadline = new Date(new Date().getTime() + 6 * 24 * 60 * 60 * 1000); // for endless timer

  const timerDays = document.getElementById('timer-days');
  const timerHours = document.getElementById('timer-hours');
  const timerMinutes = document.getElementById('timer-minutes');
  const timerSeconds = document.getElementById('timer-seconds');

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let days = Math.floor(timeRemaining / 60 / 60 / 24);
    let hours = Math.floor((timeRemaining / 60 / 60) % 24);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    return {
      timeRemaining,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  // TIMEOUT
  const updateClock = () => {
    let getTime = getTimeRemaining();
    if (getTime.timeRemaining > 0) {
      timerDays.textContent = getTime.days;
      timerHours.textContent = ('0' + getTime.hours).slice(-2);
      timerMinutes.textContent = ('0' + getTime.minutes).slice(-2);
      timerSeconds.textContent = ('0' + getTime.seconds).slice(-2);
      setTimeout(updateClock, 500);
    }
  };
  updateClock();

  // INTERVAL
  // const updateClock = () => {
  //   let getTime = getTimeRemaining();
  //   if (getTime.timeRemaining < 0) clearInterval(idInterval);
  //   else {
  //     timerDays.textContent = getTime.days;
  //     timerHours.textContent = ('0' + getTime.hours).slice(-2);
  //     timerMinutes.textContent = ('0' + getTime.minutes).slice(-2);
  //     timerSeconds.textContent = ('0' + getTime.seconds).slice(-2);
  //   }
  // };
  // const idInterval = setInterval(updateClock, 500);
  // updateClock();
};
export { timer };
