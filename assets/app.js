const submitBtn = document.querySelector('.not-submitted button'),
      rateItems = document.querySelectorAll('.not-submitted ul li'),
      firstStage = document.querySelector('.not-submitted'),
      secondStage = document.querySelector('.submitted'),
      ratingContainer = document.querySelector('.submitted p.rating span'),
      item = document.querySelector(".not-submitted ul li.active")
;

// Selects a rating
rateItems.forEach(item => item.onclick = () => {
    rateItems.forEach(e => e.classList.remove('active'));
    item.classList.add('active');
})

// Self explanatory.
const toggleCards = () => [firstStage, secondStage].forEach(e => e.classList.toggle('hidden'));

// Sets the rating on the span tag.
submitBtn.onclick = () => {
    if(item){
        toggleCards();
        ratingContainer.textContent = item.textContent;
    }
}