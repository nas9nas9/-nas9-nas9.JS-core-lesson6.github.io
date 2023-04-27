const box = document.querySelector('.box');

function mouseover(e){
    e.target.style.backgroundColor = 'yellow';
    e.target.innerText = 'Хочешь знати який?'
    e.target.style.color = 'blue';
    e.target.style.borderColor = 'black'
}

function mouseout(e){
    e.target.style.backgroundColor = 'darkmagenta';
    e.target.innerText = 'У мене є секрет!';
    e.target.style.color = 'blue';
    e.target.style.borderColor = 'orange';
}
function mousedown(e){
    e.target.style.backgroundColor = 'black';
    e.target.innerText = 'А я тобі не скажу!';
    e.target.style.color = 'white';
    e.target.style.borderColor = 'yellow';
}
function mouseup(e){
    e.target.style.backgroundColor = 'yellow';
    e.target.innerText = 'Хочешь знати який?'
    e.target.style.color = 'blue';
    e.target.style.borderColor = 'black'
}


box.addEventListener('mouseover', mouseover);
box.addEventListener('mouseout', mouseout);
box.addEventListener('mousedown', mousedown);
box.addEventListener('mouseup', mouseup);