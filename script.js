window.onload = () => {
  // Tạo biến để tính toán thời gian
  var minutes = 0;
  var seconds = 0;
  var miliseconds = 0;

  // Tạo biến để hiển thị lên trang web
  var appendMinutes = document.querySelector("#minutes")
  var appendSeconds = document.querySelector("#seconds")
  var appendMiliseconds = document.querySelector("#miliseconds")

  // Tạo biến để thực hiện chức năng bấm giờ
  var btnStart = document.querySelector("#start")
  var btnStop = document.querySelector("#stop")
  var btnReset = document.querySelector("#reset")

  var startTimer = () => {
    miliseconds++;
    if (miliseconds <= 9)
      appendMiliseconds.innerHTML = '0' + miliseconds;
    if (miliseconds > 9)
      appendMiliseconds.innerHTML = miliseconds;
    if (miliseconds > 99) {
      seconds++;
      appendSeconds.innerHTML = '0' + seconds;
      miliseconds = 0;
      appendMiliseconds.innerHTML = '0' + 0;
    }

    if (seconds > 9)
      appendSeconds.innerHTML = seconds;

    if (seconds > 59) {
      minutes++;
      appendMinutes.innerHTML = '0' + minutes;
      seconds = 0;
      appendSeconds.innerHTML = '0' + 0;
    }
  }
  btnStart.onclick = () => {
    //clearInterval(Interval)
    Interval = setInterval(startTimer, 10)
  }

  btnStop.onclick = () => {
    clearInterval(Interval)
  }

  btnReset.onclick = () => {
    clearInterval(Interval)
    minutes = 0;
    seconds = 0;
    miliseconds = 0;
    appendMinutes.innerHTML = '0' + 0;
    appendSeconds.innerHTML = '0' + 0;
    appendMiliseconds.innerHTML = '0' + 0;
  }
}