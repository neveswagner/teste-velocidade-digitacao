
  let hora = 0;
  let minuto = 0;
  let segundo = 0;
  let milsegundos = 0;

  let cron;

  document.form_main.pause.onclick = () => pause();
  document.form_main.reset.onclick = () => reset();

  function start() {
    pause();
    cron = setInterval(() => { timer(); }, 10);
  }

  function pause() {
    clearInterval(cron);
  }

  function reset() {
    hora = 0;
    minuto = 0;
    segundo = 0;
    milsegundos = 0;
    document.getElementById('hora').innerText = '00';
    document.getElementById('minuto').innerText = '00';
    document.getElementById('segundo').innerText = '00';
    document.getElementById('milsegundos').innerText = '000';
    document.getElementById('texto').value = '';
  }

  function timer() {
    if ((milsegundos += 10) == 1000) {
      milsegundos = 0;
      segundo++;
    }
    if (segundo == 60) {
      segundo = 0;
      minuto++;
    }
    if (minuto == 60) {
      minuto = 0;
      hora++;
    }
    document.getElementById('hora').innerText = returnData(hora);
    document.getElementById('minuto').innerText = returnData(minuto);
    document.getElementById('segundo').innerText = returnData(segundo);
    document.getElementById('milsegundos').innerText = returnData(milsegundos);
  }

  function returnData(input) {
    return input > 10 ? input : `0${input}`
  }