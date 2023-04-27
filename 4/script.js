const text = document.querySelector('.text');


function color(e){
    if(e.target.closest('.red')){
        e.target.style.color = 'red'
    }
    if(e.target.closest('.yellow')){
        e.target.style.color = 'yellow'
    }
    if(e.target.closest('.green')){
        e.target.style.color = 'green'
    }
    if(e.target.closest('.blue')){
        e.target.style.color = 'blue'
    }
    if(e.target.closest('.orange')){
        e.target.style.color = 'orange'
    }
    if(e.target.closest('.gray')){
        e.target.style.color = 'gray'
    }

}

text.addEventListener('click', color);
