const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;
let intervalId = null;

const trafficLight = (event) => {
    stopAutomatic();
    turnOn[event.target.id]();
}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;

const changeColor = () => {
    const colors = ['red', 'yellow', 'green'];
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
}

const stopAutomatic = () => {
    clearInterval(intervalId);
}

const turnOn = {
    'red': () => img.src = "vermelho.jpg",
    'yellow': () => img.src = "amarelo.jpg",
    'green': () => img.src = "verde.jpg",
    'automatic': () => {
        intervalId = setInterval(changeColor, 1000);
        buttons.children.automatic.id = 'stop';
    },
    'stop': () => {
        stopAutomatic();
        buttons.children.stop.id = 'automatic';
    }
}

buttons.addEventListener('click', trafficLight);
