const box = document.querySelector('.box');

let countOver = 0;
function showColor (e){
    countOver++;
    let color;
    countOver%3 == 1 
            ? color ='red'
            : countOver%3 == 2
                ? color ='yellow'
                : color ='green';    
    e.target.style.backgroundColor = color;
}
function backgroundColor (e){
    e.target.style.backgroundColor = 'darkmagenta';
}

box.addEventListener('mouseover', showColor);

box.addEventListener('mouseout', backgroundColor);