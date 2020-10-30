const timeSpan = document.getElementById('timer');

const deadline = new Date('Oct 31, 2020 20:10:00').getTime()

function addZero(num) {
  return (num<10 ? "0"+num : num)
}

const interval = setInterval(() => {
  let currentTime = new Date().getTime();
  let distance = deadline - currentTime;

  let hours = Math.floor((distance / (1000 * 60 * 60)));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if(hours + minutes + seconds <= 0) {
    const fireworks = document.getElementById('fireworks');
    fireworks.className = 'pyro'

    timeSpan.style = 'text-align:center; font-size:12em'
    timeSpan.innerHTML = '🚀'; 

    return clearInterval(interval)
  }

  hours = addZero(hours)
  minutes = addZero(minutes)
  seconds = addZero(seconds)
  
  timeSpan.innerHTML = "🚨 " + hours +'h ' + minutes + 'm ' + seconds + 's';

}, 1000)