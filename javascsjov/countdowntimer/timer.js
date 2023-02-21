function countDown(secs, elem) {
  var element = document.getElementById(elem);
  element.innerHTML = "<p>Please wait for " + secs + " seconds</p>";
  if (secs < 1) {
    clearTimeout(timer);
    element.innerHTML = "<h2>Countdown complete</h2>";
    element.innerHTML += '<a href="timer.html">Click here now</a>';
  }
  secs--;
  var timer = setTimeout("countDown(" + secs + ',"' + elem + '")', 1000);
}

countDown(10, "status");
