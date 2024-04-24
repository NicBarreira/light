const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');
const correctButton = document.getElementById('correct');

function lampBroken() {
    return lamp.src.indexOf('quebrada') > -1;
}

function lampOn() {
    if (!lampBroken()) {
        lamp.src = 'imgs/ligada.jpg';
    }
}

function lampOff() {
    if (!lampBroken()) {
        lamp.src = 'imgs/desligada.jpg';
    }
}

function lampBroke() {
    lamp.src = 'imgs/quebrada.jpg';
}



correctButton.addEventListener('click', function() {
    if (lampBroken(true)) {
        lamp.src = 'imgs/desligada.jpg ' ;
    }
});

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroke);