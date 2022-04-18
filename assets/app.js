const submitBtn = document.querySelector('.not-submitted button'),
      rateItems = document.querySelectorAll('.not-submitted ul li'),
      firstStage = document.querySelector('.not-submitted'),
      secondStage = document.querySelector('.submitted'),
      ratingContainer = document.querySelector('.submitted p.rating span')
;

// Selects a rating
for(let i = 0; i < rateItems.length; i++){
    rateItems[i].onclick = () => {
        rateItems.forEach(e => e.classList.remove('active'))
        rateItems[i].classList.add('active')
    }
}


// Return the active rating when called.
const classItem = () => {
    let item;
    rateItems.forEach(e => {
        if(e.classList.contains('active')){
            item = e.innerText;
        }
    })
    return item;
}

// Self explanatory.
const toggleCards = () => {
    firstStage.classList.toggle('hidden');
    secondStage.classList.toggle('hidden');
}

// Sets the rating on the span tag.
submitBtn.onclick = () => {
    let item = classItem();

    if(item != undefined){
        toggleCards()
        ratingContainer.innerText = item
    }
}
