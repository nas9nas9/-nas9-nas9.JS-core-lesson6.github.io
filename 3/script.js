function addImage(){
    if(event.target.className == 'box'){
        imageLink = 'url(' + prompt('Enter picture url') +')';
        event.target.style.backgroundImage = imageLink;
    }
}