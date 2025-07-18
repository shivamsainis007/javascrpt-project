const clock = document.getElementById('clock');
setInterval(() => {
  const date = new Date().toLocaleTimeString();
  clock.innerHTML = date;
}, 1000);