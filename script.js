let timer;

function startTimer() {
  const minutesInput = document.getElementById('minutes').value || 0;
  const secondsInput = document.getElementById('seconds').value || 0;
  if(secondsInput>59){
    alert('invalid input');
    return;
  }

  const totalSeconds = parseInt(minutesInput) * 60 + parseInt(secondsInput);

  let secondsRemaining = totalSeconds;

  function updateTimerDisplay() {
    const minutes = Math.floor(secondsRemaining / 60);
    const seconds = secondsRemaining % 60;

    const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    document.getElementById('timer').innerText = formattedTime;
  }

  function updateTimer() {
    if (secondsRemaining > 0) {
      secondsRemaining--;
      updateTimerDisplay();
    } else {
      clearInterval(timer);
      alert('Timer has finished!');
    }
  }

  updateTimerDisplay();

  timer = setInterval(updateTimer, 1000);
}
