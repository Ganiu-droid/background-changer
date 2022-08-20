let body = document.querySelector('body');

document.getElementById('submit-btn').addEventListener('click', changeBackground);

const colours = ['yellow', 'orange', 'blue', 'white', 'red', 'purple', 'black' ];


function changeBackground(){
    const colourIndex = parseInt(Math.random() * colours.length)
    body.style.backgroundColor = colours[colourIndex];
}