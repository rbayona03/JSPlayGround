const colorbtn = document.querySelector('.color');

const bodyBCG = document.querySelector('body');

const colors = ['yellow', 'red' , 'green', 'black', 'white', 'pink' ];

colorbtn.addEventListener('click', changeColor);

function changeColor(){
    let random = Math.floor(Math.random()*colors.length)
    bodyBCG.style.backgroundColor = colors[random]
}
