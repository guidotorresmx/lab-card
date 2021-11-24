function addHeartEvent(){
    const heart = document.getElementById('heart'); 
    const likeUnlikePost = function() {
      if(heart.classList.contains('like')) {
        heart.classList.remove('like');
        heart.classList.add('unlike');
      } else {
        heart.classList.remove('unlike');
        heart.classList.add('like');
      }  
    }
    heart.addEventListener('click', likeUnlikePost); 
}

function addGalleryEvents() {

    document.querySelector(`.gallery`).addEventListener(`click`, (event) => {
        event.currentTarget.classList.add(`second`);
        document.querySelector(`.second`).addEventListener(`click`, (event) => {
            event.currentTarget.classList.add(`third`);
            document.querySelector(`.third`).addEventListener(`click`, (event) => {
                event.currentTarget.classList.remove(`second`);
                event.currentTarget.classList.remove(`third`);
                addGalleryEvents();
            })
        })
    })
}

function addEvents() {
    addHeartEvent();
    addGalleryEvents();
}

addEvents()


