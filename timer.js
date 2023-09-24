function countDown(time) {
    const countdownDisplay = document.getElementById("timer");
  
    function countdownRecursive(time) {
      if (time <= 0) {
        countdownDisplay.textContent = 'DONE!';
      } else {
        countdownDisplay.textContent = time;
        setTimeout(function () {
          countdownRecursive(time - 1);
        }, 1000);
      }
    }
  
    countdownRecursive(time);
  }
  
  countDown(5);
  
