let digital = document.querySelector('.digital');
let ponteitoSeg = document.querySelector('.p_s');
let ponteitoMin = document.querySelector('.p_m');
let ponteitoHora = document.querySelector('.p_h');

function atualizar(){
    const dataAtual = new Date();
    const hora = dataAtual.getHours();
    const minutos = dataAtual.getMinutes();
    const segundos = dataAtual.getSeconds();

    digital.innerHTML = `${hora < 10 ? '0'+hora : hora}:${minutos < 10 ? '0'+minutos : minutos}:${segundos < 10 ? '0'+segundos : segundos}`
    const segDeg = ((360 / 60) * segundos) - 90
    const minDeg = ((360 / 60) * minutos) - 90
    const horDeg = ((360 / 12) * hora) - 90
    ponteitoSeg.style.transform = `rotate(${segDeg}deg)`
    ponteitoMin.style.transform = `rotate(${minDeg}deg)`
    ponteitoHora.style.transform = `rotate(${horDeg}deg)`
}
setInterval(atualizar,1000)
atualizar()