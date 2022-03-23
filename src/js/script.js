let cardItem = document.querySelectorAll('.card-item');

for(let i = 0; i<cardItem.length; i++){
    cardItem[i].addEventListener('click', function(){
        if(this.classList.contains('selected')){

        }else{
            for(let j=0; j<cardItem.length; j++){
                cardItem[j].classList.remove('selected');
            }
            this.classList.add('selected');
        }
    })
}
